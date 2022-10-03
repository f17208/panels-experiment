import { Navigation } from "../../navigation";
import { ShipFlowSteps } from "../flows";

export const EditNavigation = () => (
  <Navigation
    links={[
      { name: 'Address', path: ShipFlowSteps.EditAddress },
      { name: 'Parcels', path: ShipFlowSteps.EditParcels },
    ]}
  />
);
