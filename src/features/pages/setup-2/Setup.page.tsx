import { CircularProgress, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SetupForm } from "./SetupForm";
import { SetupSubmitButton } from "./SetupSubmitButton";

export interface ISetupForm {
  isPizzaBetterThanSushi: boolean;
  foo: string;
  bar: number;
}

export const SetupPage = () => {
  const navigate = useNavigate();

  const form = useForm<ISetupForm>({
    defaultValues: {
      isPizzaBetterThanSushi: true,
      foo: '',
      bar: 0,
    },
  });

  console.log('[setup page] render')
  // console.log('[setup page] isValid', form.formState.isValid);

  const onSubmit = useCallback((values: ISetupForm) => {
    console.log('SetupForm', values);
    sessionStorage.setItem('setupDone', 'true');
    navigate('/to-ship');
  }, [navigate]);

  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => setReady(true), 2000);
  }, []);

  return (
    <Container maxWidth="xs">
      <Box py={2} display="flex" justifyContent="center">
        <Typography variant="h4">Setup 2.0</Typography>
      </Box>

      {
        ready
          ? (
            <>
              <SetupForm form={form} onSubmit={onSubmit} />
              <SetupSubmitButton form={form} />
            </>
          )
          : (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          )
      }
    </Container>
  )
};