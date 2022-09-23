import logo from './burger-logo.png';
import './CSS/App.css'
import './CSS/bread-ingredient.css'
import './CSS/burger.css';
import './CSS/layout.css';
import './CSS/modal.css';
import './CSS/buildControl.css';
import './CSS/buildControls.css';
import { useState, userContext, createContext, useContext } from 'react';
import { changeQuantity, setDisable } from './js/main'
import ingredientsDetail from './js/ingredients'
import BurgerInnerContents from './components/BurgerInnerContents';
import burgerIngredients from './js/ingredientContext';

const App = () => {
  const burgerContent = useContext(burgerIngredients)
  const ingredients = burgerContent['ingredients']
  // console.log("Hello ", burgerContent['ingredients']['Meat'])
  return (
    <>
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
          <BurgerInnerContents ingredients={ingredients} />
          {console.log(ingredients["Lettuce"].quantity)}
          <div className='BreadBottom'></div>
        </div>
        <div className='BuildControls'>
          <p style={{textAlign: "center"}}>Current Price <strong>$3.0</strong></p>
          <div className="BuildControl">
            <div className="Label">Lettuce</div>
            <button clasName="Less" disabled={setDisable(ingredients['Lettuce'])} onClick={() => burgerContent.update("Lettuce", "Remove", ingredients["Lettuce"].quantity)}>Less</button>
            <button className="More" onClick={() => burgerContent.update("Lettuce", "Add", ingredients["Lettuce"].quantity)}>More</button>
          </div>
          <div className="BuildControl">
            <div className="Label">Bacon</div>
            <button clasName="Less" disabled={setDisable(ingredients['Bacon'])} onClick={() => burgerContent.update("Bacon", "Remove", ingredients["Bacon"].quantity)}>Less</button>
            <button className="More" onClick={() => burgerContent.update("Bacon", "Add", ingredients["Bacon"].quantity)}>More</button>
          </div>
          <div className="BuildControl">
            <div className="Label">Cheese</div>
            <button clasName="Less" disabled={setDisable(ingredients['Cheese'])} onClick={() => burgerContent.update("Cheese", "Remove", ingredients["Cheese"].quantity)}>Less</button>
            <button className="More" onClick={() => burgerContent.update("Cheese", "Add", ingredients["Cheese"].quantity)}>More</button>
          </div>
          <div className="BuildControl">
            <div className="Label">Meat</div>
            <button clasName="Less" disabled={setDisable(ingredients['Meat'])} onClick={() => burgerContent.update("Meat", "Remove", ingredients["Meat"].quantity)}>Less</button>
            <button className="More" onClick={() => burgerContent.update("Meat", "Add", ingredients["Meat"].quantity)}>More</button>
          </div>
        </div>
      </div>
  </>
  );
}

export default App;

