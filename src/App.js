import logo from './burger-logo.png';
import './CSS/App.css'
import './CSS/bread-ingredient.css'
import './CSS/burger.css';
import './CSS/layout.css';
import './CSS/modal.css';
import './CSS/buildControl.css';
import './CSS/buildControls.css';
import { useState, userContext, createContext } from 'react';
import { changeQuantity, setDisable } from './js/main'
import ingredientsDetail from './js/ingredients'
import BurgerInnerContents from './components/BurgerInnerContents';


const BurgerIngredients = createContext();

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
          {console.log("ingredientsDetail")}
          {console.log(ingredientsDetail)}
          {console.log("ingredientsDetail")}
          <div className='BreadBottom'></div>
        </div>
        <div className='BuildControls'>
          <p style={{textAlign: "center"}}>Current Price <strong>$3.0</strong></p>
          <div className="BuildControl">
            <div className="Label">Lettuce</div>
            <button className="Less" disabled={setDisable(ingredientsDetail["hash"]['Lettuce'])} onClick={() => changeQuantity(ingredientsDetail, 'Remove', 'Lettuce')}>Less</button>
            <button className="More" onClick={() => changeQuantity(ingredientsDetail, 'Add', 'Lettuce')}>More</button>
          </div>
          <div className="BuildControl">
            <div className="Label">Bacon</div>
            <button className="Less" disabled={setDisable(ingredientsDetail["hash"]['Bacon'])} onClick={() => changeQuantity(ingredientsDetail, 'Remove', 'Bacon')}>Less</button>
            <button className="More" onClick={() => changeQuantity(ingredientsDetail, 'Add', 'Bacon')}>More</button>
          </div>
          <div className="BuildControl">
            <div className="Label">Cheese</div>
            <button className="Less" disabled={setDisable(ingredientsDetail["hash"]['Cheese'])} onClick={() => changeQuantity(ingredientsDetail, 'Remove', 'Cheese')}>Less</button>
            <button className="More" onClick={() => changeQuantity(ingredientsDetail, 'Add', 'Cheese')}>More</button>
          </div>
          <div className="BuildControl">
            <div className="Label">Meat</div>
            <button className="Less" disabled={setDisable(ingredientsDetail["hash"]['Meat'])} onClick={() => changeQuantity(ingredientsDetail, 'Remove', 'Meat')}>Less</button>
            <button className="More" onClick={() => changeQuantity(ingredientsDetail, 'Add', 'Meat')}>More</button>
          </div>
        </div>
      </div>
  </BurgerIngredients.Provider>
  );
}

export default App;

