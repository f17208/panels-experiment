import { useForm, UseFormProps } from 'react-hook-form';
import { IParcelForm } from './types';
import schema from './schema';
import { yupResolver } from "@hookform/resolvers/yup";
import { useSchemaValidation } from '../../../hooks/useSchemaValidation';

export const useParcelForm = function({ defaultValues, ...rest }: UseFormProps<IParcelForm>) {
  const form = useForm<IParcelForm>({
    resolver: yupResolver(schema),
    mode: 'all',
    reValidateMode: 'onChange',
    ...rest,
    defaultValues: {
      width: 0,
      weight: 0,
      length: 0,
      height: 0,
      ...defaultValues,
    },
  });

  useSchemaValidation(schema, form)

  return form;
}
