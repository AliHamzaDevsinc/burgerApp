export const changeQuantity = (ingredients, action, ingredient) => {
  const qty = ingredients["hash"][ingredient]['quantity']
  console.log(ingredients, action, ingredient)
  if (action === 'Add')
  {
    ingredients.updateHash(ingredient)
    console.log(ingredients)
  }
  else
  {
    console.log("I am in else")
    ingredients[ingredient]['quantity'] = qty - 1
  }
}

export const setDisable = ingredient =>
{
  return (ingredient['quantity'] == '0' ? true : false)
}
