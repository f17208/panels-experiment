import { Box, Grid, Typography } from "@mui/material";
import { FC, useCallback, useContext } from "react";
import { AddressForm, IAddressForm } from "../../../components/forms/AddressForm";
import { RecipientAddressFormContext, SenderAddressFormContext } from "../ship-orders";
import { EditOrderTabLinks } from "./EditOrderNavLinks";

export const EditAddressBody: FC = () => {
  const onSubmit = useCallback((values: IAddressForm) => {
    console.log('Address', values);
  }, []);

  const senderForm = useContext(SenderAddressFormContext)!;
  const recipientForm = useContext(RecipientAddressFormContext)!;

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
