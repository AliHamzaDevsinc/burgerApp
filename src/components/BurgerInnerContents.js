const BurgerInnerContents = props => {
  console.log("I am rendering again and again")
  const innerContent = []
  // Object.entries(props.ingredients).forEach((index, value)=> {
  //   console.log(index[1]['quantity'])
  //   for(let i=0; i<index[1]['quantity']; i++)
  //   {
  //     innerContent.push(<div className={index[0]}></div>)
  //   }
  // });
  // return innerContent;
  
  innerContent.push(<div>No ingredients</div>)
  return innerContent
}

export default BurgerInnerContents
