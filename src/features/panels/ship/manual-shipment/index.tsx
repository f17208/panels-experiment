import { MemoryRouter, Navigate, Route, Routes } from "react-router-dom";
import { getAddressContext, useAddressForm } from "../../../../components/forms/AddressForm";
import { getParcelContext, useParcelForm } from "../../../../components/forms/ParcelForm";
import { ShipOrderFlowSteps } from "../constants";
import { PanelLayout } from "../../components/PanelLayout";
import { EditAddressBody } from "../components/EditAddressBody";
import { EditAddressFooter } from "../components/EditAddressFooter";
import { EditParcelsBody } from "../components/EditParcelBody";
import { EditParcelsFooter } from "../components/EditParcelsFooter";
import { RatesBody } from "../components/RatesBody";
import { RatesFooter } from "../components/RatesFooter";
import { userAddress } from "../user.fixture";

export const SenderAddressFormContext = getAddressContext();
export const RecipientAddressFormContext = getAddressContext();
export const ParcelFormContext = getParcelContext();

export type ManualShipmentFlowProps = {
  panelId: string;
};

const title = "Manual Shipment";

export const ManualShipmentFlow = ({ panelId }: ManualShipmentFlowProps) => {
  const senderAddressForm = useAddressForm({
    defaultValues: {
      ...userAddress,
    },
  });

  const recipientAddressForm = useAddressForm();

  const editParcelsForm = useParcelForm();

  return (
    <SenderAddressFormContext.Provider value={senderAddressForm}>
      <RecipientAddressFormContext.Provider value={recipientAddressForm}>
        <ParcelFormContext.Provider value={editParcelsForm}>
          <MemoryRouter>
            <Routes>
              <Route path="/" element={<Navigate to={ShipOrderFlowSteps.EditAddress} />} />
              <Route
                path={ShipOrderFlowSteps.EditAddress}
                element={
                  <PanelLayout
                    panelId={panelId}
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
                    panelId={panelId}
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
                    panelId={panelId}
                    header={title}
                    body={<RatesBody />}
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