import { useCallback, useEffect, useState } from 'react';
import { DeepPartial, FieldValues, UseFormReturn } from 'react-hook-form';
import * as yup from 'yup';

export const useSchemaValidation = function<
  S extends yup.ObjectSchema<any>,
  F extends FieldValues,
>(schema: S, form: UseFormReturn<F>) {
  const [isValid, setIsValid] = useState(form.formState.isValid);
  const { watch } = form;

  const revalidate = useCallback((data?: DeepPartial<F>) => {
    schema.validate(data || watch())
      .then(() => { setIsValid(true) })
      .catch(() => { setIsValid(false) })
  }, [watch, setIsValid, schema]);

  useEffect(() => {
    // listener
    const { unsubscribe } = watch((data => revalidate(data)));

    return () => {
      unsubscribe();
    }
  }, [watch, revalidate]);
  
  return { isValid, revalidate };
}
