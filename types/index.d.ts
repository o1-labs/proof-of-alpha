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
