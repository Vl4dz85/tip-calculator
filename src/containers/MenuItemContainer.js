import { connect } from "react-redux";
import { deleteItem, updatePrice } from "../store/items/actions";
import { MenuItem } from "../components/MenuItem";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: () => dispatch(deleteItem(ownProps.uuid)),
    updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price))
  };
};

export const MenuItemContainter = connect(null, mapDispatchToProps)(MenuItem);
