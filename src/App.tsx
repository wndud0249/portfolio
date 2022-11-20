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
import gitHubImg from './css/images/github.png';
import gitLabImg from './css/images/gitlab.png';
import postManImg from './css/images/postman.png';
import slackImg from './css/images/slack.png';
import confluenceImg from './css/images/confluence.svg';
import jiraImg from './css/images/jira.svg';
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
import coupangImg1 from './css/images/coupang/coupang1.png';
import coupangImg2 from './css/images/coupang/coupang2.png';
import coupangImg3 from './css/images/coupang/coupang3.png';
import coupangImg4 from './css/images/coupang/coupang4.png';
import coupangImg5 from './css/images/coupang/coupang5.png';
import coupangImg6 from './css/images/coupang/coupang6.png';
import xtlv1Img1 from './css/images/xtlv1/xtlv1_1.png';
import xtlv1Img2 from './css/images/xtlv1/xtlv1_2.png';
import xtlv1Img3 from './css/images/xtlv1/xtlv1_3.png';
import xtlv1Img4 from './css/images/xtlv1/xtlv1_4.png';
import xtlv1Img5 from './css/images/xtlv1/xtlv1_5.png';
import xtlv1Img6 from './css/images/xtlv1/xtlv1_6.png';
import xtlAdminImg1 from './css/images/xtlAdmin/admin1.png';
import xtlAdminImg2 from './css/images/xtlAdmin/admin2.png';
import xtlAdminImg3 from './css/images/xtlAdmin/admin3.png';
import xtlAdminImg4 from './css/images/xtlAdmin/admin4.png';
import xtlAdminImg5 from './css/images/xtlAdmin/admin5.png';
import xtlAdminImg6 from './css/images/xtlAdmin/admin6.png';
import xtlv2Img1 from './css/images/xtlv2/xtlv2_1.png';
import xtlv2Img2 from './css/images/xtlv2/xtlv2_2.png';
import xtlv2Img3 from './css/images/xtlv2/xtlv2_3.png';
import xtlv2Img4 from './css/images/xtlv2/xtlv2_4.png';
import xtlv2Img5 from './css/images/xtlv2/xtlv2_5.png';
import xtlv2Img6 from './css/images/xtlv2/xtlv2_6.png';
import webinarImg1 from './css/images/webinar/webinar1.png';
import webinarImg2 from './css/images/webinar/webinar2.png';
import webinarImg3 from './css/images/webinar/webinar3.png';
import webinarImg4 from './css/images/webinar/webinar4.png';
import webinarImg5 from './css/images/webinar/webinar5.png';
import webinarImg6 from './css/images/webinar/webinar6.png';
import js1gradeBookImg from './css/images/books/js1grade.png';
import django1BookImg from './css/images/books/django1.png';
import django2BookImg from './css/images/books/django2.png';
import modernJsBookImg from './css/images/books/modernjs.png';
import perfectJsBookImg from './css/images/books/perfectjs.png';
import reactBookImg from './css/images/books/reactBook.png';
import itBookImg from './css/images/books/it.png';
import yalcoBookImg from './css/images/books/yalco.png';
import computerBookImg from './css/images/books/computer.png';
import jsTutorialImg from './css/images/books/jstutorial.png';
import sangcoImg from './css/images/books/sangco.png';
import fastCampusImg from './css/images/books/fastcampus.png';
import dreamCodingImg from './css/images/books/dream.png';
import codingAppleImg from './css/images/books/apple.png';
import doItBookImg from './css/images/books/doit.png';

