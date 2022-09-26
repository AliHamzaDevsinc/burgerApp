import { useContext } from 'react'
import BurgerIngredients from './ingredients'

export const changeQuantity = (ingredients, action, ingredient) => {
}

export const setDisable = ingredient =>
{
  return (ingredient['quantity'] == '0' ? true : false)
}

export const calculatePrice = ingredients => {
  var totalPrice = 2.00
  Object.entries(ingredients).forEach((index, value)=> {
    for(let i=0; i<index[1]['quantity']; i++)
    {
      totalPrice = totalPrice + parseFloat(index[1].price)
    }
  });
  return totalPrice.toString();
}
