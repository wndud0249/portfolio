import React from 'react';
import webinarImg1 from '../../css/images/webinar/webinar1.png';
import webinarImg2 from '../../css/images/webinar/webinar2.png';
import webinarImg3 from '../../css/images/webinar/webinar3.png';
import webinarImg4 from '../../css/images/webinar/webinar4.png';
import webinarImg5 from '../../css/images/webinar/webinar5.png';
import webinarImg6 from '../../css/images/webinar/webinar6.png';
import cornerImg from '../../css/images/corner-down-right.svg';
import websocketImg from '../../css/images/websocket.png';
import typeScriptImg from '../../css/images/typescript.png';
import reduxToolKitImg from '../../css/images/toolkit.png';
import sassImg from '../../css/images/sass.png';
import webinarVideo from '../../css/videos/webinar.mp4';
import reactImg from '../../css/images/react.png';

interface StageProjectWebinarProps {
  onClickVideo: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseOverImage: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeaveImage: (e: React.MouseEvent<HTMLDivElement>) => void;
  bigImageSrc: string;
}

const StageProjectWebinar = ({
  onClickVideo,
  onMouseOverImage,
  onMouseLeaveImage,
  bigImageSrc,
}: StageProjectWebinarProps) => {
  return (
    <>
      <div className="stage_3-6">
        <div className="content_wrapper">
          <div className="media_wrapper">
            <div className="video_wrapper" onClick={onClickVideo} data-contents="webinarVideo">
              <div className="clickVideo">Click !</div>
              <video controls={false} width="600px" height="auto" muted autoPlay loop>
                <source src={webinarVideo} type="video/mp4" />
              </video>
            </div>
            <div
              className="images_wrapper"
              onMouseOver={onMouseOverImage}
              onMouseLeave={onMouseLeaveImage}
            >
              {bigImageSrc && (
                <div className="big_image webinar">
                  <img src={bigImageSrc} alt="bigImage" />
                </div>
              )}
              <img src={webinarImg1} alt="webinarImg1" />
              <img src={webinarImg2} alt="webinarImg2" />
              <img src={webinarImg3} alt="webinarImg3" />
              <img src={webinarImg4} alt="webinarImg4" />
              <img src={webinarImg5} alt="webinarImg5" />
              <img src={webinarImg6} alt="webinarImg6" />
            </div>
          </div>
          <article className="4xtl_admin">
            <section>
              <h2>
                <span>웨비나 플랫폼 - webinar</span>
              </h2>
              <p>
                자체서비스로 개발한 웨비나 플랫폼. 웹소켓으로 웨비나 관리 플랫폼인 콘솔, 서버와
                통신하며 유저들에게 스트리밍, 채팅, 투표, 퀴즈, 설문조사 등의 경험을 실시간으로
                제공하는 사이트입니다. url 상에 유효한 티켓을 들고 오는 경우에만 접속이 가능하도록
                설계하였고 리다이렉트를 통해 티켓이 노출되어 같은 티켓으로 접속하는 일이 없도록
                하였습니다. api 요청으로 받아온 값과 웹소켓으로 받고 보내는 값을 동일하게 맞추어
                통일성, 확장성에도 신경을 쓰며 개발하였습니다.
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
                    <span>Scss</span>
                    <img src={sassImg} alt="scss" />
                  </li>
                  <li>
                    <span>React</span>
                    <img src={reactImg} alt="react" />
                  </li>
                  <li>
                    <span>Typescript</span>
                    <img src={typeScriptImg} alt="typescript" />
                  </li>
                  <li>
                    <span>Redux-toolkit</span>
                    <img src={reduxToolKitImg} alt="redux-toolkit" />
                  </li>
                  <li>
                    <span>Websocket</span>
                    <img src={websocketImg} alt="websocket" />
                  </li>
                </ul>
              </div>
              <div className="duration">
                <div className="svg_wrapper">
                  <img src={cornerImg} alt="corner_icon" />
                </div>
                <h3>작업기간 : </h3>
                <p>&nbsp;2022-7-13 ~ 2022-10-25</p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
};

export default StageProjectWebinar;
