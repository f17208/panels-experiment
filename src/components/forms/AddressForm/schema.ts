import * as yup from 'yup';

export const schema = yup.object().shape({
  street1: yup.string().required(),
  street2: yup.string(),
  city: yup.string().required(),
  zip: yup.string().required(),
  country: yup.string().required(),
});
