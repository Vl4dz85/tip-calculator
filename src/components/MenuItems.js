import { Stack } from "@twilio-paste/stack";
import { MenuItemContainter } from "../containers/MenuItemContainer";
// import MenuItem from "../components/MenuItem";

export const MenuItems = ({ items }) => {
  return (
    <Stack orientation="vertical" spacing="space60">
      {items.map((item) => (
        <MenuItemContainter {...item} key={item.uuid} />
      ))}
    </Stack>
  );
};
