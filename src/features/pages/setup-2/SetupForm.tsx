import { Checkbox, FormControlLabel, FormGroup, Grid, TextField } from "@mui/material";
import { FC } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { ISetupForm } from "./types";

export type SetupFormProps = {
  onSubmit: (values: ISetupForm) => void;
  form: UseFormReturn<ISetupForm>;
}

export const SetupForm: FC<SetupFormProps> = ({ form, onSubmit }) => {
  const {
    control,
    handleSubmit,
    // formState: { isDirty, isValid },
  } = form;

  // console.log('[setup form] isValid', isValid);
  // console.log('[setup form] isDirty', isDirty);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Controller
            name="foo"
            control={control}
            render={({ field: { onChange, value }, fieldState }) => (
              <TextField
                fullWidth
                size="small" 
                onChange={onChange}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                value={value}
                label="Foo" 
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="isPizzaBetterThanSushi"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={onChange} 
                      checked={value}
                    />
                  }
                  label="is pizza better than sushi?"
                />
              </FormGroup>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="bar"
            control={control}
            render={({ field: { onChange, value }, fieldState }) => (
              <TextField
                fullWidth
                type="number"
                size="small" 
                onChange={onChange} 
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                value={value}
                label="Bar" 
              />
            )}
          />
        </Grid>
      </Grid>
    </form> 
  )
};