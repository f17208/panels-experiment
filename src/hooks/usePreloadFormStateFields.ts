import { FieldValues, FormState, UseFormReturn } from 'react-hook-form';

/***
 * This is kind of a hack but it's not black magic :)
 * 
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
 * a child component, you should use this before the render of the parent
 * component, in order to share the updated value of the formState.
 */
export const usePreloadFormStateFields = function<
  F extends FieldValues,
>(form: UseFormReturn<F>, fields: (keyof FormState<F>)[]) {
  fields.forEach(field => {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    const value = form.formState[field];
  });
}
