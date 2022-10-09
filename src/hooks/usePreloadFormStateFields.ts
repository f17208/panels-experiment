import { useEffect, useMemo } from 'react';
import { FieldValues, FormState, UseFormReturn } from 'react-hook-form';

export interface UsePreloadFormStateFieldsOptions<F extends FieldValues> {
  fields?: (keyof FormState<F>)[];
}

/***
 * This is kind of a hack but it's no black magic :)
 * 
 * From React Hook Form's documentation:
 * "formState is wrapped with a Proxy to improve render performance 
 * and skip extra logic if specific state is not subscribed to. 
 * Therefore make sure you invoke or read it before a render in 
 * order to enable the state update." 
 * (https://react-hook-form.com/api/useform/formstate)
 * 
 * This hook simply accesses formState fields so they can be subscribed to
 * from any part of the app.
 * If you need to share a form between multiple components, i.e. creating
 * the form via useForm in a parent component and passing it as a prop to
 * a child component, you can use this hook before rendering the parent
 * component, in order to correctly share the updated value of the formState
 * (with children components).
 */
export const usePreloadFormStateFields = function<
  F extends FieldValues,
>(
  form: UseFormReturn<F>,
  options?: UsePreloadFormStateFieldsOptions<F>,
) {
  const { fields } = options || {};

  const dummyFormState: FormState<F> = useMemo(() => ({
    isDirty: false,
    isSubmitted: false,
    isSubmitSuccessful: false,
    isSubmitting: false,
    isValidating: false,
    isValid: false,
    submitCount: 0,
    defaultValues: undefined,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
  }), []);

  useEffect(() => {
    const allFormStateFields = Object.keys(dummyFormState) as (keyof FormState<F>)[];
    const _fields = fields ?? allFormStateFields;
  
    _fields.forEach(field => {
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      const { [field]: _ } = form.formState;
    });
  }, [dummyFormState, form, fields]);
}
