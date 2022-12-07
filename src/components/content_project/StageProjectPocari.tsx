import React from 'react';
import pocariImg1 from '../../css/images/pocari/pocari1.png';
import pocariImg2 from '../../css/images/pocari/pocari2.png';
import pocariImg3 from '../../css/images/pocari/pocari3.png';
import pocariImg4 from '../../css/images/pocari/pocari4.png';
import pocariImg5 from '../../css/images/pocari/pocari5.png';
import pocariImg6 from '../../css/images/pocari/pocari6.png';
import cornerImg from '../../css/images/corner-down-right.svg';
import reactImg from '../../css/images/react.png';
import reduxImg from '../../css/images/redux.png';
import reduxSagaImg from '../../css/images/redux_saga.png';
import typeScriptImg from '../../css/images/typescript.png';
import pocariVideo from '../../css/videos/pocari.mp4';

interface StageProjectPocariProps {
  onClickVideo: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseOverImage: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeaveImage: (e: React.MouseEvent<HTMLDivElement>) => void;
  bigImageSrc: string;
}

const StageProjectPocari = ({
  onClickVideo,
  onMouseOverImage,
  onMouseLeaveImage,
  bigImageSrc,
}: StageProjectPocariProps) => {
  return (
    <>
      <div className="stage_3-1">
        <div className="content_wrapper">
          <div className="media_wrapper">
            <div className="video_wrapper" onClick={onClickVideo} data-contents="pocariVideo">
              <div className="clickVideo">Click !</div>
              <video controls={false} width="600px" height="auto" muted autoPlay loop>
                <source src={pocariVideo} type="video/mp4" />
              </video>
            </div>
            <div
              className="images_wrapper"
              onMouseOver={onMouseOverImage}
              onMouseLeave={onMouseLeaveImage}
            >
              {bigImageSrc && (
                <div className="big_image pocari">
                  <img src={bigImageSrc} alt="bigImage" />
                </div>
              )}
              <img src={pocariImg1} alt="pocariImg1" />
              <img src={pocariImg2} alt="pocariImg2" />
              <img src={pocariImg3} alt="pocariImg3" />
              <img src={pocariImg4} alt="pocariImg4" />
              <img src={pocariImg5} alt="pocariImg5" />
              <img src={pocariImg6} alt="pocariImg6" />
            </div>
          </div>
          <article className="pocari">
            <section>
              <h2>
                <span>Pocari Sweat Blueup</span>
              </h2>
              <p>
                2021년 5월 17일부터 3개월 반동안 진행된 포카리스웨트 블루업 프로젝트 프로모션 페이지
                회원가입과 로그인파트를 맡았는데 회원가입 파트에서는 정규식을 더 공부하는 계기가
                되었고, 로그인에서는 자체 로그인 외에 카카오, 네이버등의 로그인도 제공하면서 third
                party api 에 더 익숙해지게 되었습니다. 또한 아직 리액트와 상태관리에 익숙하지 않았던
                시기라 훅스 state 의 비동기성, 리덕스와 리덕스사가의 ducks 패턴과 다른 패턴들과의
                편리성 비교 등을 해볼수 있었습니다.
              </p>
            </section>
            <section>
              <div className="part">
                <div className="svg_wrapper">
                  <img src={cornerImg} alt="corner_icon" />
                </div>
                <h3> part : </h3>
                <p>&nbsp;로그인, 회원가입 기능</p>
              </div>
              <div>
                <div className="svg_wrapper">
                  <img src={cornerImg} alt="corner_icon" />
                </div>
                <h3> stack : </h3>
                <ul className="stack">
                  <li>
                    <span>React</span>
                    <img src={reactImg} alt="react" />
                  </li>
                  <li>
                    <span>Redux</span>
                    <img src={reduxImg} alt="react" />
                  </li>
                  <li>
                    <span>Redux-saga</span>
                    <img src={reduxSagaImg} alt="react" />
                  </li>
                  <li>
                    <span>Typescript</span>
                    <img src={typeScriptImg} alt="react" />
                  </li>
                </ul>
              </div>
              <div className="duration">
                <div className="svg_wrapper">
                  <img src={cornerImg} alt="corner_icon" />
                </div>
                <h3>작업기간 : </h3>
                <p>&nbsp;2021-04-20 ~ 2021-04-30</p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default StageProjectPocari;
