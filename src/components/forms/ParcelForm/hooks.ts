import { useForm, UseFormProps } from 'react-hook-form';
import { IParcelForm } from './types';
import schema from './schema';
import { yupResolver } from "@hookform/resolvers/yup";
import { usePreloadFormStateFields, UsePreloadFormStateFieldsOptions } from '../../../hooks/usePreloadFormStateFields';

export const useParcelForm = function(
  formOptions?: UseFormProps<IParcelForm>,
  preloadOptions?: UsePreloadFormStateFieldsOptions<IParcelForm>,
) {
  const { defaultValues, ...rest } = formOptions || {};
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

  usePreloadFormStateFields(form, preloadOptions);

  return form;
}
