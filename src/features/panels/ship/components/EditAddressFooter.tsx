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
  const navigate = useNavigate()
  const { isValid: parcelValid } = parcelForm.formState;
  const { isValid: recipientAddressValid } = recipientAddressForm.formState;
  const { isValid: senderAddressValid } = senderAddressForm.formState;

  const addressesValid = recipientAddressValid && senderAddressValid;

  const btnConfig: {
    disabled?: boolean;
    onClick?: () => void;
    title: string;
  } = useMemo(() => {
    if (!addressesValid) {
      return {
        disabled: true,
        title: 'Fill missing data',
      }
    }
    if (!parcelValid) {
      return {
        onClick: () => navigate(ShipOrderFlowSteps.EditParcels),
        title: 'Next: edit parcels',
      }
    }
    return {
      onClick: () => navigate(ShipOrderFlowSteps.Rates),
      title: 'Next: calculate rates',
    }
  }, [addressesValid, navigate, parcelValid]);

  return (
    <Box p={2}>
      <Button
        variant="contained"
        color="primary"
        disabled={btnConfig.disabled}
        onClick={btnConfig.onClick}
      >
        {btnConfig.title}
      </Button>
    </Box>
  )
};
