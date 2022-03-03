export interface Trade {
  id: number;
  pairId: string;
  buy: {
    timestamp: string;
    quantity: string;
    price: string;
  };
  sell: {
    timestamp: string;
    quantity: string;
    price: string;
  };
}
declare global {
  interface Window {
    mina: any;
  }
}

declare module '*.png';
