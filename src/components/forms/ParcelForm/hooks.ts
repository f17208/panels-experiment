import { useForm, UseFormProps } from 'react-hook-form';
import { IParcelForm } from './types';
import formSchema from './schema';
import { yupResolver } from "@hookform/resolvers/yup";

export const useParcelForm = function(params: UseFormProps<IParcelForm>) {
  return useForm<IParcelForm>({
    resolver: yupResolver(formSchema),
    mode: 'all',
    reValidateMode: 'onChange',
    ...params,
  })
}
