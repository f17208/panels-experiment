import { Close } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useCallback } from "react";
import { usePanels } from "../../contexts";

import './PanelTabs.css';

const CLOSE_ICON_SIZE = 18;

export const PanelsTabs: FC = () => {
  const {
    removePanel,
    panels,
    selectedPanelId,
    setSelectedPanelId,
  } = usePanels();

  const onClose = useCallback((panelId: string) => {
    removePanel(panelId);
  }, [removePanel]);

  const onRefChange = useCallback(
    (node: unknown, i: number) => {
      if (node && i === panels.length - 1) {
        (node as HTMLDivElement).scrollIntoView();
      }
    },
    [panels],
  );

  return (
    <Box className="panels-tabs" style={{ overflow: 'auto' }}>
      {panels.map((panel, i) => (
        <Box
          ref={node => onRefChange(node, i)}
          display="flex"
          alignItems="center"
          style={{ padding: '5px 10px', flexWrap: 'nowrap' }}
          key={panel.id}
          className={panel.id === selectedPanelId ? 'panel-tab-active' : undefined}
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
            onClick={e => {
              onClose(panel.id);
              e.stopPropagation();
            }}
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
