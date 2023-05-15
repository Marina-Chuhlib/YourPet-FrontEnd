// import { Link } from 'react-router-dom';

import TitleModal from 'shared/components/TitleModal/TitleModal';
import StatusIndicator from 'shared/components/StatusIndicator/StatusIndicator';
import ButtonChooseOption from 'shared/components/ButtonChooseOption/ButtonChooseOption';
import ButtonRoutes from 'shared/components/ButtonRoutes/ButtonRoutes';
import ButtonNext from 'shared/components/ButtonRoutes/ButtonNext';
import ButtonPrev from 'shared/components/ButtonRoutes/ButtonPrev';

export const AddPetChooseModal = () => {
  return (
    <>
      <TitleModal title={'Add pet'} />
      <StatusIndicator />
      <ButtonChooseOption />
      <ButtonRoutes>
        <ButtonNext textButton={'Next'} />
        <ButtonPrev textButton={'Cancel'} />
      </ButtonRoutes>
    </>
  );
};
