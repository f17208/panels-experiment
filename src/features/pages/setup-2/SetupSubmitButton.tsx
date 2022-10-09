import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { UseFormReturn } from "react-hook-form";
import { ISetupForm } from "./types";

export type SetupSubmitButtonProps = {
  form: UseFormReturn<ISetupForm>;
}

export const SetupSubmitButton: FC<SetupSubmitButtonProps> = ({ form }) => {
  const {
    watch,
    formState: { isDirty, isValid },
  } = form;

  console.log('[submit button] isValid', isValid);
  console.log('[submit button] isDirty', isDirty);

  const isPizzaBetterThanSushi = watch('isPizzaBetterThanSushi');

  return (
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
  )
};