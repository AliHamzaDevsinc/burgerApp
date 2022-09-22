import React from 'react';
import { UrlContext } from './links';

export const useUrl = (): UrlContext => {
  const ingerident = {
    "Lettuce": {
    "quantity": 0,
    "price": 0.25
    },
    "Bacon": {
      "quantity": 0,
      "price": 1.00
    },
    "Cheese": {
      "quantity": 0,
      "price": 1.50
    },
    "Meat": {
      "quantity": 0,
      "price": 0.75
    }
  }
  const [hash, setHash] = React.useState(ingerident);

  const setCurrentHash = React.useCallback((currentHash: any): void => {
    setHash(currentHash);
  }, []);

  return {
    hash,
    setCurrentHash,
  };
}
