const BurgerInnerContents = props => {
  let innerContent = []
  Object.entries(props.ingredients).forEach((index, value)=> {
    console.log(index[1]['quantity'])
    for(let i=0; i<index[1]['quantity']; i++)
    {
      innerContent.push(<div className={index[0]}></div>)
    }
  });
  if (!innerContent.length)
  {
    innerContent.push(<div>No Content</div>)
  }
  return innerContent
}

export default BurgerInnerContents
