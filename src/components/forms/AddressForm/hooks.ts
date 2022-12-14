import { useForm, UseFormProps } from 'react-hook-form';
import { IAddressForm } from './types';
import schema from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUnproxyFormStateFields, UseUnproxyFormStateFieldsOptions } from '../../../hooks/useUnproxyFormStateFields';

export interface UseAddressFormOptions {}

export const useAddressForm = function(
  formOptions?: UseFormProps<IAddressForm>,
  unproxyOptions?: UseUnproxyFormStateFieldsOptions<IAddressForm>
) {
  const { defaultValues, ...rest } = formOptions || {};
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
      company: '',
      ...defaultValues,
    },
    ...rest,
  });

  useUnproxyFormStateFields(form, unproxyOptions);

  return form;
}
