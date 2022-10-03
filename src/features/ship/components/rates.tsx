import { FC } from "react";
import { Link } from "react-router-dom";
import { usePanels } from "../../panels";
import { ShipFlowSteps } from "../flows";

export const RatesBody = () => {
  return <div>
    <h1>Rates</h1>
    <Link to={ShipFlowSteps.EditAddress}>Edit order</Link>
    <ul>
      <li>Fake carrier 1</li>
      <li>Fake carrier 2</li>
      <li>Fake carrier 3</li>
    </ul>
  </div>
};


export type RatesFooterProps = {
  panelId: string;
}

export const RatesFooter: FC<RatesFooterProps> = ({ panelId }) => {
  const { removePanel } = usePanels();
  return (
    <button onClick={() => removePanel(panelId)}>
      close
    </button>
  );

};
