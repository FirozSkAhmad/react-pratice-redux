
const mapStateToProps=(state)=>({
  data:state
})

const mapDispatchToProps=(data)=>({
  addToCartHandler:dispatch(addToCart(data))
})

