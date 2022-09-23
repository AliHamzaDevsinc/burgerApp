import { useState } from "react"
import BurgerIngredients from "./ingredientContext";

const IngredientsDetail = (props) => {
  const hash = {
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
  const [ingredients, setIngredients] = useState(hash);

  const update = (ingredient, action, qty) => {
    qty = (action === 'Add' ? qty + 1 : qty - 1)

    setIngredients({
        ...ingredients,
        [ingredient]: {
          ...ingredients[ingredient],
          "quantity": qty,
        }
      })
  }

  return (
    <BurgerIngredients.Provider value={{ingredients, update}}>
      {props.children}
    </BurgerIngredients.Provider>
  )
}

export default IngredientsDetail
