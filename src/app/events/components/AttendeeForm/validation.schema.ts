import * as Yup from 'yup';

export const attendeeSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').optional(),
});
