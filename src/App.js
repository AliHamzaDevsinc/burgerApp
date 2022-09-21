import logo from './burger-logo.png';
import './App.css';
import './bread-ingredient.css';
import './burger.css';
import './layout.css';
import './modal.css';
import './buildControl.css';
import './buildControls.css';
import { useState, userContext, createContext } from 'react';

const BurgerIngredients = createContext();

const ingredientsDetail = {
  "Lettuce": {
    "quantity": 1,
    "price": 0.25
  },
  "Bacon": {
    "quantity": 1,
    "price": 1.00
  },
  "Cheese": {
    "quantity": 2,
    "price": 1.50
  },
  "Meat": {
    "quantity": 3,
    "price": 0.75
  }
}

function changeQuantity(ingredients, action, ingredient) {
  const qty = ingredients[ingredient]['quantity']
  if (action == 'Add')
  {
    console.log('hello')
    ingredients[ingredient]['quantity'] = qty + 1
  }
  else
  {
    ingredients[ingredient]['quantity'] = qty - 1
  }
}


function BurgerInnerContents(props) {
  const innerContent = []
  Object.entries(ingredientsDetail).forEach((index, value)=> {
    console.log(index[1]['quantity'])
    for(let i=0; i<index[1]['quantity']; i++)
    {
      innerContent.push(<div className={index[0]}></div>)
    }
  });
  return innerContent;
}

function setDisable(ingredient)
{
  return (ingredient['quantity'] == '0' ? true : false)
}

const App = () => {

  return (
    <BurgerIngredients.Provider value={ingredientsDetail}>
      <div className="header">
        <div className='logo'>
          <img src={logo}/>
        </div>
      </div>
      <div className='Content'>
        <div className='Burger'>
          <div className='BreadTop'>
            <div className='Seeds1'></div>
            <div className='Seeds2'></div>
          </div>
          <BurgerInnerContents ingredients={ingredientsDetail} />
          <div className='BreadBottom'></div>
        </div>
        <div className='BuildControls'>
          <p style={{textAlign: "center"}}>Current Price <strong>$3.00</strong></p>
          <div className="BuildControl">
            <div className="Label">Lettuce</div>
            <button className="Less" disabled={setDisable(ingredientsDetail['Lettuce'])} onClick={changeQuantity(ingredientsDetail, 'Remove', 'Lettuce')}>Less</button>
            <button className="More" onClick={changeQuantity(ingredientsDetail, 'Add', 'Lettuce')}>More</button>
          </div>
          <div className="BuildControl">
            <div className="Label">Bacon</div>
            <button className="Less" disabled={setDisable(ingredientsDetail['Bacon'])} onClick={changeQuantity(ingredientsDetail, 'Remove', 'Bacon')}>Less</button>
            <button className="More" onClick={changeQuantity(ingredientsDetail, 'Add', 'Bacon')}>More</button>
          </div>
          <div className="BuildControl">
            <div className="Label">Cheese</div>
            <button className="Less" disabled={setDisable(ingredientsDetail['Cheese'])} onClick={changeQuantity(ingredientsDetail, 'Remove', 'Cheese')}>Less</button>
            <button className="More" onClick={changeQuantity(ingredientsDetail, 'Add', 'Cheese')}>More</button>
          </div>
          <div className="BuildControl">
            <div className="Label">Meat</div>
            <button className="Less" disabled={setDisable(ingredientsDetail['Meat'])} onClick={changeQuantity(ingredientsDetail, 'Remove', 'Meat')}>Less</button>
            <button className="More" onClick={changeQuantity(ingredientsDetail, 'Add', 'Meat')}>More</button>
          </div>
        </div>
      </div>
  </BurgerIngredients.Provider>
  );
}

export default App;

