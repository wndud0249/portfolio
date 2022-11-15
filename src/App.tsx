import React, { useEffect, useRef, useState } from 'react';
import './css/reset.scss';
import './css/App.scss';
import './css/modal.scss';
import htmlImg from './css/images/html5.png';
import cssImg from './css/images/css3.png';
import sassImg from './css/images/sass.png';
import bootStrapImg from './css/images/bootstrap.jpg';
import jsImg from './css/images/js.png';
import reactImg from './css/images/react.png';
import reduxImg from './css/images/redux.png';
import reduxToolKitImg from './css/images/toolkit.png';
import reduxSagaImg from './css/images/redux_saga.png';
import typeScriptImg from './css/images/typescript.png';
import nextJsImg from './css/images/nextjs.svg';
import gitImg from './css/images/git.png';
import gitHubImg from './css/images/github-sign.png';
import gitLabImg from './css/images/gitlab.png';
import slackImg from './css/images/slack.png';
import confluenceImg from './css/images/confluence.png';
import jiraImg from './css/images/jira.png';
import zeplinImg from './css/images/zeplin.png';
import websocketImg from './css/images/websocket.png';
import nameImg from './css/images/user.svg';
import birthImg from './css/images/user-plus.svg';
import addressImg from './css/images/home.svg';
import phoneImg from './css/images/smartphone.svg';
import emailImg from './css/images/mail.svg';
import blogImg from './css/images/monitor.svg';
import pocariVideo from './css/videos/pocari.mp4';
import cornerImg from './css/images/corner-down-right.svg';
import coupangVideo from './css/videos/coupang.mp4';
import xtlv1Video from './css/videos/4xtlv1.mp4';
import xtlAdminVideo from './css/videos/4xtladmin.mp4';
import xtlv2Video from './css/videos/4xtlv2.mp4';
import webinarVideo from './css/videos/webinar.mp4';
import ModalComponent from './components/ModalComponent';
import useOnScreen from './lib/useOnScreen';
import nextjsWhiteImg from './css/images/nextjs-white.png';
import pocariImg1 from './css/images/pocari/pocari1.png';
import pocariImg2 from './css/images/pocari/pocari2.png';
import pocariImg3 from './css/images/pocari/pocari3.png';
import pocariImg4 from './css/images/pocari/pocari4.png';
import pocariImg5 from './css/images/pocari/pocari5.png';
import pocariImg6 from './css/images/pocari/pocari6.png';

