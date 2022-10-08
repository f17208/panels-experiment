import * as yup from 'yup';

const PositiveNumber = () => yup.number().moreThan(0).typeError('Must be a valid number')

const schema = yup.object().shape({
  weight: PositiveNumber().lessThan(999, 'Too much weight!').required(),
  width: PositiveNumber().required(),
  length: PositiveNumber().required(),
  height: PositiveNumber().required(),
});

export default schema;