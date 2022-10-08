import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { usePanels } from "../../contexts";

export type RatesFooterProps = {
  panelId: string;
}

export const RatesFooter: FC<RatesFooterProps> = ({ panelId }) => {
  const { removePanel } = usePanels();
  return (
    <Box p={2}>
      <Button variant="contained" color="primary"  onClick={() => removePanel(panelId)}>
        Ship
      </Button>
    </Box>
  );

};
