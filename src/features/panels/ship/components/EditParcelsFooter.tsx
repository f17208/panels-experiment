import { Box, Button } from "@mui/material";
import { FC, useMemo } from "react";
import { UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IAddressForm } from "../../../../components/forms/AddressForm";
import { IParcelForm } from "../../../../components/forms/ParcelForm";
import { ShipOrderFlowSteps } from "../constants";

export type EditParcelsFooterProps = {
  senderAddressForm: UseFormReturn<IAddressForm>;
  recipientAddressForm: UseFormReturn<IAddressForm>;
  parcelForm: UseFormReturn<IParcelForm>;
};

export const EditParcelsFooter: FC<EditParcelsFooterProps> = ({
  senderAddressForm,
  recipientAddressForm,
  parcelForm,
}) => {
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