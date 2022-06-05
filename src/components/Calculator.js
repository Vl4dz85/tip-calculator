import { Card, Stack } from "@twilio-paste/core";
import { MenuItemsContainer } from "../containers/MenuItemsContainer";
import { TipSelectContainer } from "../containers/TipSelectContainer";

import { NewItemForm } from "./NewItemForm";
import { SummaryLine } from "./SummaryLine";

const Calculator = () => {
  return (
    <Card>
      <NewItemForm />
      <Stack orientation="vertical" spacing="space60">
        <MenuItemsContainer />
      </Stack>
      <TipSelectContainer />
      <Stack orientation="vertical" spacing="space30">
        <SummaryLine title="Subtotal">$0.00</SummaryLine>
        <SummaryLine title="Tax">$0.00</SummaryLine>
        <SummaryLine title="Tip Amount">$0.00</SummaryLine>
        <SummaryLine title="Total">$0.00</SummaryLine>
      </Stack>
    </Card>
  );
};

export default Calculator;
