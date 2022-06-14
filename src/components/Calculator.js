import { Card, Stack } from "@twilio-paste/core";
import { MenuItemsContainer } from "../containers/MenuItemsContainer";
import { NewItemFormContainer } from "../containers/NewItemFormContainer";
import { TipSelectContainer } from "../containers/TipSelectContainer";

import { SummaryContainer } from "../containers/SummaryContainer";

const Calculator = () => {
  return (
    <Card>
      <NewItemFormContainer />
      <Stack orientation="vertical" spacing="space60">
        <MenuItemsContainer />
      </Stack>
      <TipSelectContainer />
      <SummaryContainer />
    </Card>
  );
};

export default Calculator;
