import { Box, Grid, Typography } from "@mui/material";
import { FC, useCallback } from "react";
import { UseFormReturn } from "react-hook-form";
import { AddressForm, IAddressForm } from "../../../../components/forms/AddressForm";
import { EditOrderTabLinks } from "./EditOrderNavLinks";

export type EditAddressBodyProps = {
  senderForm: UseFormReturn<IAddressForm>;
  recipientForm: UseFormReturn<IAddressForm>;
};

export const EditAddressBody: FC<EditAddressBodyProps> = ({
  senderForm, 
  recipientForm,
}) => {
  const onSubmit = useCallback((values: IAddressForm) => {
    console.log('Address', values);
  }, []);

  return (
    <Box p={2}>
      <EditOrderTabLinks />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography fontWeight="bold">Recipient</Typography>
        </Grid>
        <Grid item>
          <AddressForm form={recipientForm} onSubmit={onSubmit} />
        </Grid>
        <Grid item xs={12}>
          <Typography fontWeight="bold">Sender</Typography>
        </Grid>
        <Grid item xs={12}>
          <AddressForm form={senderForm} onSubmit={onSubmit} />
        </Grid>
      </Grid>
    </Box>
  );
};
