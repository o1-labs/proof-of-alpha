import { readFileSync } from 'fs';
import { marked } from 'marked';
import { sanitizeHtml } from './sanitizer';
import { ParsedRequest } from './types';
import path from 'path';

const twemoji = require('twemoji');
const twOptions = { folder: 'svg', ext: '.svg' };
const emojify = (text: string) => twemoji.parse(text, twOptions);

const rglrdir = path.resolve('./public', 'fonts/roboto-regular.woff2');
const rglr = readFileSync(rglrdir).toString('base64');
const thindir = path.resolve('./public', 'fonts/roboto-thin-100.woff2');
const thin = readFileSync(thindir).toString('base64');

function getCss(theme: string, fontSize: string) {
  let background = 'white';
  let foreground = 'black';
  let radial = 'lightgray';

  if (theme === 'dark') {
    background = 'black';
    foreground = 'white';
    radial = 'dimgray';
  }
  return `
    @font-face {
        font-family: 'Roboto';
        font-style:  normal;
        font-weight: normal;
        src: url(data:font/woff2;charset=utf-8;base64,${rglr}) format('woff2');
    }
    @font-face {
        font-family: 'Roboto';
        font-style:  light;
        font-weight: light;
        src: url(data:font/woff2;charset=utf-8;base64,${thin}) format('woff2');
    }


    body {
        background: ${background};
        
        background-image: radial-gradient(circle at 25px 25px, ${radial} 2%, transparent 0%), radial-gradient(circle at 75px 75px, ${radial} 2%, transparent 0%);
        background-size: 100px 100px;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
 font-family: 'Roboto';
        font-style:  thin;
    }

    .logo {
      
    }
   
    .prove-text {
      position: absolute;
    
      bottom: 28%;
      left: 33.5%;
      color: #14ff00;
      font-family: 'Roboto';
      font-style:  'light';
      font-size: 200px;
    }

    .generated-wrapper {
        position: relative;
        height: auto;
        width: 2300px;
    }

    .date-text {
      position: absolute;
    
      bottom: 24.5%;
      left: 39%;
      color: #fff;
      font-family: 'Roboto';
      font-style:  'light';
      font-size: 40px; 
      letter-spacing: 0.2em       
    }

    .heading {
        font-family: 'Roboto', sans-serif;
        font-size: ${sanitizeHtml(fontSize)};
        font-style: normal;
        color: ${foreground};
        line-height: 1.8;
    }`;
}

export function getHtml(parsedReq) {
  const { text, theme, md, date, image, widths, heights } = parsedReq;
  console.log('tets', image);
  return `<!DOCTYPE html>
            <html> 
                <meta charset="utf-8">
                <title>Generated Image</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <style>
                    ${getCss(theme, date)}
                </style>
                <body>
                    <div class="generated-wrapper">   
                        <div class="prove-text">${emojify(
                          md ? marked(text) : sanitizeHtml(text)
                        )}</div>
                        <div class="date-text">${emojify(
                          md ? marked(date) : sanitizeHtml(date)
                        )}</div>
                            ${getImage(image, widths, heights)}
                        </div>
                    
                </body>
            </html>`;
}

function getImage(src: string, width = '2300', height = 'auto') {
  return `<img
        class="logo"
        alt="Generated Image"
        src="${sanitizeHtml(src)}"
        width="${sanitizeHtml(width)}"
        height="${sanitizeHtml(height)}"
    />`;
}
