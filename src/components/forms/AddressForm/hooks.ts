import { useForm, UseFormProps } from 'react-hook-form';
import { IAddressForm } from './types';
import schema from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { usePreloadFormStateFields } from '../../../hooks/usePreloadFormStateFields';
import { UseFormOptions } from '../../../types/form-options';

export interface UseAddressFormOptions extends UseFormOptions {}

export const useAddressForm = function(
  { defaultValues, ...rest }: UseFormProps<IAddressForm>,
  options?: UseAddressFormOptions
) {
  const form = useForm<IAddressForm>({
    resolver: yupResolver(schema),
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      street1: '',
      street2: '',
      city: '',
      country: '',
      zip: '',
      ...defaultValues,
    },
    ...rest,
  });

  usePreloadFormStateFields(form, options?.preloadFormStateFields || []);

  return form;
}
