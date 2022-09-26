import '../CSS/App.css'
import '../CSS/bread-ingredient.css'
import '../CSS/burger.css';
import '../CSS/layout.css';
import '../CSS/modal.css';
import '../CSS/buildControl.css';
import '../CSS/buildControls.css';
import { calculatePrice } from '../js/main'
import BurgerInnerContents from './BurgerInnerContents';
import { useContext } from 'react';
import burgerIngredients from '../js/ingredientContext';
import logo from '../burger-logo.png';
import BuildControls from './BuildControlButton';

const MainComponent = () => {
  const burgerContent = useContext(burgerIngredients)
  const ingredients = burgerContent['ingredients']
  return (
    <>
      <div className="header">
        <div className='logo'>
          <img src={logo} alt="header-logo" />
        </div>
      </div>
      <div className='Content'>
        <div className='Burger'>
          <div className='BreadTop'>
            <div className='Seeds1'></div>
            <div className='Seeds2'></div>
          </div>
          <BurgerInnerContents ingredients={ingredients} />
          {/* {console.log('This is main content',<BurgerInnerContents ingredients={ingredients} />)} */}
          <div className='BreadBottom'></div>
        </div>
        <div className='BuildControls'>
          <p style={{textAlign: "center"}}>Current Price <strong>{"$" + calculatePrice(ingredients)}</strong></p>
          <BuildControls ingredients={ingredients} ingredient={"Lettuce"} burgerContent={burgerContent} />
          <BuildControls ingredients={ingredients} ingredient={"Bacon"} burgerContent={burgerContent} />
          <BuildControls ingredients={ingredients} ingredient={"Cheese"} burgerContent={burgerContent} />
          <BuildControls ingredients={ingredients} ingredient={"Meat"} burgerContent={burgerContent} />
        </div>
      </div>
    </>
  )
}

export default MainComponent;
