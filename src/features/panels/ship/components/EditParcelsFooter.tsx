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

  const { isValid: parcelValid } = parcelForm.formState;
  const { isValid: recipientAddressValid } = recipientAddressForm.formState;
  const { isValid: senderAddressValid } = senderAddressForm.formState;
  const addressesValid = recipientAddressValid && senderAddressValid;

  const btnConfig: {
    disabled?: boolean;
    onClick?: () => void;
    title: string;
  } = useMemo(() => {
    if (!parcelValid) {
      return {
        disabled: true,
        title: 'Fill missing data',
      }
    }
    if (!addressesValid) {
      return {
        onClick: () => navigate(ShipOrderFlowSteps.EditAddress),
        title: 'Next: complete address',
      }
    }
    return {
      onClick: () => navigate(ShipOrderFlowSteps.Rates),
      title: 'Next: calculate rates',
    }
  }, [parcelValid, addressesValid, navigate]);

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