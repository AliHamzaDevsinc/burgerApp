import React from 'react'
import { createContext } from 'react';

export interface UrlContext {
  hash: any;
  setCurrentHash: (currentHash: any) => void
}

export const HASH_DEFAULT_VALUE = {
  hash: {
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
  },
  setCurrentHash: () => {},
};

export const UrlContext = createContext<UrlContext>
(HASH_DEFAULT_VALUE)
