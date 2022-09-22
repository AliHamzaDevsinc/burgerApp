const ingredientsDetail = {
  "hash": {
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
  updateHash: function (ingredient){
    const quantity = this.hash[ingredient].quantity
    this.hash[ingredient].quantity = quantity + 1
  }
}

export default ingredientsDetail
