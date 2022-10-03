import { MemoryRouter, Navigate, Route, Routes } from "react-router-dom";
import { PanelLayout } from "../../../panels/components";
import {
  EditAddressBody,
  EditAddressFooter,
  EditParcelsBody,
  EditParcelsFooter,
  RatesBody,
  RatesFooter,
} from "../../components";
import { EditAddressFormContext, EditParcelsFormContext } from "../../contexts";
import { useDummyForm } from "../../forms";
import { ShipFlowSteps } from "../constants";

export type ManualShipmentFlowProps = {
  id: string;
};

export const ManualShipmentFlow = ({ id }: ManualShipmentFlowProps) => {
  const editAddressForm = useDummyForm({
    defaultValues: {
      field1: '',
      field2: '',
    },
  })

  const editParcelsForm = useDummyForm({
    defaultValues: {
      field1: '',
      field2: '',
    },
  })

  return (
    <EditAddressFormContext.Provider value={editAddressForm}>
      <EditParcelsFormContext.Provider value={editParcelsForm}>
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<Navigate to={ShipFlowSteps.EditAddress} />} />
            <Route
              path={ShipFlowSteps.EditAddress}
              element={
                <PanelLayout
                  panelId={id}
                  header={id} // just for dev
                  body={<EditAddressBody />}
                  footer={<EditAddressFooter />}
                />
              }
            />
            <Route
              path={ShipFlowSteps.EditParcels}
              element={
                <PanelLayout
                  panelId={id}
                  header={id} // just for dev
                  body={<EditParcelsBody />}
                  footer={<EditParcelsFooter />}
                />
              }
            />
            <Route
              path={ShipFlowSteps.Rates}
              element={
                <PanelLayout
                  panelId={id}
                  header={id} // just for dev
                  body={<RatesBody />}
                  footer={<RatesFooter panelId={id} />}
                />
              }
            />
          </Routes>
        </MemoryRouter>
      </EditParcelsFormContext.Provider>
    </EditAddressFormContext.Provider>
  );
}
