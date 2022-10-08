import { FC, useEffect, useState } from "react";
import { PanelProps, usePanels } from "../contexts";

export type PanelsTabsProps = { 
  panels: PanelProps[];
}

export const PanelsTabs: FC<PanelsTabsProps> = ({ panels }) => {
  const [selectedPanelId, setSelectedPanelId] = useState<string | null>();

  const { removePanel } = usePanels();

  useEffect(() => {
    setSelectedPanelId(pId => {
      if (!panels.find(p => p.id === pId)) {
        return panels[0]?.id || null;
      }
      return pId;
    })
  }, [setSelectedPanelId, panels]);

  return (
    <div className="panels-tabs">
      {panels.map(panel => (
        <button
          style={{ cursor: 'pointer', padding: '5px 10px' }}
          key={panel.id}
          className={panel.id === selectedPanelId ? 'panel-active' : undefined}
          onClick={() => setSelectedPanelId(panel.id)}
        >
          {panel.title}
          <span
            style={{ marginLeft: 8 }}
            onClick={() => removePanel(panel.id)}
          >
            x
          </span>
        </button>
      ))}
    </div>
  );
};
