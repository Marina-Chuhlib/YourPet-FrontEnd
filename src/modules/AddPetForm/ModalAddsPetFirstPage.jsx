// import { Formik } from 'formik';
// import { InputFormik } from 'shared/components/Input';
// import cssInput from '../../shared/components/Input/Input.module.css';
// import cssButton from '../../shared/components/Button/Button.module.css';
// import cssContainer from '../../shared/components/ModalContainer/ModalContainer.module.css';
// import ModalContainer from 'shared/components/ModalContainer/ModalContainer';
// import TitleModal from '../../shared/components/TitleModal/TitleModal';
// import { Button } from '../../shared/components/Button/Button';
// import FormComponent from 'shared/components/FormComponent/FormConponent';
// import { ButtonContainerWrap } from 'shared/components/ButtonContainer';

// import { pet } from '../../shared/services/FormValidation';

// export const ModalAddsPetFirstPage = props => {
//     const handleSubmit = values => {
//         props.next(values, true);
//     };
//     return (
//         <ModalContainer customStyle={ cssContainer.container_modal__add }>
            
//             <Formik
//                 validationSchema={pet.stepOneValidationSchema}
//                 initialValues={props.data}
//                 onSubmit={handleSubmit}>
                
//                 {() => (
//                     <FormComponent>
//                         <TitleModal title={'Add pet'} />

//                         <InputFormik
//                             customStyle={ cssInput.input_with_label }
//                             customStyleError={cssInput.input__error_with_label}
//                             name="name"
//                             placeholder={'Tipe name pet'}
//                             label={'Name pet'} />
                        
//                         <InputFormik
//                             customStyle={ cssInput.input_with_label }
//                             customStyleError={cssInput.input__error_with_label}
//                             name="dateOfBirth"
//                             placeholder={'Tipe date of birth'}
//                             label={'Date of birth'} />
                        
//                         <InputFormik
//                             customStyle={ cssInput.input_with_label }
//                             customStyleError={cssInput.input__error_with_label}
//                             customStyleWrapper={cssInput.input__wrapper_last}
//                             name="breed"
//                             placeholder={'Tipe breed'}
//                             label={'Breed'} />
                        
//                         <ButtonContainerWrap>
//                             <Button type='submit' buttonName={'Next'} />

//                             <Button type='button'
//                                 onClick={props.closeModal}
//                                 customStyle={cssButton.button__auth_last}
//                                 buttonName={'Cancel'} />
//                         </ButtonContainerWrap>
//                     </FormComponent>
//                 )}
//             </Formik>
//         </ModalContainer>
//     );
// };