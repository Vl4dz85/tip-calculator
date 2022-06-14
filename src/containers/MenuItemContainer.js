import { connect } from "react-redux";
import {
  deleteItem,
  updatePrice,
  updateQuantity
} from "../store/items/actions";
import { MenuItem } from "../components/MenuItem";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: () => dispatch(deleteItem(ownProps.uuid)),
    updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price)),
    updateQuantity: (quantity) =>
      dispatch(updateQuantity(ownProps.uuid, quantity))
  };
};

export const MenuItemContainter = connect(null, mapDispatchToProps)(MenuItem);