function App() {
  const [focusedStage, setFocusedStage] = useState('');
  const [letterTobeDel, setLetterTobeDel] = useState<string[]>([]);
  const [clickTextShow, setClickTextShow] = useState(false);
  const [typingColor, setTypingColor] = useState('white');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTarget, setModalTarget] = useState('');
  const [modalContents, setModalContents] = useState('');
  const letterArr = useRef<string[]>();
  const stageData = useRef(focusedStage);
  const modalOpenRef = useRef(modalOpen);
  const divRef = useRef<HTMLDivElement>(null);
  const onContent4 = useOnScreen(divRef);

  useEffect(() => {
    console.log('onContent4', onContent4);
  }, [onContent4]);

  function functionToCall(e: any) {
    console.log(modalOpenRef.current);
    if (modalOpenRef.current) return;
    const stagePoint = parseInt(
      stageData.current.split('_')[1].split('-')[0] + stageData.current.split('_')[1].split('-')[1]
    );

    if (e.deltaY < 0) {
      console.log('up');
      if (stagePoint === 11) {
        console.log('1-1페이지');
      } else if (stagePoint === 21) {
        setFocusedStage('stage_1-1');
      } else if (stagePoint === 31) {
        setFocusedStage('stage_2-1');
      } else if (stagePoint === 41) {
        setFocusedStage('stage_3-1');
      } else if (stagePoint === 51) {
        setFocusedStage('stage_4-1');
      } else {
        setFocusedStage(
          `stage_${Math.floor(stagePoint / 10)}-${
            stagePoint - Math.floor(stagePoint / 10) * 10 - 1
          }`
        );
      }
    } else {
      console.log('down');
      if (stagePoint === 11) {
        setFocusedStage('stage_2-1');
      } else if (stagePoint === 22) {
        setFocusedStage('stage_3-1');
      } else if (stagePoint === 36) {
        setFocusedStage('stage_4-1');
      } else if (stagePoint === 43) {
        setFocusedStage('stage_5-1');
      } else if (stagePoint === 51) {
        console.log('5-1 page');
      } else {
        setFocusedStage(
          `stage_${Math.floor(stagePoint / 10)}-${
            stagePoint - Math.floor(stagePoint / 10) * 10 + 1
          }`
        );
      }
    }
  }

  let enableScroll = true;

  useEffect(() => {
    let scrollTimeOut: any;
    window.addEventListener('wheel', (e) => {
      if (!enableScroll) return;
      functionToCall(e);
      enableScroll = false;
      scrollTimeOut = setTimeout(() => {
        enableScroll = true;
      }, 1000);
    });
    return () => {
      clearTimeout(scrollTimeOut);
    };
  }, []);

  useEffect(() => {
    if (!focusedStage) return;
    stageData.current = focusedStage;

    const widthPoint = stageData.current.split('_')[1].split('-')[1];
    const heightPoint = stageData.current.split('_')[1].split('-')[0];
    const rootDom = document.querySelector('.contents');
    if (rootDom instanceof HTMLElement) {
      rootDom.setAttribute(
        'style',
        `transform:translate(${-window.innerWidth * (parseInt(widthPoint) - 1)}px,${
          -window.innerHeight * (parseInt(heightPoint) - 1)
        }px)`
      );
    }
  }, [focusedStage]);

  useEffect(() => {
    setFocusedStage('stage_1-1');
    const introPage = document.querySelector('.stage_1-1');
    introPage?.scrollIntoView();
  }, []);

  const onClickHeaderMenu = (e: any) => {
    setFocusedStage(`.${e.currentTarget.dataset.menu}`);
  };

  console.log(focusedStage);
  /* 타이핑 */

  let typingTimeOut: any;

  const typingSpeed = 70;
  const deletingSpeed = 30;

  const typing = async () => {
    if (!focusedStage) return;

    const $text = document.querySelector('.typing');
    const letterObjs = [
      { stageName: 'stage_1-1', text: `hello, I'm Frontend Developer Juyoung`, color: 'white' },
      { stageName: 'stage_2-1', text: 'SKILL - Develop', color: 'black' },
      { stageName: 'stage_2-2', text: 'SKILL - Others', color: 'black' },
      { stageName: 'stage_3-1', text: 'PROJECT - pocari blueup', color: 'white' },
      { stageName: 'stage_3-2', text: 'PROJECT - coupang recruite', color: 'white' },
      { stageName: 'stage_3-3', text: 'PROJECT - 4xtl.com V1', color: 'white' },
      { stageName: 'stage_3-4', text: 'PROJECT - 4xtl.com admin', color: 'white' },
      { stageName: 'stage_3-5', text: 'PROJECT - 4xtl.com V2', color: 'white' },
      { stageName: 'stage_3-6', text: 'PROJECT - webinar', color: 'white' },
    ];
    const letter = letterObjs.filter((obj) => obj.stageName === focusedStage)[0].text.split('');
    if (typingTimeOut) clearTimeout(typingTimeOut);
    if ($text instanceof HTMLElement) {
      setLetterTobeDel(letter);
      letterArr.current = letter;
      setTypingColor(letterObjs.filter((obj) => obj.stageName === focusedStage)[0].color);
      for (let i = 0; i < letter.length; i++) {
        await wait(typingSpeed);
        $text.innerHTML += letter[i];
      }
    }
  };

  const removeTyping = async () => {
    if (letterTobeDel.length === 0) return;
    const $text = document.querySelector('.typing');
    if ($text instanceof HTMLElement) {
      const letter = letterTobeDel;
      while (letter.length) {
        await wait(deletingSpeed);
        letter.pop();
        $text.innerHTML = letter.join('');
      }
      typing();
    }
  };

  function wait(ms: number) {
    return new Promise((res) => setTimeout(res, ms));
  }

  useEffect(() => {
    if (!focusedStage) return;
    if (typingTimeOut) clearTimeout(typingTimeOut);

    // 초기 실행
    removeTyping();
    typingTimeOut = setTimeout(() => {
      typing();
    }, 1500);
    return () => {
      clearTimeout(typingTimeOut);
    };
  }, [focusedStage]);

  const onMouseOverBlog = () => {
    setClickTextShow(true);
  };

  const onMouseLeaveBlog = () => {
    setClickTextShow(false);
  };
  const onClickModal = () => {
    setModalOpen(true);
    modalOpenRef.current = true;
    setModalTarget('projectVideo');
    setModalContents(pocariVideo);
  };
  const onClickVideo = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('clicked');
    setModalOpen(true);
    modalOpenRef.current = true;
    setModalTarget('projectVideo');
    switch (e.currentTarget.dataset.contents) {
      case 'pocariVideo':
        setModalContents(pocariVideo);
        break;
      case 'coupangVideo':
        setModalContents(coupangVideo);
        break;
      case 'xtlv1Video':
        setModalContents(xtlv1Video);
        break;
      case 'xtlAdminVideo':
        setModalContents(xtlAdminVideo);
        break;
      case 'xtlv2Video':
        setModalContents(xtlv2Video);
        break;
      case 'webinarVideo':
        setModalContents(webinarVideo);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className="main_wrapper">
        <div className="header">
          <div className="header_content">
            <div className="header_content_wrapper">
              <div className="header_main_menu" onClick={onClickHeaderMenu} data-menu="stage_1-1">
                정주영's portfolio
              </div>
              <div className="header_other_menu">
                <div className="other_menu_item" onClick={onClickHeaderMenu} data-menu="stage_2-1">
                  skills
                </div>
                <div className="other_menu_item" onClick={onClickHeaderMenu} data-menu="stage_3-1">
                  projects
                </div>
                <div className="other_menu_item" onClick={onClickHeaderMenu} data-menu="stage_4-1">
                  studied
                </div>
                <div className="other_menu_item" onClick={onClickHeaderMenu} data-menu="stage_5-1">
                  blueprint
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="typing" style={{ color: typingColor }}></div>

        <div className="contents">
          <div className="content_1">
            <div className="stage_1-1">
              <div className="content_wrapper">
                <div className="about_me">About Me</div>
                <article className="title_about">
                  <div className="about_first">
                    <div className="name">
                      <img src={nameImg} alt="name" />
                      <div>
                        <div className="name_icon">
                          <span>이름</span>
                        </div>
                        <div className="name_content">정주영</div>
                      </div>
                    </div>
                    <div className="birth">
                      <img src={birthImg} alt="birth" />
                      <div>
                        <div className="birth_icon">
                          <span>birth</span>
                        </div>
                        <div className="birth_content">1989-06-22</div>
                      </div>
                    </div>
                    <div className="addr">
                      <img src={addressImg} alt="address" />
                      <div>
                        <div className="addr_icon">
                          <span>address</span>
                        </div>
                        <div className="addr_content">서울시 송파구</div>
                      </div>
                    </div>
                  </div>
                  <div className="about_second">
                    <div className="phone">
                      <img src={phoneImg} alt="phone" />
                      <div>
                        <div className="phone_icon">
                          <span>mobile</span>
                        </div>
                        <div className="phone_content">010-2345-4104</div>
                      </div>
                    </div>
                    <div className="email">
                      <img src={emailImg} alt="email" />
                      <div>
                        <div className="email_icon">
                          <span>E-mail</span>
                        </div>
                        <div className="email_content">wndud0249@naver.com</div>
                      </div>
                    </div>
                    <div className="blog">
                      <img src={blogImg} alt="blog" />
                      <div>
                        <div className="blog_icon">
                          <span>blog</span>
                        </div>
                        <div className="blog_content">
                          <a
                            href="https://whyworks.tistory.com/"
                            target="_blank"
                            rel="noreferrer"
                            onMouseOver={onMouseOverBlog}
                            onMouseLeave={onMouseLeaveBlog}
                          >
                            whyworks.tistory.com/
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {clickTextShow && <div className="clickMe">Click !</div>}
                  <div onClick={onClickModal}>modal test</div>
                </article>
              </div>
            </div>
          </div>
          <div className="content_2">
            <div className="stage_2-1">
              <div className="content_wrapper">
                <div className="stage_content">
                  <article className="html">
                    <div className="html_header h1 bold">HTML & CSS</div>
                    <div className="html_images">
                      <img src={htmlImg} alt="html5" />
                      <img src={cssImg} alt="css3" />
                      <img src={sassImg} alt="sass" />
                      <img src={bootStrapImg} alt="bootstrap" />
                    </div>
                  </article>
                  <article className="js">
                    <div className="js_header h1 bold">Javascript</div>
                    <div className="js_images">
                      <div>
                        <img src={jsImg} alt="js" />
                        <img src={typeScriptImg} alt="typescript" />
                      </div>
                      <div>
                        <img src={reactImg} alt="react" />
                        <img src={nextJsImg} alt="next_js" />
                      </div>
                      <div>
                        <img src={reduxImg} alt="redux" />
                        <img src={reduxSagaImg} alt="redux_saga" />
                        <img src={reduxToolKitImg} alt="redux_tool_kit" />
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="stage_2-2">
              <div className="content_wrapper">
                <div className="stage_content">
                  <article className="versionControl">
                    <div className="versionControl_header h1 bold">Version Control</div>
                    <div className="versionControl_images">
                      <img src={gitImg} alt="git" />
                      <img src={gitHubImg} alt="git_hub" />
                      <img src={gitLabImg} alt="git_lab" />
                    </div>
                  </article>
                  <article className="communication">
                    <div className="communication_header h1 bold">Communication</div>
                    <div className="communication_images">
                      <img src={slackImg} alt="slack" />
                      <img src={jiraImg} alt="jira" />
                      <img src={confluenceImg} alt="confluence" />
                      <img src={zeplinImg} alt="zeplin" />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div className="content_3">
            <div className="stage_3-1">
              <div className="content_wrapper">
                <div className="media_wrapper" onClick={onClickVideo} data-contents="pocariVideo">
                  <div className="video_wrapper">
                    <video controls={false} width="500px" height="auto" muted autoPlay loop>
                      <source src={pocariVideo} type="video/mp4" />
                    </video>
                  </div>
                  <div className="images_wrapper">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                  </div>
                </div>
                <article className="pocari">
                  <section>
                    <h2>
                      <span>Pocari Sweat Blueup</span>
                    </h2>
                    <p>
                      2021년 5월 17일부터 3개월 반동안 진행된 포카리스웨트 블루업 프로젝트 프로모션
                      페이지 회원가입과 로그인파트를 맡았는데 회원가입 파트에서는 정규식을 더
                      공부하는 계기가 되었고, 로그인에서는 자체 로그인 외에 카카오, 네이버등의
                      로그인도 제공하면서 third party api 에 더 익숙해지게 되었습니다. 또한 아직
                      리액트와 상태관리에 익숙하지 않았던 시기라 훅스 state 의 비동기성, 리덕스와
                      리덕스사가의 ducks 패턴과 다른 패턴들과의 편리성 비교 등을 해볼수 있었습니다.
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
            <div className="stage_3-2">
              <div className="content_wrapper">
                <div className="video_wrapper" onClick={onClickVideo} data-contents="coupangVideo">
                  <video controls={false} width="500px" height="auto" muted autoPlay loop>
                    <source src={coupangVideo} type="video/mp4" />
                  </video>
                </div>
                <article className="coupang">
                  <section>
                    <h2>
                      <span>Coupang Recruite Lounge admin</span>
                    </h2>
                    <p>
                      쿠팡 채용 관리 어드민 사이트. <br /> nextjs 를 처음 접하게 되면서 client side
                      rendering 과 server side rendering 의 차이점, 장단점 등을 잘 이해할 수
                      있었습니다. 다국어를 지원하는 사이트라서 i18n 을 적용 하였고, 각 나라의 시간이
                      달라 맞추는 과정에서 서버의 UTC 시간을 이용하도록 하였습니다.
                    </p>
                  </section>
                  <section>
                    <div className="part">
                      <div className="svg_wrapper">
                        <img src={cornerImg} alt="corner_icon" />
                      </div>
                      <h3>part : </h3>
                      <p>&nbsp;어드민 페이지 로직(퍼블리싱 제외)</p>
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
                      <h3>작업기간 : </h3>
                      <p>&nbsp;2021-05-25 ~ 2021-07-20</p>
                    </div>
                  </section>
                </article>
              </div>
            </div>
            <div className="stage_3-3">
              <div className="content_wrapper">
                <div className="video_wrapper" onClick={onClickVideo} data-contents="xtlv1Video">
                  <video controls={false} width="500px" height="auto" muted autoPlay loop>
                    <source src={xtlv1Video} type="video/mp4" />
                  </video>
                </div>
                <article className="4xtl_v1">
                  <section>
                    <h2>
                      <span>이벤트 관리 사이트 - 4xtl.com v1</span>
                    </h2>
                    <p>
                      자체 서비스인 이벤트 관리 사이트의 첫번째 버전. 이벤트, 회사, 회사내의 팀,
                      팀원 관리, 스폰서 관리 등의 기능이 있는 사이트 게시판, 모달, 페이지네이션,
                      이미지 드래그앤드랍 등의 기능, aws ec2 배포등을 혼자서 책임지고
                      개발하였습니다.
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
                      <h3>작업기간 : </h3>
                      <p>&nbsp;2021-09-16 ~ 2022-05-11</p>
                    </div>
                  </section>
                </article>
              </div>
            </div>
            <div className="stage_3-4">
              <div className="content_wrapper">
                <div className="video_wrapper" onClick={onClickVideo} data-contents="xtlAdminVideo">
                  <video controls={false} width="500px" height="auto" muted autoPlay loop>
                    <source src={xtlAdminVideo} type="video/mp4" />
                  </video>
                </div>
                <article className="4xtl_admin">
                  <section>
                    <h2>
                      <span>이벤트 관리 사이트 어드민 - 4xtl.com admin</span>
                    </h2>
                    <p>
                      4xtl.com v1 에서 등록한 회원, 회사 관리, 웹빌더에서 쓰일 컴포넌트와 구성요소의
                      등록,수정 메일, 문자메시지 보내기 등의 기능이 있는 어드민 사이트를
                      제작하였습니다.
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
            <div className="stage_3-5">
              <div className="content_wrapper">
                <div className="video_wrapper" onClick={onClickVideo} data-contents="xtlv2Video">
                  <video controls={false} width="500px" height="auto" muted autoPlay loop>
                    <source src={xtlv2Video} type="video/mp4" />
                  </video>
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
                      <div className="duration">
                        <div className="svg_wrapper">
                          <img src={cornerImg} alt="corner_icon" />
                        </div>
                        <h3>작업기간 : </h3>
                        <p>&nbsp;2022-06-15 ~ 2022-10-25</p>
                      </div>
                    </div>
                  </section>
                </article>
              </div>
            </div>
            <div className="stage_3-6">
              <div className="content_wrapper">
                <div className="video_wrapper" onClick={onClickVideo} data-contents="webinarVideo">
                  <video controls={false} width="500px" height="auto" muted autoPlay loop>
                    <source src={webinarVideo} type="video/mp4" />
                  </video>
                </div>
                <article className="4xtl_admin">
                  <section>
                    <h2>
                      <span>웨비나 플랫폼 - webinar</span>
                    </h2>
                    <p>
                      자체서비스로 개발한 웨비나 플랫폼. 웹소켓으로 웨비나 관리 플랫폼인 콘솔,
                      서버와 통신하며 유저들에게 스트리밍, 채팅, 투표, 퀴즈, 설문조사 등의 경험을
                      실시간으로 제공하는 사이트입니다. url 상에 유효한 티켓을 들고 오는 경우에만
                      접속이 가능하도록 설계하였고 리다이렉트를 통해 티켓이 노출되어 같은 티켓으로
                      접속하는 일이 없도록 하였습니다. api 요청으로 받아온 값과 웹소켓으로 받고
                      보내는 값을 동일하게 맞추어 통일성, 확장성에도 신경을 쓰며 개발하였습니다.
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
          </div>
          <div className="content_4" ref={divRef}>
            <div className="stage_4-1">
              <div className="content_wrapper">
                <div>stage_4-1 공부는 어떻게 해왔나요?</div>
              </div>
            </div>
            <div className="stage_4-2">
              <div className="content_wrapper">
                <div>stage_4-2</div>
              </div>
            </div>
            <div className="stage_4-3">
              <div className="content_wrapper">
                <div>stage_4-3</div>
              </div>
            </div>
          </div>
          <div className="content_5">앞으로는 어떤 걸 공부하고 싶나요?</div>
        </div>
        <ModalComponent
          open={modalOpen}
          target={modalTarget}
          contents={modalContents}
          setModalOpen={setModalOpen}
          modalOpenRef={modalOpenRef}
        />
      </div>
    </div>
  );
}

export default App;
