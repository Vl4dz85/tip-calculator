import { connect } from "react-redux";
import { deleteItem } from "../store/items/actions";
import { MenuItem } from "../components/MenuItem";

const mapDispatchToProps = (dispatch, ownProps) => {
  return { onDelete: () => dispatch(deleteItem(ownProps.uuid)) };
};

export const MenuItemContainter = connect(null, mapDispatchToProps)(MenuItem);
