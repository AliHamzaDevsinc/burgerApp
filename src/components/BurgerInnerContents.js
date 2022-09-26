
const BurgerInnerContents = props => {
  // var total = 0.00
  let innerContent = []
  Object.entries(props.ingredients).forEach((index, value)=> {
    for(let i=0; i<index[1]['quantity']; i++)
    {
      innerContent.push(<div className={index[0]}></div>)
      // total = total + parseFloat(index[1].price)
    }
  });
  if (!innerContent.length)
  {
    innerContent.push(<div>No Content</div>)
  }
  // return {"innerContent": innerContent, "total": total}
  return innerContent
}

export default BurgerInnerContents
