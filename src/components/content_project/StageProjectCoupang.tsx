import React from 'react';
import coupangImg1 from '../../css/images/coupang/coupang1.png';
import coupangImg2 from '../../css/images/coupang/coupang2.png';
import coupangImg3 from '../../css/images/coupang/coupang3.png';
import coupangImg4 from '../../css/images/coupang/coupang4.png';
import coupangImg5 from '../../css/images/coupang/coupang5.png';
import coupangImg6 from '../../css/images/coupang/coupang6.png';
import coupangVideo from '../../css/videos/coupang.mp4';
import cornerImg from '../../css/images/corner-down-right.svg';
import nextjsWhiteImg from '../../css/images/nextjs-white.png';
import reduxImg from '../../css/images/redux.png';
import reduxSagaImg from '../../css/images/redux_saga.png';
import typeScriptImg from '../../css/images/typescript.png';

interface StageProjectCoupangProps {
  onClickVideo: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseOverImage: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeaveImage: (e: React.MouseEvent<HTMLDivElement>) => void;
  bigImageSrc: string;
}

const StageProjectCoupang = ({
  onClickVideo,
  onMouseOverImage,
  onMouseLeaveImage,
  bigImageSrc,
}: StageProjectCoupangProps) => {
  return (
    <>
      <div className="stage_3-2">
        <div className="content_wrapper">
          <div className="media_wrapper">
            <div className="video_wrapper" onClick={onClickVideo} data-contents="coupangVideo">
              <div className="clickVideo">Click !</div>
              <video controls={false} width="600px" height="auto" muted autoPlay loop>
                <source src={coupangVideo} type="video/mp4" />
              </video>
            </div>
            <div
              className="images_wrapper"
              onMouseOver={onMouseOverImage}
              onMouseLeave={onMouseLeaveImage}
            >
              {bigImageSrc && (
                <div className="big_image coupang">
                  <img src={bigImageSrc} alt="bigImage" />
                </div>
              )}
              <img src={coupangImg1} alt="coupangImg1" />
              <img src={coupangImg2} alt="coupangImg2" />
              <img src={coupangImg3} alt="coupangImg3" />
              <img src={coupangImg4} alt="coupangImg4" />
              <img src={coupangImg5} alt="coupangImg5" />
              <img src={coupangImg6} alt="coupangImg6" />
            </div>
          </div>
          <article className="coupang">
            <section>
              <h2>
                <span>Coupang Recruite Lounge admin</span>
              </h2>
              <p>
                ?????? ?????? ?????? ????????? ?????????. <br /> nextjs ??? ?????? ????????? ????????? client side
                rendering ??? server side rendering ??? ?????????, ????????? ?????? ??? ????????? ??? ???????????????.
                ???????????? ???????????? ??????????????? i18n ??? ?????? ?????????, ??? ????????? ????????? ?????? ?????????
                ???????????? ????????? UTC ????????? ??????????????? ???????????????.
              </p>
            </section>
            <section>
              <div className="part">
                <div className="svg_wrapper">
                  <img src={cornerImg} alt="corner_icon" />
                </div>
                <h3>part : </h3>
                <p>&nbsp;????????? ????????? ??????(???????????? ??????)</p>
              </div>
              <div>
                <div className="svg_wrapper">
                  <img src={cornerImg} alt="corner_icon" />
                </div>
                <h3>stack : </h3>
                <ul className="stack">
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
                  <li>
                    <span>typescript</span>
                    <img src={typeScriptImg} alt="typescript" />
                  </li>
                </ul>
              </div>
              <div className="duration">
                <div className="svg_wrapper">
                  <img src={cornerImg} alt="corner_icon" />
                </div>
                <h3>???????????? : </h3>
                <p>&nbsp;2021-05-25 ~ 2021-07-20</p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default StageProjectCoupang;
