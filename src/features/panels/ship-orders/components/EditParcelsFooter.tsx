import { Box, Button } from "@mui/material";
import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { RecipientAddressFormContext, SenderAddressFormContext } from "..";
import { ParcelFormContext } from "../../../../components/forms/ParcelForm";
import { ShipOrderFlowSteps } from "../constants";

export const EditParcelsFooter = () => {
  const { formState: editParcelsFormState } = useContext(ParcelFormContext)!;

  const navigate = useNavigate();

  const { formState: recipientAddressFormState } = useContext(RecipientAddressFormContext)!;
  const { formState: senderAddressFormState } = useContext(SenderAddressFormContext)!;
  
 const addressFormsValid = ([
    recipientAddressFormState.isValid,
    senderAddressFormState.isValid,
  ].every(Boolean));

  const nextRouteConfig: { to: string, title: string } = useMemo(() => {
    if (!editParcelsFormState.isValid) {
      return {
        to: ShipOrderFlowSteps.EditParcels,
        title: 'Fill missing data',
      }
    }
    if (!addressFormsValid) {
      return {
        to: ShipOrderFlowSteps.EditAddress,
        title: 'Next: edit address',
      }
    }
    return {
      to: ShipOrderFlowSteps.Rates,
      title: 'Next: calculate rates',
    }
  }, [addressFormsValid, editParcelsFormState]);

  return (
    <Box p={2}>
      <Button
        variant="contained"
        color="primary"
        disabled={!editParcelsFormState.isValid}
        onClick={() => navigate(nextRouteConfig.to)}
      >
        {nextRouteConfig.title}
      </Button>
    </Box>
  )
};