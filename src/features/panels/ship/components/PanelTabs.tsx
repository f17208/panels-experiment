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

  // autoscroll to bring the selected tab in view
  const onRefChange = useCallback(
    (node: unknown, id: string) => {
      if (node && tabsContainerRef.current && id === selectedPanelId) {
        const element = node as HTMLDivElement;
        const tabsContainerElement = (tabsContainerRef.current as HTMLDivElement)

        // left (position) of selected tab
        const elemLeft = element.offsetLeft;
        // width of selected tab
        const elemOffsetWidth = element.offsetWidth;
        // how much is the tabs container scrolled (left border)
        const tabsScrollLeft = tabsContainerElement.scrollLeft;
        // how large is the tabs container
        const tabsOffsetWidth = tabsContainerElement.offsetWidth;
        // right (position) of selected tab
        const elemRight = elemLeft + elemOffsetWidth;
        // from zero-scroll position (left) to right border of tabs container
        const tabsScrollRight = tabsScrollLeft + tabsOffsetWidth;

        const delta = elemLeft < tabsScrollLeft
          ? elemLeft - tabsScrollLeft + elemOffsetWidth/2
          : elemRight > tabsScrollLeft + tabsOffsetWidth
            ? elemRight - tabsScrollRight + tabsOffsetWidth/2
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
    <Box className="panels-tabs" ref={tabsContainerRef}>
      {panels.map(panel => (
        <Box
          ref={node => onRefChange(node, panel.id)}
          display="flex"
          alignItems="center"
          key={panel.id}
          className={`panel-tab ${
            panel.id === selectedPanelId 
              ? 'panel-tab-active' 
              : 'panel-tab-inactive'
          }`}
          onClick={() => {
            setSelectedPanelId(panel.id);
          }}
        >
          <Typography variant="caption" whiteSpace="nowrap" pr={1}>
            {panel.title}
          </Typography>
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
