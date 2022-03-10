import { IncomingMessage } from 'http';
import { parse } from 'url';
import { ParsedRequest, Theme } from './types';
import { BASE_URL } from '../../../utils';

export function parseRequest(req: IncomingMessage) {
  console.log('HTTP req' + req);
  const { pathname, query } = parse(req.url || '/', true);

  const { percentage, date, images, theme } = query || {};

  if (Array.isArray(date)) {
    throw new Error('Expected a single date');
  }
  if (Array.isArray(theme)) {
    throw new Error('Expected a single theme');
  }

  const parsedRequest = {
    text: percentage,
    theme: theme === 'dark' ? 'dark' : 'light',
    date: date || '2021.01.01 - 2021.01.10',
    image: getDefaultImages()
  };

  return parsedRequest;
}

function getArray(stringOrArray: string[] | string | undefined): string[] {
  if (typeof stringOrArray === 'undefined') {
    return [];
  } else if (Array.isArray(stringOrArray)) {
    return stringOrArray;
  } else {
    return [stringOrArray];
  }
}

function getDefaultImages(): string {
  console.log(`in img ${BASE_URL}/assets/common/twitter-card-template@2x.png`);
  return `${BASE_URL}/assets/common/twitter-card-template@2x.png`;
}
