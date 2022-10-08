import { Grid, TextField } from "@mui/material";
import { FC, useContext } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { ParcelFormContext } from "./contexts";
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

export const ParcelFormInContext: FC<Omit<ParcelFormProps, 'form'>> = ({ ...props }) => {
  const form = useContext(ParcelFormContext)!;
  return <ParcelForm form={form} {...props} />;
}