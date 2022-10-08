import { useForm, UseFormProps } from 'react-hook-form';
import { IParcelForm } from './types';
import schema from './schema';
import { yupResolver } from "@hookform/resolvers/yup";
import { useSchemaValidation } from '../../../hooks/useSchemaValidation';

export const useParcelForm = function(params: UseFormProps<IParcelForm>) {
  const form = useForm<IParcelForm>({
    resolver: yupResolver(schema),
    mode: 'all',
    reValidateMode: 'onChange',
    ...params,
  });

  useSchemaValidation(schema, form)

  return form;
}
