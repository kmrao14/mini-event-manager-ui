import * as Yup from 'yup';

export const eventValidationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  date: Yup.string().required('Date is required'),
});
