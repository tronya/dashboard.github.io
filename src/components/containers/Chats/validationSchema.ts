import * as yup from 'yup';

export const validationSchema = yup.object({
  content: yup
    .string()
    .min(1, 'Content should be of minimum 1 characters length'),
});
