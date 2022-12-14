import React from 'react';
import xtlv1Img1 from '../../css/images/xtlv1/xtlv1_1.png';
import xtlv1Img2 from '../../css/images/xtlv1/xtlv1_2.png';
import xtlv1Img3 from '../../css/images/xtlv1/xtlv1_3.png';
import xtlv1Img4 from '../../css/images/xtlv1/xtlv1_4.png';
import xtlv1Img5 from '../../css/images/xtlv1/xtlv1_5.png';
import xtlv1Img6 from '../../css/images/xtlv1/xtlv1_6.png';
import xtlv1Video from '../../css/videos/4xtlv1.mp4';
import cornerImg from '../../css/images/corner-down-right.svg';
import sassImg from '../../css/images/sass.png';
import bootStrapImg from '../../css/images/bootstrap.jpg';
import reduxImg from '../../css/images/redux.png';
import reduxSagaImg from '../../css/images/redux_saga.png';
import nextjsWhiteImg from '../../css/images/nextjs-white.png';

interface StageProjectXtlV1Props {
  onClickVideo: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseOverImage: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeaveImage: (e: React.MouseEvent<HTMLDivElement>) => void;
  bigImageSrc: string;
}

const StageProjectXtlV1 = ({
  onClickVideo,
  onMouseOverImage,
  onMouseLeaveImage,
  bigImageSrc,
}: StageProjectXtlV1Props) => {
  return (
    <>
      <div className="stage_3-3">
        <div className="content_wrapper">
          <div className="media_wrapper">
            <div className="video-wrapper" onClick={onClickVideo} data-contents="xtlv1Video">
              <div className="clickVideo">Click !</div>
              <video controls={false} width="600px" height="auto" muted autoPlay loop>
                <source src={xtlv1Video} type="video/mp4" />
              </video>
            </div>
            <div
              className="images_wrapper"
              onMouseOver={onMouseOverImage}
              onMouseLeave={onMouseLeaveImage}
            >
              {bigImageSrc && (
                <div className="big_image xtlv1">
                  <img src={bigImageSrc} alt="bigImage" />
                </div>
              )}
              <img src={xtlv1Img1} alt="xtlv1Img1" />
              <img src={xtlv1Img2} alt="xtlv1Img2" />
              <img src={xtlv1Img3} alt="xtlv1Img3" />
              <img src={xtlv1Img4} alt="xtlv1Img4" />
              <img src={xtlv1Img5} alt="xtlv1Img5" />
              <img src={xtlv1Img6} alt="xtlv1Img6" />
            </div>
          </div>
          <article className="4xtl_v1">
            <section>
              <h2>
                <span>????????? ?????? ????????? - 4xtl.com v1</span>
              </h2>
              <p>
                ?????? ???????????? ????????? ?????? ???????????? ????????? ??????. ?????????, ??????, ???????????? ???, ??????
                ??????, ????????? ?????? ?????? ????????? ?????? ????????? ?????????, ??????, ??????????????????, ?????????
                ?????????????????? ?????? ??????, aws ec2 ???????????? ????????? ???????????? ?????????????????????.
              </p>
            </section>
            <section>
              <div className="part">
                <div className="svg_wrapper">
                  <img src={cornerImg} alt="corner_icon" />
                </div>
                <h3>part : </h3>
                <p>&nbsp;??????????????? ??????</p>
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
                    <span>redux</span>
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
                <h3>???????????? : </h3>
                <p>&nbsp;2021-09-16 ~ 2022-05-11</p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default StageProjectXtlV1;
