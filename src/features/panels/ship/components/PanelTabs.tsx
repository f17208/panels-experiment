import { Tab, Tabs } from "@mui/material";
import { FC } from "react";
import { usePanels } from "../../contexts";

export const PanelsTabs: FC = () => {
  const {
    panels,
    selectedPanelId,
    setSelectedPanelId,
  } = usePanels();

  return (
    <Tabs
      variant="scrollable"
      indicatorColor="primary"
      className="panels-tabs"
      value={selectedPanelId}
    >
      {panels.map(panel => (
        <Tab
          style={{ minHeight: 48 }}
          key={panel.id}
          title={panel.title}
          label={panel.title}
          icon={panel.icon}
          iconPosition="start"
          value={panel.id}
          onClick={() => {
            setSelectedPanelId(panel.id);
          }}
        />
      ))}
    </Tabs>
  );
};
