import { useForm, UseFormProps } from 'react-hook-form';
import { IAddressForm } from './types';
import schema from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSchemaValidation } from '../../../hooks/useSchemaValidation';

export const useAddressForm = function({ defaultValues, ...rest }: UseFormProps<IAddressForm>) {
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

  useSchemaValidation(schema, form)

  return form;
}
