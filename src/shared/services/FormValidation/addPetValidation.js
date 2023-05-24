import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short! 2 characters minimum')
    .max(16, 'Too Long! 16 characters maximum')
    .label('Name')
    .required('Name is required')
    .matches(/^[a-zA-Z\s]+?$/iu, 'Only Latin letters'),
  birthday: Yup.string()
    .matches(
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
      'Correct format: dd.mm.yyyy'
    )
    .test(
      'is-date-valid',
      () => `Future date not allowed`,
      value => {
        if (value) {
          let date = value.split('.');
          const corectFormat = new Date(`${date[2]}.${date[1]}.${date[0]}`);
          return corectFormat.getTime() < Date.now();
        }
        return true;
      }
    )
    .label('Date of birth')
    .required('Date of birth is required'),
  breed: Yup.string()
    .min(2, 'Too Short! 2 characters minimum')
    .max(16, 'Too Long! 16 characters maximum')
    .label('Breed or type your pet')
    .required('Breed is required'),
});

export const validationSchemaAdd = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short! 2 characters minimum')
    .max(16, 'Too Long! 16 characters maximum')
    .label('Name')
    .required('Name is required')
    .matches(/^[a-zA-Z\s]+?$/iu, 'Only Latin letters'),
  date: Yup.string()
    .matches(
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
      'Correct format: dd.mm.yyyy'
    )
    .test(
      'is-date-valid',
      () => `Future date not allowed`,
      value => {
        if (value) {
          let date = value.split('.');
          const corectFormat = new Date(`${date[2]}.${date[1]}.${date[0]}`);
          return corectFormat.getTime() < Date.now();
        }
        return true;
      }
    )
    .label('Date of birth')
    .required('Date of birth is required'),
  breed: Yup.string()
    .min(2, 'Too Short! 2 characters minimum')
    .max(16, 'Too Long! 16 characters maximum')
    .label('Breed or type your pet')
    .required('Breed is required'),
  title: Yup.string()
    .min(2, 'Too Short! 2 characters minimum')
    .max(26, 'Too Long! 26 characters maximum')
    .required('Title is required'),
});

export const validationSchemaThirdMy = Yup.object({
  comments: Yup.string()
    .min(8, 'Too Short! 8 characters minimum')
    .max(120, 'Too Long! 120 characters maximum')
    .label('Comment')
    .required('Comments is required'),
  imageURL: Yup.mixed()
    .label('Pet image')
    .required('Pet`s image is required')
    .test(
      'fileSize',
      'File size must be less than 3MB',
      value => value && value.size <= 3 * 1024 * 1024
    )
    .test(
      'fileType',
      'Only image files are allowed',
      value =>
        value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)
    ),
});

export const validationSchemaThirdAddSell = Yup.object({
  comments: Yup.string()
    .min(8, 'Too Short! 8 characters minimum')
    .max(120, 'Too Long! 120 characters maximum')
    .label('Comment')
    .required('Comments is required'),
  file: Yup.mixed()
    .label('Pet image')
    .required('Pet`s image is required')
    .test(
      'fileSize',
      'File size must be less than 3MB',
      value => value && value.size <= 3 * 1024 * 1024
    )
    .test(
      'fileType',
      'Only image files are allowed',
      value =>
        value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)
    ),
  location: Yup.string()
    .min(4, 'Too Short! 4 characters minimum')
    .max(16, 'Too Long! 16 characters maximum')
    .matches(/^[A-Z][a-zA-Z]*$/, 'The first letter must be uppercase')
    .label('Location')
    .required('Location is required'),
  sex: Yup.string().required('Choose gender'),
  price: Yup.number()
    .positive()
    .required()
    .label(`Price`)
    .typeError(`Must be a number`),
});

export const validationSchemaThirdAddLost = Yup.object({
  comments: Yup.string()
    .min(8, 'Too Short! 8 characters minimum')
    .max(120, 'Too Long! 120 characters maximum')
    .label('Comment')
    .required('Comments is required'),
  file: Yup.mixed()
    .label('Pet image')
    .test(
      'fileSize',
      'File size must be less than 3MB',
      value => value && value.size <= 3 * 1024 * 1024
    )
    .test(
      'fileType',
      'Only image files are allowed',
      value =>
        value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)
    )
    .required('Pet`s image is required'),
  location: Yup.string()
    .min(4, 'Too Short! 4 characters minimum')
    .max(16, 'Too Long! 16 characters maximum')
    .matches(/^[A-Z][a-zA-Z]*$/, 'The first letter must be uppercase')
    .label('Location')
    .required('Location is required'),
  sex: Yup.string().required('Choose gender'),
});
