import { Button, Checkbox, Container, FormControlLabel, FormGroup, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export interface ISetupForm {
  isPizzaBetterThanSushi: boolean;
  foo: string;
  bar: number;
}

export const SetupPage = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    watch,
    formState: { isDirty, isValid }
  } = useForm<ISetupForm>({
    defaultValues: {
      isPizzaBetterThanSushi: true,
      foo: '',
      bar: 0,
    }
  });

  const isPizzaBetterThanSushi = watch('isPizzaBetterThanSushi');

  const onSubmit = useCallback((values: ISetupForm) => {
    console.log('SetupForm', values);
    sessionStorage.setItem('setupDone', 'true');
    navigate('/to-ship');
  }, [navigate]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="xs">
        <Box py={2} display="flex" justifyContent="center">
          <Typography variant="h4">Setup</Typography>
        </Box>

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

          <Grid item xs={12}>
            <Box py={2} display="flex" justifyContent="center">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!isPizzaBetterThanSushi || !isDirty || !isValid}
              >
                {
                  !isValid 
                    ? 'Wrong or missing data'
                    : !isDirty
                      ? 'Nothing to save'
                      : isPizzaBetterThanSushi
                        ? 'Save & go to home page'
                        : 'Are you joking, right?'
                }
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </form>
  )
};