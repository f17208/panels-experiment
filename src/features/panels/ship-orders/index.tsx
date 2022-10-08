import { MemoryRouter, Navigate, Route, Routes } from "react-router-dom";
import { getAddressContext, useAddressForm } from "../../../components/forms/AddressForm";
import { ParcelFormContext, useParcelForm } from "../../../components/forms/ParcelForm";
import { Order } from "../../../types/order";
import { EditAddressBody } from "../components/EditAddressBody";
import { EditParcelsBody } from "../components/EditParcelBody";
import { PanelLayout } from "../components/PanelLayout";
import { RatesBody } from "../components/RatesBody";
import { EditAddressFooter } from "./components/EditAddressFooter";
import { EditParcelsFooter } from "./components/EditParcelsFooter";
import { RatesFooter } from "./components/RatesFooter";
import { ShipOrderFlowSteps } from "./constants";

export const SenderAddressFormContext = getAddressContext();
export const RecipientAddressFormContext = getAddressContext();

export type ShipOrderFlowProps = {
  panelId: string;
  order: Order;
};

export const ShipOrderFlow = ({ panelId, order }: ShipOrderFlowProps) => {
  const senderAddressForm = useAddressForm({
    defaultValues: {
      ...order.senderAddress
    },
  });

  const recipientAddressForm = useAddressForm({
    defaultValues: {
      ...order.recipientAddress
    },
  });

  const editParcelsForm = useParcelForm({
    defaultValues: {
      ...order.parcel,
    },
  })

  const title = `Ship order ${order.id}`;

  return (
    <SenderAddressFormContext.Provider value={senderAddressForm}>
      <RecipientAddressFormContext.Provider value={recipientAddressForm}>
        <ParcelFormContext.Provider value={editParcelsForm}>
          <MemoryRouter>
            <Routes>
              <Route path="/" element={<Navigate to={ShipOrderFlowSteps.Rates} />} />
              <Route
                path={ShipOrderFlowSteps.EditAddress}
                element={
                  <PanelLayout
                    header={title}
                    body={<EditAddressBody />}
                    footer={<EditAddressFooter />}
                  />
                }
              />
              <Route
                path={ShipOrderFlowSteps.EditParcels}
                element={
                  <PanelLayout
                    header={title}
                    body={<EditParcelsBody />}
                    footer={<EditParcelsFooter />}
                  />
                }
              />
              <Route
                path={ShipOrderFlowSteps.Rates}
                element={
                  <PanelLayout
                    header={title}
                    body={<RatesBody order={order} />}
                    footer={<RatesFooter panelId={panelId} />}
                  />
                }
              />
            </Routes>
          </MemoryRouter>
        </ParcelFormContext.Provider>
      </RecipientAddressFormContext.Provider>
    </SenderAddressFormContext.Provider>
  );
}