import { Close } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useCallback, useRef } from "react";
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

  const tabsContainerRef = useRef<unknown>(null);

  const onRefChange = useCallback(
    (node: unknown, id: string) => {
      if (node && tabsContainerRef.current && id === selectedPanelId) {
        const element = node as HTMLDivElement;
        const tabsContainerElement = (tabsContainerRef.current as HTMLDivElement)

        const elemLeft = element.offsetLeft;
        const elemOffsetWidth = element.offsetWidth;
        const tabsScrollLeft = tabsContainerElement.scrollLeft;
        const tabsOffsetWidth = tabsContainerElement.offsetWidth;

        const delta = elemLeft < tabsScrollLeft
          ? elemLeft  - tabsScrollLeft
          : (elemLeft + elemOffsetWidth) > tabsScrollLeft + tabsOffsetWidth
            ? (elemLeft + elemOffsetWidth) - (tabsScrollLeft + tabsOffsetWidth)
            : undefined;

        if (delta) {
          tabsContainerElement.scrollBy({
            left: delta,
          });
        }
      }
    },
    [selectedPanelId],
  );

  return (
    <Box className="panels-tabs" style={{ overflow: 'scroll' }} ref={tabsContainerRef}>
      {panels.map(panel => (
        <Box
          ref={node => onRefChange(node, panel.id)}
          display="flex"
          alignItems="center"
          key={panel.id}
          className={`panel-tab ${panel.id === selectedPanelId ? 'panel-tab-active' : undefined}`}
          onClick={() => setSelectedPanelId(panel.id)}
        >
          <Typography variant="caption" whiteSpace="nowrap">{panel.title}</Typography>
          <IconButton
            className="panel-tab-close"
            style={{
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
