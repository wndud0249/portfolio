import React from 'react';
import xImage from '../css/images/x.svg';

type ProjectVideoModalProps = {
  contents: string;
  onCloseModal: () => void;
};

const ProjectVideoModal = ({ contents, onCloseModal }: ProjectVideoModalProps) => {
  return (
    <>
      <div className="modal-popup-container">
        <div className="popup-wrap" id="projectVideo">
          <div className="popup video">
            <div className="popup-head">
              <span className="head-title"></span>
              <div className="imgWrapper">
                <img src={xImage} alt="close" onClick={onCloseModal} />
              </div>
            </div>
            <div className="popup-body">
              <div className="body-content">
                <video controls={false} width="100%" height="100%" muted autoPlay loop>
                  <source src={contents} type="video/mp4" />
                </video>
                <div className="answered_button">
                  <button className="btn" onClick={onCloseModal}>
                    닫기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectVideoModal;
