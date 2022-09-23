import { createContext } from "react"

const burgerIngredients = createContext({
  hash: Object,
  update: () => {}
});

export default burgerIngredients
