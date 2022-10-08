import { useForm, UseFormProps } from 'react-hook-form';
import { IAddressForm } from './types';
import { schema } from './schema';
import { yupResolver } from "@hookform/resolvers/yup";

export const useAddressForm = function(params: UseFormProps<IAddressForm>) {
  return useForm<IAddressForm>({
    resolver: yupResolver(schema),
    mode: 'all',
    reValidateMode: 'onChange',
    ...params,
    defaultValues: schema.cast(params.defaultValues || {
      street1: '',
      street2: '',
      city: '',
      country: '',
      zip: '',
    }),
  })
}
