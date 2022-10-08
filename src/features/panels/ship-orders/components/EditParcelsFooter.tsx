import { Box, Button } from "@mui/material";
import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { RecipientAddressFormContext, SenderAddressFormContext } from "..";
import { ParcelFormContext } from "../../../../components/forms/ParcelForm";
import { ShipOrderFlowSteps } from "../constants";

export const EditParcelsFooter = () => {
  const recipientAddressForm = useContext(RecipientAddressFormContext)!;
  const senderAddressForm = useContext(SenderAddressFormContext)!;
  const parcelForm = useContext(ParcelFormContext)!;

  const navigate = useNavigate();

  const parcelValid = parcelForm.formState.isValid;
  const recipientAddressValid = recipientAddressForm.formState.isValid;
  const senderAddressValid = senderAddressForm.formState.isValid;
  const addressesValid = recipientAddressValid && senderAddressValid;

  const nextRouteConfig: { to: string, title: string } = useMemo(() => {
    if (!parcelValid) {
      return {
        to: ShipOrderFlowSteps.EditParcels,
        title: 'Fill missing data',
      }
    }
    if (!addressesValid) {
      return {
        to: ShipOrderFlowSteps.EditAddress,
        title: 'Next: edit address',
      }
    }
    return {
      to: ShipOrderFlowSteps.Rates,
      title: 'Next: calculate rates',
    }
  }, [parcelValid, addressesValid]);

  return (
    <Box p={2}>
      <Button
        variant="contained"
        color="primary"
        disabled={!parcelValid}
        onClick={() => navigate(nextRouteConfig.to)}
      >
        {nextRouteConfig.title}
      </Button>
    </Box>
  )
};