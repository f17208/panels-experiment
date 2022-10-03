import { FC, ReactNode } from "react";
import { usePanels } from "./contexts";

export type PanelLayoutProps = {
  panelId: string;
  header?: ReactNode | string;
  body: ReactNode;
  footer?: ReactNode;
}

export const PanelLayout: FC<PanelLayoutProps> = ({ panelId, header, body, footer }) => {
  const { removePanel } = usePanels();

  return (
    <div className="panel">
      <div>
        <div className="panel-header">
          {typeof header === 'string' ? <h3 style={{ margin: 0 }}>{header}</h3> : header}
          <button onClick={() => removePanel(panelId)}>x</button>
        </div>
        <div className="panel-body">
          {body}
        </div>
      </div>
      <div className="panel-footer">
        {footer}
      </div>
    </div>
  );
}