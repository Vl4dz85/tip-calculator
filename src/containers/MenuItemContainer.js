import { connect } from "react-redux";
import {
  deleteItem,
  updatePrice,
  updateQuantity
} from "../store/items/actions";
import { MenuItem } from "../components/MenuItem";
import { selectItemTotal } from "../store/items/selectors";

const mapStateToProps = (state, props) => {
  const total = selectItemTotal(state, props);
  return {
    total
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: () => dispatch(deleteItem(ownProps.uuid)),
    updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price)),
    updateQuantity: (quantity) =>
      dispatch(updateQuantity(ownProps.uuid, quantity))
  };
};

export const MenuItemContainter = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
