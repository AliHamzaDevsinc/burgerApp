
import { setDisable } from '../js/main'


const BuildControls = props => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.ingredient}</div>
      <button className="Less" disabled={setDisable(props.ingredients[props.ingredient])} onClick={() => props.burgerContent.update(props.ingredient, "Remove", props.ingredients[props.ingredient].quantity)}>Less</button>
      <button className="More" onClick={() => props.burgerContent.update(props.ingredient, "Add", props.ingredients[props.ingredient].quantity)}>More</button>
    </div>
  )
}

export default BuildControls
