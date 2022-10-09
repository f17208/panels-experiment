import { Grid, TextField } from "@mui/material";
import { FC } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { IParcelForm } from "./types";

export type ParcelFormProps = {
  form: UseFormReturn<IParcelForm>;
  onSubmit: (values: IParcelForm) => void;
};

export const ParcelForm: FC<ParcelFormProps> = ({ form, onSubmit }) => {
  const { control, handleSubmit } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Controller
            name="width"
            control={control}
            render={({ field: { onChange, value }, fieldState }) => (
              <TextField
                onChange={onChange}
                value={value}
                fullWidth
                type="number"
                label="Width"
                size="small"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                InputProps={{
                  endAdornment: 'cm',
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="height"
            control={control}
            render={({ field: { onChange, value }, fieldState }) => (
              <TextField
                onChange={onChange}
                value={value}
                fullWidth
                type="number"
                label="Height"
                size="small"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                InputProps={{
                  endAdornment: 'cm',
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="length"
            control={control}
            render={({ field: { onChange, value }, fieldState }) => (
              <TextField
                onChange={onChange}
                value={value}
                fullWidth
                type="number"
                label="Length"
                size="small"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                InputProps={{
                  endAdornment: 'cm',
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            name="weight"
            control={control}
            render={({ field: { onChange, value }, fieldState }) => (
              <TextField
                onChange={onChange}
                value={value}
                type="number"
                label="Weight"
                size="small"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                InputProps={{
                  endAdornment: 'kg',
                }}
              />
            )}
          />
        </Grid>
      </Grid>
    </form>
  )
}
