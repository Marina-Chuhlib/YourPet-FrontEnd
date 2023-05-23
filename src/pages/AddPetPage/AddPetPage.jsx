
import { AddPetChooseForm } from 'modules/AddPetForm/AddPetChooseForm';
import { useEffect } from 'react';
import css from './addPetPage.module.css';


const AddPetPage = () => {
  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.add(css.bodyBg);

    return () => {
      body.classList.remove(css.bodyBg);
    };
  }, []);
  return (
    <>
      <AddPetChooseForm />
    </>
  );
};

export default AddPetPage;