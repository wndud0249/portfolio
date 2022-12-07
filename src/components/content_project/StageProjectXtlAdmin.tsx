import React from 'react';
import xtlAdminImg1 from '../../css/images/xtlAdmin/admin1.png';
import xtlAdminImg2 from '../../css/images/xtlAdmin/admin2.png';
import xtlAdminImg3 from '../../css/images/xtlAdmin/admin3.png';
import xtlAdminImg4 from '../../css/images/xtlAdmin/admin4.png';
import xtlAdminImg5 from '../../css/images/xtlAdmin/admin5.png';
import xtlAdminImg6 from '../../css/images/xtlAdmin/admin6.png';
import bootStrapImg from '../../css/images/bootstrap.jpg';
import xtlAdminVideo from '../../css/videos/4xtladmin.mp4';
import cornerImg from '../../css/images/corner-down-right.svg';
import sassImg from '../../css/images/sass.png';
import reduxImg from '../../css/images/redux.png';
import reduxSagaImg from '../../css/images/redux_saga.png';
import nextjsWhiteImg from '../../css/images/nextjs-white.png';

interface StageProjectXtlAdminProps {
  onClickVideo: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseOverImage: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeaveImage: (e: React.MouseEvent<HTMLDivElement>) => void;
  bigImageSrc: string;
}

const StageProjectXtlAdmin = ({
  onClickVideo,
  onMouseOverImage,
  onMouseLeaveImage,
  bigImageSrc,
}: StageProjectXtlAdminProps) => {
  return (
    <>
      <div className="stage_3-4">
        <div className="content_wrapper">
          <div className="media_wrapper">
            <div className="video_wrapper" onClick={onClickVideo} data-contents="xtlAdminVideo">
              <div className="clickVideo">Click !</div>
              <video controls={false} width="600px" height="auto" muted autoPlay loop>
                <source src={xtlAdminVideo} type="video/mp4" />
              </video>
            </div>
            <div
              className="images_wrapper"
              onMouseOver={onMouseOverImage}
              onMouseLeave={onMouseLeaveImage}
            >
              {bigImageSrc && (
                <div className="big_image xtladmin">
                  <img src={bigImageSrc} alt="bigImage" />
                </div>
              )}
              <img src={xtlAdminImg1} alt="xtlAdminImg1" />
              <img src={xtlAdminImg2} alt="xtlAdminImg2" />
              <img src={xtlAdminImg3} alt="xtlAdminImg3" />
              <img src={xtlAdminImg4} alt="xtlAdminImg4" />
              <img src={xtlAdminImg5} alt="xtlAdminImg5" />
              <img src={xtlAdminImg6} alt="xtlAdminImg6" />
            </div>
          </div>
          <article className="4xtl_admin">
            <section>
              <h2>
                <span>이벤트 관리 사이트 어드민 - 4xtl.com admin</span>
              </h2>
              <p>
                4xtl.com v1 에서 등록한 회원, 회사 관리, 웹빌더에서 쓰일 컴포넌트와 구성요소의
                등록,수정 메일, 문자메시지 보내기 등의 기능이 있는 어드민 사이트를 제작하였습니다.
              </p>
            </section>
            <section>
              <div className="part">
                <div className="svg_wrapper">
                  <img src={cornerImg} alt="corner_icon" />
                </div>
                <h3>part : </h3>
                <p>&nbsp;프론트엔드 전체</p>
              </div>
              <div>
                <div className="svg_wrapper">
                  <img src={cornerImg} alt="corner_icon" />
                </div>
                <h3>stack : </h3>

                <ul className="stack">
                  <li>
                    <span>Bootstrap</span>
                    <img src={bootStrapImg} alt="bootstrap" />
                  </li>
                  <li>
                    <span>Scss</span>
                    <img src={sassImg} alt="scss" />
                  </li>
                  <li>
                    <span>Nextjs</span>
                    <img src={nextjsWhiteImg} alt="nextjs" />
                  </li>
                  <li>
                    <span>Redux</span>
                    <img src={reduxImg} alt="redux" />
                  </li>
                  <li>
                    <span>Redux-saga</span>
                    <img src={reduxSagaImg} alt="redux-saga" />
                  </li>
                </ul>
              </div>
              <div className="duration">
                <div className="svg_wrapper">
                  <img src={cornerImg} alt="corner_icon" />
                </div>
                <h3>작업기간 : </h3>
                <p>&nbsp;2021-12-13 ~ 2022-05-19</p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default StageProjectXtlAdmin;
