import Modal from '../ModalWindow/Modal';

// import { useDispatch } from 'react-redux';

// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import css from './ModalApproveAction.module.css';

// import { fetchDeleteUserPet } from 'redux/auth/auth-operations';

// import * as toasty from '../../../shared/toastify/toastify';

const ModalDeleteCardNotice = ({ closeModal, _id, name, handleDelete }) => {
  // const dispatch = useDispatch();

  const handleModalClose = () => {
    closeModal();
  };

  // const handleConfirm = () => {
  //   dispatch(fetchDeleteUserPet(_id));
  //   toasty.toastSuccess('Deleted successful');
  //   closeModal();
  // };

  return (
    <>
      <Modal className={css.modalApprove} closeModal={handleModalClose}>
        <h1>
          Are you sure you want to delete {name}'s card? You don't undo this
          action.
        </h1>
        <div className={css.modalBtnContainer}>
          <button
            className={`${css.modalBtn} ${css.whiteBtn}`}
            onClick={handleModalClose}
          >
            Cancel
          </button>
          <button className={css.modalBtn} onClick={() => handleDelete(_id)}>
            Yes
            <DeleteForeverOutlinedIcon
              sx={{ fontSize: 30 }}
              style={{ marginLeft: '5px' }}
            />
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ModalDeleteCardNotice;
