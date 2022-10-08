import { Close } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Dispatch, FC, SetStateAction } from "react";
import { PanelProps, usePanels } from "../../contexts";

const CLOSE_ICON_SIZE = 16;

export type PanelsTabsProps = { 
  panels: PanelProps[];
  selectedPanelId: string | null;
  setSelectedPanelId: Dispatch<SetStateAction<string | null>>;
}

export const PanelsTabs: FC<PanelsTabsProps> = ({
  panels,
  selectedPanelId,
  setSelectedPanelId,
}) => {
  const { removePanel } = usePanels();

  return (
    <Box className="panels-tabs" style={{ overflow: 'auto' }}>
      {panels.map(panel => (
        <Box
          display="flex"
          alignItems="center"
          style={{ padding: '5px 10px', flexWrap: 'nowrap' }}
          key={panel.id}
          className={panel.id === selectedPanelId ? 'panel-active' : undefined}
          onClick={() => setSelectedPanelId(panel.id)}
        >
          <Typography variant="caption" whiteSpace="nowrap">{panel.title}</Typography>
          <IconButton
            style={{
              marginLeft: 8,
              cursor: 'pointer',
              width: CLOSE_ICON_SIZE,
              height: CLOSE_ICON_SIZE,
            }}
            onClick={() => removePanel(panel.id)}
          >
            <Close
              style={{
                width: CLOSE_ICON_SIZE,
                height: CLOSE_ICON_SIZE,
              }}
            />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};
