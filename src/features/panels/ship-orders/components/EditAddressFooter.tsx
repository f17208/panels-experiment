import { Box, Button } from "@mui/material";
import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { RecipientAddressFormContext, SenderAddressFormContext } from "..";
import { ParcelFormContext } from "../../../../components/forms/ParcelForm";
import { ShipOrderFlowSteps } from "../constants";

export const EditAddressFooter = () => {
  const { formState: recipientAddressFormState } = useContext(RecipientAddressFormContext)!;
  const { formState: senderAddressFormState } = useContext(SenderAddressFormContext)!;
  const { formState: editParcelsFormState } = useContext(ParcelFormContext)!;

  const navigate = useNavigate();

  const addressFormsValid = ([
    recipientAddressFormState.isValid,
    senderAddressFormState.isValid,
  ].every(Boolean));

  const nextRouteConfig: { to: string, title: string } = useMemo(() => {
    if (!addressFormsValid) {
      return {
        to: ShipOrderFlowSteps.EditAddress,
        title: 'Fill missing data',
      }
    }
    if (!editParcelsFormState.isValid) {
      return {
        to: ShipOrderFlowSteps.EditParcels,
        title: 'Next: edit parcels',
      }
    }
    return {
      to: ShipOrderFlowSteps.Rates,
      title: 'Next: calculate rates',
    }
  }, [editParcelsFormState, addressFormsValid]);

  return (
    <Box p={2}>
      <Button
        variant="contained"
        color="primary"
        disabled={!addressFormsValid}
        onClick={() => navigate(nextRouteConfig.to)}
      >
        {nextRouteConfig.title}
      </Button>
    </Box>
  )
};
