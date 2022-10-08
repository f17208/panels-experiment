import { Dispatch, FC, SetStateAction } from "react";
import { PanelProps, usePanels } from "../../contexts";

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
    <div className="panels-tabs">
      {panels.map(panel => (
        <button
          style={{ padding: '5px 10px' }}
          key={panel.id}
          className={panel.id === selectedPanelId ? 'panel-active' : undefined}
          onClick={() => setSelectedPanelId(panel.id)}
        >
          {panel.title}
          <span
            style={{ marginLeft: 8, cursor: 'pointer' }}
            onClick={() => removePanel(panel.id)}
          >
            x
          </span>
        </button>
      ))}
    </div>
  );
};
