import React, { Dispatch, SetStateAction } from 'react';
import ProjectVideoModal from './ProjectVideoModal';

type ModalComponentProps = {
  open: boolean;
  target: string;
  contents: string;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  modalOpenRef: any;
};

const ModalComponent = ({
  open,
  target,
  contents,
  setModalOpen,
  modalOpenRef,
}: ModalComponentProps) => {
  const onCloseModal = () => {
    setModalOpen(false);
    modalOpenRef.current = false;
  };
  return (
    <>
      {open && target === 'projectVideo' && (
        <ProjectVideoModal contents={contents} onCloseModal={onCloseModal} />
      )}
      {/* {open && target === 'projectImage' && <ProjectVideoModal contents={contents} />} */}
    </>
  );
};

export default ModalComponent;
