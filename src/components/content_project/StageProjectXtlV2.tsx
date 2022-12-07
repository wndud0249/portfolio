import React from 'react';

import cornerImg from '../../css/images/corner-down-right.svg';
import nextjsWhiteImg from '../../css/images/nextjs-white.png';
import reduxImg from '../../css/images/redux.png';
import reduxSagaImg from '../../css/images/redux_saga.png';
import sassImg from '../../css/images/sass.png';

import xtlv2Img1 from '../../css/images/xtlv2/xtlv2_1.png';
import xtlv2Img2 from '../../css/images/xtlv2/xtlv2_2.png';
import xtlv2Img3 from '../../css/images/xtlv2/xtlv2_3.png';
import xtlv2Img4 from '../../css/images/xtlv2/xtlv2_4.png';
import xtlv2Img5 from '../../css/images/xtlv2/xtlv2_5.png';
import xtlv2Img6 from '../../css/images/xtlv2/xtlv2_6.png';
import xtlv2Video from '../../css/videos/4xtlv2.mp4';

interface StageProjectXtlV2Props {
  onClickVideo: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseOverImage: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeaveImage: (e: React.MouseEvent<HTMLDivElement>) => void;
  bigImageSrc: string;
}

const StageProjectXtlV2 = ({
  onClickVideo,
  onMouseOverImage,
  onMouseLeaveImage,
  bigImageSrc,
}: StageProjectXtlV2Props) => {
  return (
    <>
      <div className="stage_3-5">
        <div className="content_wrapper">
          <div className="media_wrapper">
            <div className="video_wrapper" onClick={onClickVideo} data-contents="xtlv2Video">
              <div className="clickVideo">Click !</div>
              <video controls={false} width="600px" height="auto" muted autoPlay loop>
                <source src={xtlv2Video} type="video/mp4" />
              </video>
            </div>
            <div
              className="images_wrapper"
              onMouseOver={onMouseOverImage}
              onMouseLeave={onMouseLeaveImage}
            >
              {bigImageSrc && (
                <div className="big_image xtlv2">
                  <img src={bigImageSrc} alt="bigImage" />
                </div>
              )}
              <img src={xtlv2Img1} alt="xtlv2Img1" />
              <img src={xtlv2Img2} alt="xtlv2Img2" />
              <img src={xtlv2Img3} alt="xtlv2Img3" />
              <img src={xtlv2Img4} alt="xtlv2Img4" />
              <img src={xtlv2Img5} alt="xtlv2Img5" />
              <img src={xtlv2Img6} alt="xtlv2Img6" />
            </div>
          </div>
          <article className="4xtl_v2">
            <section>
              <h2>
                <span>이벤트 관리 사이트 - 4xtl.com v2</span>
              </h2>
              <p>자체서비스 이벤트관리 사이트 두번째 버전.</p>
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
                <p>&nbsp;2022-06-15 ~ 2022-10-25</p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default StageProjectXtlV2;
