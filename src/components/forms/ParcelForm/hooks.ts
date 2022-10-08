import { useForm, UseFormProps } from 'react-hook-form';
import { IParcelForm } from './types';
import schema from './schema';
import { yupResolver } from "@hookform/resolvers/yup";
import { usePreloadFormStateFields } from '../../../hooks/usePreloadFormStateFields';
import { UseFormOptions } from '../../../types/form-options';

export interface UseParcelFormOptions extends UseFormOptions {}

export const useParcelForm = function(
  { defaultValues, ...rest }: UseFormProps<IParcelForm>,
  options?: UseParcelFormOptions,
) {
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

  usePreloadFormStateFields(form, options?.preloadFormStateFields || []);

  return form;
}
