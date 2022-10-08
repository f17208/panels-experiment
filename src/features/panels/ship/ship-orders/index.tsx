import { MemoryRouter, Navigate, Route, Routes } from "react-router-dom";
import { getAddressContext, useAddressForm } from "../../../../components/forms/AddressForm";
import { ParcelFormContext, useParcelForm } from "../../../../components/forms/ParcelForm";
import { Order } from "../../../../types/order";
import { EditAddressBody } from "../components/EditAddressBody";
import { EditAddressFooter } from "../components/EditAddressFooter";
import { EditParcelsBody } from "../components/EditParcelBody";
import { EditParcelsFooter } from "../components/EditParcelsFooter";
import { PanelLayout } from "../components/PanelLayout";
import { RatesBody } from "../components/RatesBody";
import { RatesFooter } from "../components/RatesFooter";

import { ShipOrderFlowSteps } from "../constants";

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
  }, { preloadFormStateFields: ['isValid'] });

  const recipientAddressForm = useAddressForm({
    defaultValues: {
      ...order.recipientAddress
    },
  }, { preloadFormStateFields: ['isValid'] });

  const editParcelsForm = useParcelForm({
    defaultValues: {
      ...order.parcel,
    },
  }, { preloadFormStateFields: ['isValid'] });

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
                    body={
                      <EditAddressBody
                        senderForm={senderAddressForm}
                        recipientForm={recipientAddressForm}
                      />
                    }
                    footer={
                      <EditAddressFooter
                        senderAddressForm={senderAddressForm}
                        recipientAddressForm={recipientAddressForm}
                        parcelForm={editParcelsForm}
                      />
                    }
                  />
                }
              />
              <Route
                path={ShipOrderFlowSteps.EditParcels}
                element={
                  <PanelLayout
                    header={title}
                    body={<EditParcelsBody parcelForm={editParcelsForm} />}
                    footer={
                      <EditParcelsFooter
                        senderAddressForm={senderAddressForm}
                        recipientAddressForm={recipientAddressForm}
                        parcelForm={editParcelsForm}
                      />
                    }
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