function App() {
  const [focusedStage, setFocusedStage] = useState('');
  const [letterTobeDel, setLetterTobeDel] = useState<string[]>([]);
  const [clickTextShow, setClickTextShow] = useState(false);
  const [typingColor, setTypingColor] = useState('white');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTarget, setModalTarget] = useState('');
  const [modalContents, setModalContents] = useState('');
  const [bigImageSrc, setBigImageSrc] = useState('');
  const [focusedBookTitle, setFocusedBookTitle] = useState('');
  const letterArr = useRef<string[]>();
  const stageData = useRef(focusedStage);
  const modalOpenRef = useRef(modalOpen);
  const divRef = useRef<HTMLDivElement>(null);
  const onContent4 = useOnScreen(divRef);

  function functionToCall(e: any) {
    if (modalOpenRef.current) return;
    const stagePoint = parseInt(
      stageData.current.split('_')[1].split('-')[0] + stageData.current.split('_')[1].split('-')[1]
    );

    if (e.deltaY < 0) {
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

  const onClickHeaderMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!e?.currentTarget?.dataset?.menu) return;
    setFocusedStage(`${e.currentTarget.dataset.menu}`);
  };

  /* 타이핑 */

  let typingTimeOut: ReturnType<typeof setTimeout>;

  const typingSpeed = 70;
  const deletingSpeed = 30;

  const typing = async () => {
    if (!focusedStage) return;

    const $text = document.querySelector('.typing');
    const letterObjs = [
      { stageName: 'stage_1-1', text: `hello, I'm Frontend Developer Juyoung`, color: 'white' },
      { stageName: 'stage_2-1', text: 'SKILL - Develop', color: 'black' },
      { stageName: 'stage_2-2', text: 'SKILL - Others', color: 'black' },
      { stageName: 'stage_3-1', text: 'PROJECT - Pocari Blueup', color: 'white' },
      { stageName: 'stage_3-2', text: 'PROJECT - Coupang Recruite', color: 'white' },
      { stageName: 'stage_3-3', text: 'PROJECT - 4xtl.com V1', color: 'white' },
      { stageName: 'stage_3-4', text: 'PROJECT - 4xtl.com Admin', color: 'white' },
      { stageName: 'stage_3-5', text: 'PROJECT - 4xtl.com V2', color: 'white' },
      { stageName: 'stage_3-6', text: 'PROJECT - Webinar', color: 'white' },
      { stageName: 'stage_4-1', text: 'STUDIED - In 2020', color: 'black' },
      { stageName: 'stage_4-2', text: 'STUDIED - In 2021', color: 'black' },
      { stageName: 'stage_4-3', text: 'STUDIED - In 2022', color: 'black' },
      { stageName: 'stage_5-1', text: 'CAREER', color: 'white' },
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

  const onClickVideo = (e: React.MouseEvent<HTMLDivElement>) => {
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

  const onMouseOverImage = (e: React.MouseEvent<HTMLDivElement>) => {
    // e.currentTarget === div.image_wrapper , e.target === image
    if (e.target instanceof HTMLImageElement) {
      setBigImageSrc(e.target.src);
    }
  };

  const onMouseLeaveImage = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLImageElement) {
      setBigImageSrc('');
    }
  };

  const onMouseOverBookTitle = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!e?.currentTarget?.dataset?.bookTitle) return;
    setFocusedBookTitle(e.currentTarget.dataset.bookTitle);
  };
  const onMouseLeaveBookTitle = () => {
    setFocusedBookTitle('');
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      setFocusedStage('stage_1-1');
    });
  }, []);

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
                  SKILLS
                </div>
                <div className="other_menu_item" onClick={onClickHeaderMenu} data-menu="stage_3-1">
                  PROJECTS
                </div>
                <div className="other_menu_item" onClick={onClickHeaderMenu} data-menu="stage_4-1">
                  STUDIED
                </div>
                <div className="other_menu_item" onClick={onClickHeaderMenu} data-menu="stage_5-1">
                  CAREER
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="typing" style={{ color: typingColor }}></div>

        <div className="contents">
          <div className="content_1">
            <div className="stage_1-1">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
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
                      <div>
                        <img src={gitImg} alt="git" />
                      </div>
                      <div>
                        <img src={gitHubImg} alt="git_hub" />
                        <img src={gitLabImg} alt="git_lab" />
                      </div>
                    </div>
                  </article>
                  <article className="communication">
                    <div className="communication_header h1 bold">Communication</div>
                    <div className="communication_images">
                      <div>
                        <img src={slackImg} alt="slack" />
                        <img src={zeplinImg} alt="zeplin" />
                      </div>
                      <div>
                        <img src={jiraImg} alt="jira" />
                        <img src={confluenceImg} alt="confluence" />
                      </div>
                      <div>
                        <img src={postManImg} alt="postMan" />
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div className="content_3">
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
                <div className="media_wrapper">
                  <div
                    className="video_wrapper"
                    onClick={onClickVideo}
                    data-contents="coupangVideo"
                  >
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
                <div className="media_wrapper">
                  <div
                    className="video_wrapper"
                    onClick={onClickVideo}
                    data-contents="xtlAdminVideo"
                  >
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
            <div className="stage_3-6">
              <div className="content_wrapper">
                <div className="media_wrapper">
                  <div
                    className="video_wrapper"
                    onClick={onClickVideo}
                    data-contents="webinarVideo"
                  >
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
                <div className="time_line_header">
                  <div className="time_line_year">2020</div>
                  <div className="time_line_month">JAN</div>
                  <div className="time_line_month">FEB</div>
                  <div className="time_line_month">MAR</div>
                  <div className="time_line_month">APR</div>
                  <div className="time_line_month">MAY</div>
                  <div className="time_line_month">JUN</div>
                  <div className="time_line_month">JUL</div>
                  <div className="time_line_month">AUG</div>
                  <div className="time_line_month">SEP</div>
                  <div className="time_line_month">OCT</div>
                  <div className="time_line_month">NOV</div>
                  <div className="time_line_month">DEC</div>
                </div>

                <div
                  className={
                    focusedBookTitle === 'js1Grade' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="js1Grade"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000000559859"
                      title={'교보문고 - 자바스크립트 1학년'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={js1gradeBookImg} alt="자바스크립트 1학년" />
                      <span>Javascript 1학년</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-1'
                          ? 'time_line_item on js1Grade'
                          : 'time_line_item js1Grade'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'django' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="django"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000001057711"
                      title={'교보문고 - django를 활용한 쉽고 빠른 웹개발 파이썬 웹프로그래밍'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={django1BookImg}
                        alt="django를 활용한 쉽고 빠른 웹개발 파이썬 웹프로그래밍"
                      />
                      <img
                        src={django2BookImg}
                        alt="django를 활용한 쉽고 빠른 웹개발 파이썬 웹프로그래밍"
                      />
                      <span>django를 활용한 쉽고 빠른 웹개발 파이썬 웹프로그래밍</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-1'
                          ? 'time_line_item on django'
                          : 'time_line_item django'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'doIt' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="doIt"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000001817926"
                      title={'교보문고 - Do it! 웹 프로그래밍을 위한 자바스크립트 기본 편'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={doItBookImg}
                        alt="Do it! 웹 프로그래밍을 위한 자바스크립트 기본 편"
                      />
                      <span>Do it! 웹 프로그래밍을 위한 자바스크립트 기본 편</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-1'
                          ? 'time_line_item on doIt'
                          : 'time_line_item doIt'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000001766445"
                      title={'교보문고 - 모던자바스크립트 Deep Dive'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={modernJsBookImg} alt="모던자바스크립트 Deep Dive" />
                      <span>모던자바스크립트 Deep Dive</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on deepDive'
                          : 'time_line_item deepDive'
                      }
                    ></div>
                  </div>
                </div>

                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000001792882"
                      title={'교보문고 - 리액트를 다루는 기술'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={reactBookImg} alt="리액트를 다루는 기술" />
                      <span>리액트를 다루는 기술</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on reactSkill'
                          : 'time_line_item reactSkill'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://ko.reactjs.org/tutorial/tutorial.html"
                      title={'react 공식문서'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={reactImg} alt="react 공식문서" />
                      <span>react 공식문서</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on react'
                          : 'time_line_item react'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://nextjs.org/docs/getting-started"
                      title={'nextJs 공식문서'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={nextJsImg} alt="nextjs 공식문서" />
                      <span>nextjs 공식문서</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on nextJs'
                          : 'time_line_item nextJs'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000061352646"
                      title={'교보문고 - 개발자가 되기 위해 꼭 알아야 하는 IT 용어'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={itBookImg} alt="개발자가 되기 위해 꼭 알아야 하는 IT 용어" />
                      <span>개발자가 되기 위해 꼭 알아야 하는 IT 용어</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3' ? 'time_line_item on it' : 'time_line_item it'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000061352343"
                      title={'교보문고 - 혼자 공부하는 얄팍한 코딩 지식'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={yalcoBookImg} alt="혼자 공부하는 얄팍한 코딩 지식" />
                      <span>혼자 공부하는 얄팍한 코딩 지식</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3'
                          ? 'time_line_item on yalco'
                          : 'time_line_item yalco'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000001033131"
                      title={'교보문고 - 자바스크립트 완벽 가이드'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={perfectJsBookImg} alt="자바스크립트 완벽 가이드" />
                      <span>자바스크립트 완벽 가이드</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3'
                          ? 'time_line_item on perfectJs'
                          : 'time_line_item perfectJs'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000001033084"
                      title={'교보문고 - 그래서 컴퓨터는 어떻게 동작하나요?'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={computerBookImg} alt="그래서 컴퓨터는 어떻게 동작하나요?" />
                      <span>그래서 컴퓨터는 어떻게 동작하나요?</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3'
                          ? 'time_line_item on computer'
                          : 'time_line_item computer'
                      }
                    ></div>
                  </div>
                </div>

                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://ko.javascript.info/"
                      title={'웹문서 - 모던 javascript 튜토리얼'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={jsTutorialImg} alt="웹문서 - 모던 javascript 튜토리얼" />
                      <span>웹문서 - 모던 javascript 튜토리얼</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3'
                          ? 'time_line_item on modern'
                          : 'time_line_item modern'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'lifeHtmlCss' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="lifeHtmlCss"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://opentutorials.org/course/3084"
                      title={'생활코딩 - HTML & Internet'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={sangcoImg} alt="생활코딩 - html/css" />
                      <span>생활코딩 - html/css</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-1'
                          ? 'time_line_item on lifeHtmlCss'
                          : 'time_line_item lifeHtmlCss'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'lifeJs' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="lifeJs"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://opentutorials.org/course/3085"
                      title={'생활코딩 - JavaScript'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={sangcoImg} alt="생활코딩 - js" />
                      <span>생활코딩 - js</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-1'
                          ? 'time_line_item on lifeJs'
                          : 'time_line_item lifeJs'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'lifeGit' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="lifeGit"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://opentutorials.org/course/3837"
                      title={'생활코딩 - git1'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={sangcoImg} alt="생활코딩 - git" />
                      <span>생활코딩 - git</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-1'
                          ? 'time_line_item on lifeGit'
                          : 'time_line_item lifeGit'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://fastcampus.co.kr/dev_online_frontend"
                      title={'패스트캠퍼스 - 한번에 끝내는 프론트엔드 개발 초격차 패키지'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={fastCampusImg}
                        alt="패캠 - 한번에 끝내는 프론트엔드 개발 초격차 패키지"
                      />
                      <span>패캠 - 한번에 끝내는 프론트엔드 개발 초격차 패키지</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on fastCampus'
                          : 'time_line_item fastCampus'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://codingapple.com/course/html-basics/"
                      title={'코딩애플 - html/css'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={codingAppleImg} alt="코딩애플 - html/css" />
                      <span>코딩애플 - html/css</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on appleHtmlCss'
                          : 'time_line_item appleHtmlCss'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://codingapple.com/course/javascript-jquery-ui/"
                      title={'코딩애플 - javascript & jquery 기초'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={codingAppleImg} alt="코딩애플 - javascript & jquery 기초" />
                      <span>코딩애플 - javascript & jquery 기초</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on appleJquery'
                          : 'time_line_item appleJquery'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://codingapple.com/course/javascript-es6/"
                      title={'코딩애플 - javascript es6'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={codingAppleImg} alt="코딩애플 - javascript es6" />
                      <span>코딩애플 - javascript es6</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on appleJs'
                          : 'time_line_item appleJs'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://codingapple.com/course/node-express-mongodb-server/"
                      title={'코딩애플 - nodejs + mongoDB'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={codingAppleImg} alt="코딩애플 - nodejs + mongoDB" />
                      <span>코딩애플 - nodejs + mongoDB</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on appleNode'
                          : 'time_line_item appleNode'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://codingapple.com/course/react-basic/"
                      title={'코딩애플 - react'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={codingAppleImg} alt="코딩애플 - react" />
                      <span>코딩애플 - react</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on appleReact'
                          : 'time_line_item appleReact'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://codingapple.com/course/typescript-crash-course/"
                      title={'코딩애플 - typescript'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={codingAppleImg} alt="코딩애플 - typescript" />
                      <span>코딩애플 - typescript</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on appleTs'
                          : 'time_line_item appleTs'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://opentutorials.org/course/2598"
                      title={'생활코딩 - 리눅스'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={sangcoImg} alt="생활코딩 - 리눅스" />
                      <span>생활코딩 - 리눅스</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3'
                          ? 'time_line_item on lifeLinux'
                          : 'time_line_item lifeLinux'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://academy.dream-coding.com/courses/git"
                      title={'드림코딩 - 깃 마스터과정'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={dreamCodingImg} alt="드림코딩 - 깃 마스터과정" />
                      <span>드림코딩 - 깃 마스터과정</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3'
                          ? 'time_line_item on dreamGit'
                          : 'time_line_item dreamGit'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://academy.dream-coding.com/courses/browser101"
                      title={'드림코딩 - 프론트엔드 필수 브라우저 101'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={dreamCodingImg} alt="드림코딩 - 프론트엔드 필수 브라우저 101" />
                      <span>드림코딩 - 프론트엔드 필수 브라우저 101</span>
                    </a>
                  </div>

                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3'
                          ? 'time_line_item on dreamBrowser'
                          : 'time_line_item dreamBrowser'
                      }
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="stage_4-2">
              <div className="content_wrapper">
                <div className="time_line_header">
                  <div className="time_line_year">2021</div>
                  <div className="time_line_month">JAN</div>
                  <div className="time_line_month">FEB</div>
                  <div className="time_line_month">MAR</div>
                  <div className="time_line_month">APR</div>
                  <div className="time_line_month">MAY</div>
                  <div className="time_line_month">JUN</div>
                  <div className="time_line_month">JUL</div>
                  <div className="time_line_month">AUG</div>
                  <div className="time_line_month">SEP</div>
                  <div className="time_line_month">OCT</div>
                  <div className="time_line_month">NOV</div>
                  <div className="time_line_month">DEC</div>
                </div>

                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000000559859"
                      title={'교보문고 - 자바스크립트 1학년'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={js1gradeBookImg} alt="자바스크립트 1학년" />
                      <span>Javascript 1학년</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-1'
                          ? 'time_line_item on js1Grade'
                          : 'time_line_item js1Grade'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'django' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="django"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000001057711"
                      title={'교보문고 - django를 활용한 쉽고 빠른 웹개발 파이썬 웹프로그래밍'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={django1BookImg}
                        alt="django를 활용한 쉽고 빠른 웹개발 파이썬 웹프로그래밍"
                      />
                      <img
                        src={django2BookImg}
                        alt="django를 활용한 쉽고 빠른 웹개발 파이썬 웹프로그래밍"
                      />
                      <span>django를 활용한 쉽고 빠른 웹개발 파이썬 웹프로그래밍</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on django'
                          : 'time_line_item django'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'doIt' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="doIt"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000001817926"
                      title={'교보문고 - Do it! 웹 프로그래밍을 위한 자바스크립트 기본 편'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={doItBookImg}
                        alt="Do it! 웹 프로그래밍을 위한 자바스크립트 기본 편"
                      />
                      <span>Do it! 웹 프로그래밍을 위한 자바스크립트 기본 편</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on doIt'
                          : 'time_line_item doIt'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'deepDive' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="deepDive"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000001766445"
                      title={'교보문고 - 모던자바스크립트 Deep Dive'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={modernJsBookImg} alt="모던자바스크립트 Deep Dive" />
                      <span>모던자바스크립트 Deep Dive</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on deepDive'
                          : 'time_line_item deepDive'
                      }
                    ></div>
                  </div>
                </div>

                <div
                  className={
                    focusedBookTitle === 'reactSkill' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="reactSkill"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000001792882"
                      title={'교보문고 - 리액트를 다루는 기술'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={reactBookImg} alt="리액트를 다루는 기술" />
                      <span>리액트를 다루는 기술</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on reactSkill'
                          : 'time_line_item reactSkill'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'react' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="react"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://ko.reactjs.org/tutorial/tutorial.html"
                      title={'react 공식문서'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={reactImg} alt="react 공식문서" />
                      <span>react 공식문서</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on react'
                          : 'time_line_item react'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'nextJs' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="nextJs"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://nextjs.org/docs/getting-started"
                      title={'nextJs 공식문서'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={nextJsImg} alt="nextjs 공식문서" />
                      <span>nextjs 공식문서</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on nextJs'
                          : 'time_line_item nextJs'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000061352646"
                      title={'교보문고 - 개발자가 되기 위해 꼭 알아야 하는 IT 용어'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={itBookImg} alt="개발자가 되기 위해 꼭 알아야 하는 IT 용어" />
                      <span>개발자가 되기 위해 꼭 알아야 하는 IT 용어</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3' ? 'time_line_item on it' : 'time_line_item it'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000061352343"
                      title={'교보문고 - 혼자 공부하는 얄팍한 코딩 지식'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={yalcoBookImg} alt="혼자 공부하는 얄팍한 코딩 지식" />
                      <span>혼자 공부하는 얄팍한 코딩 지식</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3'
                          ? 'time_line_item on yalco'
                          : 'time_line_item yalco'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000001033131"
                      title={'교보문고 - 자바스크립트 완벽 가이드'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={perfectJsBookImg} alt="자바스크립트 완벽 가이드" />
                      <span>자바스크립트 완벽 가이드</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3'
                          ? 'time_line_item on perfectJs'
                          : 'time_line_item perfectJs'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000001033084"
                      title={'교보문고 - 그래서 컴퓨터는 어떻게 동작하나요?'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={computerBookImg} alt="그래서 컴퓨터는 어떻게 동작하나요?" />
                      <span>그래서 컴퓨터는 어떻게 동작하나요?</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3'
                          ? 'time_line_item on computer'
                          : 'time_line_item computer'
                      }
                    ></div>
                  </div>
                </div>

                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://ko.javascript.info/"
                      title={'웹문서 - 모던 javascript 튜토리얼'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={jsTutorialImg} alt="웹문서 - 모던 javascript 튜토리얼" />
                      <span>웹문서 - 모던 javascript 튜토리얼</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3'
                          ? 'time_line_item on modern'
                          : 'time_line_item modern'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://opentutorials.org/course/3084"
                      title={'생활코딩 - HTML & Internet'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={sangcoImg} alt="생활코딩 - html/css" />
                      <span>생활코딩 - html/css</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-1'
                          ? 'time_line_item on lifeHtmlCss'
                          : 'time_line_item lifeHtmlCss'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://opentutorials.org/course/3085"
                      title={'생활코딩 - JavaScript'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={sangcoImg} alt="생활코딩 - js" />
                      <span>생활코딩 - js</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-1'
                          ? 'time_line_item on lifeJs'
                          : 'time_line_item lifeJs'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://opentutorials.org/course/3837"
                      title={'생활코딩 - git1'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={sangcoImg} alt="생활코딩 - git" />
                      <span>생활코딩 - git</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-1'
                          ? 'time_line_item on lifeGit'
                          : 'time_line_item lifeGit'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'fastCampus' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="fastCampus"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://fastcampus.co.kr/dev_online_frontend"
                      title={'패스트캠퍼스 - 한번에 끝내는 프론트엔드 개발 초격차 패키지'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={fastCampusImg}
                        alt="패캠 - 한번에 끝내는 프론트엔드 개발 초격차 패키지"
                      />
                      <span>패캠 - 한번에 끝내는 프론트엔드 개발 초격차 패키지</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on fastCampus'
                          : 'time_line_item fastCampus'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'appleHtmlCss'
                      ? 'time_line_list focused'
                      : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="appleHtmlCss"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://codingapple.com/course/html-basics/"
                      title={'코딩애플 - html/css'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={codingAppleImg} alt="코딩애플 - html/css" />
                      <span>코딩애플 - html/css</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on appleHtmlCss'
                          : 'time_line_item appleHtmlCss'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'appleJquery' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="appleJquery"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://codingapple.com/course/javascript-jquery-ui/"
                      title={'코딩애플 - javascript & jquery 기초'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={codingAppleImg} alt="코딩애플 - javascript & jquery 기초" />
                      <span>코딩애플 - javascript & jquery 기초</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on appleJquery'
                          : 'time_line_item appleJquery'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'appleJs' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="appleJs"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://codingapple.com/course/javascript-es6/"
                      title={'코딩애플 - javascript es6'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={codingAppleImg} alt="코딩애플 - javascript es6" />
                      <span>코딩애플 - javascript es6</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on appleJs'
                          : 'time_line_item appleJs'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'appleNode' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="appleNode"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://codingapple.com/course/node-express-mongodb-server/"
                      title={'코딩애플 - nodejs + mongoDB'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={codingAppleImg} alt="코딩애플 - nodejs + mongoDB" />
                      <span>코딩애플 - nodejs + mongoDB</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on appleNode'
                          : 'time_line_item appleNode'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'appleReact' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="appleReact"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://codingapple.com/course/react-basic/"
                      title={'코딩애플 - react'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={codingAppleImg} alt="코딩애플 - react" />
                      <span>코딩애플 - react</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on appleReact'
                          : 'time_line_item appleReact'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'appleTs' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="appleTs"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://codingapple.com/course/typescript-crash-course/"
                      title={'코딩애플 - typescript'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={codingAppleImg} alt="코딩애플 - typescript" />
                      <span>코딩애플 - typescript</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on appleTs'
                          : 'time_line_item appleTs'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://opentutorials.org/course/2598"
                      title={'생활코딩 - 리눅스'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={sangcoImg} alt="생활코딩 - 리눅스" />
                      <span>생활코딩 - 리눅스</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3'
                          ? 'time_line_item on lifeLinux'
                          : 'time_line_item lifeLinux'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://academy.dream-coding.com/courses/git"
                      title={'드림코딩 - 깃 마스터과정'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={dreamCodingImg} alt="드림코딩 - 깃 마스터과정" />
                      <span>드림코딩 - 깃 마스터과정</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3'
                          ? 'time_line_item on dreamGit'
                          : 'time_line_item dreamGit'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://academy.dream-coding.com/courses/browser101"
                      title={'드림코딩 - 프론트엔드 필수 브라우저 101'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={dreamCodingImg} alt="드림코딩 - 프론트엔드 필수 브라우저 101" />
                      <span>드림코딩 - 프론트엔드 필수 브라우저 101</span>
                    </a>
                  </div>

                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3'
                          ? 'time_line_item on dreamBrowser'
                          : 'time_line_item dreamBrowser'
                      }
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="stage_4-3">
              <div className="content_wrapper">
                <div className="time_line_header">
                  <div className="time_line_year">2021</div>
                  <div className="time_line_month">JAN</div>
                  <div className="time_line_month">FEB</div>
                  <div className="time_line_month">MAR</div>
                  <div className="time_line_month">APR</div>
                  <div className="time_line_month">MAY</div>
                  <div className="time_line_month">JUN</div>
                  <div className="time_line_month">JUL</div>
                  <div className="time_line_month">AUG</div>
                  <div className="time_line_month">SEP</div>
                  <div className="time_line_month">OCT</div>
                  <div className="time_line_month">NOV</div>
                  <div className="time_line_month">DEC</div>
                </div>

                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000000559859"
                      title={'교보문고 - 자바스크립트 1학년'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={js1gradeBookImg} alt="자바스크립트 1학년" />
                      <span>Javascript 1학년</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-1'
                          ? 'time_line_item on js1Grade'
                          : 'time_line_item js1Grade'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000001057711"
                      title={'교보문고 - django를 활용한 쉽고 빠른 웹개발 파이썬 웹프로그래밍'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={django1BookImg}
                        alt="django를 활용한 쉽고 빠른 웹개발 파이썬 웹프로그래밍"
                      />
                      <img
                        src={django2BookImg}
                        alt="django를 활용한 쉽고 빠른 웹개발 파이썬 웹프로그래밍"
                      />
                      <span>django를 활용한 쉽고 빠른 웹개발 파이썬 웹프로그래밍</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-1'
                          ? 'time_line_item on django'
                          : 'time_line_item django'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000001817926"
                      title={'교보문고 - Do it! 웹 프로그래밍을 위한 자바스크립트 기본 편'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={doItBookImg}
                        alt="Do it! 웹 프로그래밍을 위한 자바스크립트 기본 편"
                      />
                      <span>Do it! 웹 프로그래밍을 위한 자바스크립트 기본 편</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-1'
                          ? 'time_line_item on doIt'
                          : 'time_line_item doIt'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000001766445"
                      title={'교보문고 - 모던자바스크립트 Deep Dive'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={modernJsBookImg} alt="모던자바스크립트 Deep Dive" />
                      <span>모던자바스크립트 Deep Dive</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-1'
                          ? 'time_line_item on deepDive'
                          : 'time_line_item deepDive'
                      }
                    ></div>
                  </div>
                </div>

                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000001792882"
                      title={'교보문고 - 리액트를 다루는 기술'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={reactBookImg} alt="리액트를 다루는 기술" />
                      <span>리액트를 다루는 기술</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on reactSkill'
                          : 'time_line_item reactSkill'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://ko.reactjs.org/tutorial/tutorial.html"
                      title={'react 공식문서'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={reactImg} alt="react 공식문서" />
                      <span>react 공식문서</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on react'
                          : 'time_line_item react'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://nextjs.org/docs/getting-started"
                      title={'nextJs 공식문서'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={nextJsImg} alt="nextjs 공식문서" />
                      <span>nextjs 공식문서</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on nextJs'
                          : 'time_line_item nextJs'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'it' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="it"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000061352646"
                      title={'교보문고 - 개발자가 되기 위해 꼭 알아야 하는 IT 용어'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={itBookImg} alt="개발자가 되기 위해 꼭 알아야 하는 IT 용어" />
                      <span>개발자가 되기 위해 꼭 알아야 하는 IT 용어</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3' ? 'time_line_item on it' : 'time_line_item it'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'yalco' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="yalco"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000061352343"
                      title={'교보문고 - 혼자 공부하는 얄팍한 코딩 지식'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={yalcoBookImg} alt="혼자 공부하는 얄팍한 코딩 지식" />
                      <span>혼자 공부하는 얄팍한 코딩 지식</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3'
                          ? 'time_line_item on yalco'
                          : 'time_line_item yalco'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'perfectJs' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="perfectJs"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000001033131"
                      title={'교보문고 - 자바스크립트 완벽 가이드'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={perfectJsBookImg} alt="자바스크립트 완벽 가이드" />
                      <span>자바스크립트 완벽 가이드</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3'
                          ? 'time_line_item on perfectJs'
                          : 'time_line_item perfectJs'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'computer' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="computer"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://product.kyobobook.co.kr/detail/S000001033084"
                      title={'교보문고 - 그래서 컴퓨터는 어떻게 동작하나요?'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={computerBookImg} alt="그래서 컴퓨터는 어떻게 동작하나요?" />
                      <span>그래서 컴퓨터는 어떻게 동작하나요?</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3'
                          ? 'time_line_item on computer'
                          : 'time_line_item computer'
                      }
                    ></div>
                  </div>
                </div>

                <div
                  className={
                    focusedBookTitle === 'modern' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="modern"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://ko.javascript.info/"
                      title={'웹문서 - 모던 javascript 튜토리얼'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={jsTutorialImg} alt="웹문서 - 모던 javascript 튜토리얼" />
                      <span>웹문서 - 모던 javascript 튜토리얼</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3'
                          ? 'time_line_item on modern'
                          : 'time_line_item modern'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://opentutorials.org/course/3084"
                      title={'생활코딩 - HTML & Internet'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={sangcoImg} alt="생활코딩 - html/css" />
                      <span>생활코딩 - html/css</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-1'
                          ? 'time_line_item on lifeHtmlCss'
                          : 'time_line_item lifeHtmlCss'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://opentutorials.org/course/3085"
                      title={'생활코딩 - JavaScript'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={sangcoImg} alt="생활코딩 - js" />
                      <span>생활코딩 - js</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-1'
                          ? 'time_line_item on lifeJs'
                          : 'time_line_item lifeJs'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://opentutorials.org/course/3837"
                      title={'생활코딩 - git1'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={sangcoImg} alt="생활코딩 - git" />
                      <span>생활코딩 - git</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-1'
                          ? 'time_line_item on lifeGit'
                          : 'time_line_item lifeGit'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://fastcampus.co.kr/dev_online_frontend"
                      title={'패스트캠퍼스 - 한번에 끝내는 프론트엔드 개발 초격차 패키지'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={fastCampusImg}
                        alt="패캠 - 한번에 끝내는 프론트엔드 개발 초격차 패키지"
                      />
                      <span>패캠 - 한번에 끝내는 프론트엔드 개발 초격차 패키지</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on fastCampus'
                          : 'time_line_item fastCampus'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://codingapple.com/course/html-basics/"
                      title={'코딩애플 - html/css'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={codingAppleImg} alt="코딩애플 - html/css" />
                      <span>코딩애플 - html/css</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on appleHtmlCss'
                          : 'time_line_item appleHtmlCss'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://codingapple.com/course/javascript-jquery-ui/"
                      title={'코딩애플 - javascript & jquery 기초'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={codingAppleImg} alt="코딩애플 - javascript & jquery 기초" />
                      <span>코딩애플 - javascript & jquery 기초</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on appleJquery'
                          : 'time_line_item appleJquery'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://codingapple.com/course/javascript-es6/"
                      title={'코딩애플 - javascript es6'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={codingAppleImg} alt="코딩애플 - javascript es6" />
                      <span>코딩애플 - javascript es6</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on appleJs'
                          : 'time_line_item appleJs'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://codingapple.com/course/node-express-mongodb-server/"
                      title={'코딩애플 - nodejs + mongoDB'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={codingAppleImg} alt="코딩애플 - nodejs + mongoDB" />
                      <span>코딩애플 - nodejs + mongoDB</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on appleNode'
                          : 'time_line_item appleNode'
                      }
                    ></div>
                  </div>
                </div>
                <div className="time_line_list">
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://codingapple.com/course/react-basic/"
                      title={'코딩애플 - react'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={codingAppleImg} alt="코딩애플 - react" />
                      <span>코딩애플 - react</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-2'
                          ? 'time_line_item on appleReact'
                          : 'time_line_item appleReact'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'appleTs' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="appleTs"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://codingapple.com/course/typescript-crash-course/"
                      title={'코딩애플 - typescript'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={codingAppleImg} alt="코딩애플 - typescript" />
                      <span>코딩애플 - typescript</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3'
                          ? 'time_line_item on appleTs'
                          : 'time_line_item appleTs'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'lifeLinux' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="lifeLinux"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://opentutorials.org/course/2598"
                      title={'생활코딩 - 리눅스'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={sangcoImg} alt="생활코딩 - 리눅스" />
                      <span>생활코딩 - 리눅스</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3'
                          ? 'time_line_item on lifeLinux'
                          : 'time_line_item lifeLinux'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'dreamGit' ? 'time_line_list focused' : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="dreamGit"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://academy.dream-coding.com/courses/git"
                      title={'드림코딩 - 깃 마스터과정'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={dreamCodingImg} alt="드림코딩 - 깃 마스터과정" />
                      <span>드림코딩 - 깃 마스터과정</span>
                    </a>
                  </div>
                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3'
                          ? 'time_line_item on dreamGit'
                          : 'time_line_item dreamGit'
                      }
                    ></div>
                  </div>
                </div>
                <div
                  className={
                    focusedBookTitle === 'dreamBrowser'
                      ? 'time_line_list focused'
                      : 'time_line_list'
                  }
                  onMouseOver={onMouseOverBookTitle}
                  onMouseLeave={onMouseLeaveBookTitle}
                  data-book-title="dreamBrowser"
                >
                  <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
                    <a
                      href="https://academy.dream-coding.com/courses/browser101"
                      title={'드림코딩 - 프론트엔드 필수 브라우저 101'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={dreamCodingImg} alt="드림코딩 - 프론트엔드 필수 브라우저 101" />
                      <span>드림코딩 - 프론트엔드 필수 브라우저 101</span>
                    </a>
                  </div>

                  <div className="time_line_item_wrapper">
                    <div
                      className={
                        focusedStage === 'stage_4-3'
                          ? 'time_line_item on dreamBrowser'
                          : 'time_line_item dreamBrowser'
                      }
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content_5">
            <div className="stage_5-1">
              <div className="content_wrapper">
                <div className="time_line_wrapper">
                  <div className="line"></div>
                  <div className="line_point_wrapper">
                    <div className="line_point"></div>
                    <article className="almaloco">
                      <section className="title">
                        <h2>
                          <span>Almaloco</span>
                        </h2>
                      </section>
                      <section className="subtitle">
                        <h4>2018.04 ~ 2020.07</h4>
                        <h4>하드웨어 엔지니어</h4>
                      </section>
                      <section className="contents">
                        <ul>
                          <li>
                            정부과제 기계설계
                            <ul>
                              <li>catia, cad를 활용한 기계설계</li>
                              <li>전용 하네스 개발 - 특허출원</li>
                              <li>제작 하청 관리</li>
                              <li>유니티 프로그램과 연결하여 plc 제어</li>
                            </ul>
                          </li>
                          <li>
                            arduino 를 활용한 prototype 설계
                            <ul>
                              <li>unity 연동 자동차 게임</li>
                              <li>광량에 따른 모터제어</li>
                            </ul>
                          </li>
                        </ul>
                      </section>
                    </article>
                  </div>
                  <div className="line_point_wrapper">
                    <div className="line_point"></div>
                    <article className="journey">
                      <section className="title">
                        <h2>
                          <span>Journey</span>
                        </h2>
                      </section>
                      <section className="subtitle">
                        <h4>2020.11 ~ 2021.03</h4>
                        <h4>프론트엔드</h4>
                      </section>
                      <section className="contents">
                        <ul>
                          <li>
                            정부과제 여행사이트 제작
                            <ul>
                              <li>프론트엔드 70% 참여</li>
                              <li>백엔드 20% 참여</li>
                              <li>프론트엔드 - html, css, js, react</li>
                              <li>백엔드 - django</li>
                            </ul>
                          </li>
                        </ul>
                      </section>
                    </article>
                  </div>
                  <div className="line_point_wrapper">
                    <div className="line_point"></div>
                    <article className="fmCommunications">
                      <section className="title">
                        <h2>
                          <span>FmCommunications</span>
                        </h2>
                      </section>
                      <section className="subtitle">
                        <h4>2021.04 ~ 현재</h4>
                        <h4>프론트엔드</h4>
                      </section>
                      <section className="contents">
                        <ul>
                          <li>
                            pocari sweat blueup
                            <ul>
                              <li>프론트엔드 20% 참여</li>
                            </ul>
                          </li>
                          <li>
                            coupnag recruite lounge - admin
                            <ul>
                              <li>프론트엔드 70% 참여</li>
                            </ul>
                          </li>
                          <li>
                            이벤트 관리 사이트 - 4xtl.com v1
                            <ul>
                              <li>프론트엔드 100% 참여</li>
                            </ul>
                          </li>
                          <li>
                            이벤트 관리 사이트 어드민 - 4xtl.com admin
                            <ul>
                              <li>프론트엔드 100% 참여</li>
                            </ul>
                          </li>
                          <li>
                            이벤트 관리 사이트 - 4xtl.com v2
                            <ul>
                              <li>프론트엔드 100% 참여</li>
                            </ul>
                          </li>
                          <li>
                            웨비나 플랫폼 - webinar
                            <ul>
                              <li>프론트엔드 100% 참여</li>
                            </ul>
                          </li>
                        </ul>
                      </section>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
