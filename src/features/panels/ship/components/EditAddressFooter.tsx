import { Box, Button } from "@mui/material";
import { FC, useMemo } from "react";
import { UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IAddressForm } from "../../../../components/forms/AddressForm";
import { IParcelForm } from "../../../../components/forms/ParcelForm";
import { ShipOrderFlowSteps } from "../constants";


export type EditAddressFooterProps = {
  senderAddressForm: UseFormReturn<IAddressForm>;
  recipientAddressForm: UseFormReturn<IAddressForm>;
  parcelForm: UseFormReturn<IParcelForm>;
};

export const EditAddressFooter: FC<EditAddressFooterProps> = ({
  senderAddressForm,
  recipientAddressForm,
  parcelForm
}) => {
  const navigate = useNavigate();

  const parcelValid = parcelForm.formState.isValid;
  const recipientAddressValid = recipientAddressForm.formState.isValid;
  const senderAddressValid = senderAddressForm.formState.isValid;
  const addressesValid = recipientAddressValid && senderAddressValid;

  const nextRouteConfig: { to: string, title: string } = useMemo(() => {
    if (!addressesValid) {
      return {
        to: ShipOrderFlowSteps.EditAddress,
        title: 'Fill missing data',
      }
    }
    if (!parcelValid) {
      return {
        to: ShipOrderFlowSteps.EditParcels,
        title: 'Next: edit parcels',
      }
    }
    return {
      to: ShipOrderFlowSteps.Rates,
      title: 'Next: calculate rates',
    }
  }, [addressesValid, parcelValid]);

  return (
    <Box p={2}>
      <Button
        variant="contained"
        color="primary"
        disabled={!addressesValid}
        onClick={() => navigate(nextRouteConfig.to)}
      >
        {nextRouteConfig.title}
      </Button>
    </Box>
  )
};
