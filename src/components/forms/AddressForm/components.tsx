import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { FC } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { IAddressForm } from "./types";

export type AddressFormProps = {
  form: UseFormReturn<IAddressForm>;
  onSubmit: (values: IAddressForm) => void;
};

export const AddressForm: FC<AddressFormProps> = ({ form, onSubmit }) => {
  const { control, handleSubmit } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        <Grid item sm={12} md={8}>
          <Controller
            name="street1"
            control={control}
            render={({ field: { onChange, value }, fieldState }) => (
              <TextField 
                fullWidth
                size="small" 
                onChange={onChange} 
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                value={value}
                label="Street" 
              />
            )}
          />
        </Grid>
        <Grid item sm={12} md={4}>
          <Controller
            name="street2"
            control={control}
            render={({ field: { onChange, value }, fieldState }) => (
              <TextField
                size="small"
                onChange={onChange}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                value={value}
                fullWidth
                label="Number"
              />
            )}
          />
        </Grid>
        <Grid item sm={12} md={8}>
          <Controller
            name="city"
            control={control}
            render={({ field: { onChange, value }, fieldState }) => (
              <TextField
                size="small"
                onChange={onChange}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                value={value}
                fullWidth
                label="City"
              />
            )}
          />
        </Grid>
        <Grid item sm={12} md={4}>
          <Controller
            name="zip"
            control={control}
            render={({ field: { onChange, value }, fieldState }) => (
              <TextField
                size="small"
                onChange={onChange}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                value={value}
                fullWidth
                label="Zip"
              />
            )}
          />
        </Grid>
        <Grid item sm={12} md={8}>
          <Controller
            name="company"
            control={control}
            render={({ field: { onChange, value }, fieldState }) => (
              <TextField
                size="small"
                onChange={onChange}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                value={value}
                fullWidth
                label="Company"
              />
            )}
          />
        </Grid>
        <Grid item sm={12} md={4}>
          <Controller
            name="country"
            control={control}
            render={({ field: { onChange, value }, fieldState }) => (
              <FormControl size="small" fullWidth>
                <InputLabel id="country-select-label">Country</InputLabel>
                <Select
                  labelId="country-select-label"
                  id="country-select"
                  error={!!fieldState.error}
                  label="Country"
                  value={value}
                  onChange={onChange}
                >
                  <MenuItem value="it">Italy</MenuItem>
                  <MenuItem value="es">Spain</MenuItem>
                  <MenuItem value="fr">France</MenuItem>
                  <MenuItem value="de">Germany</MenuItem>
                </Select>
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              </FormControl>
            )}
          />
        </Grid>
      </Grid>
    </form>
  )
}
