import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart, removeToCart } from "../services/actions/Actions";

const mapStateToProps = (state) => ({
  data: state.cardItem,
});

const mapDispatchToProps = (Dispatch) => ({
  addToCartHandler: (data) => Dispatch(addToCart(data)),
  removeToCartHandler: (data) => Dispatch(removeToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
//export default Home;
