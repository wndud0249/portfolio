import React, { useEffect, useRef, useState } from 'react';
import './css/reset.scss';
import './css/App.scss';
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

function App() {
  const [focusedStage, setFocusedStage] = useState('');
  const [letterTobeDel, setLetterTobeDel] = useState<string[]>([]);
  const stageData = useRef(focusedStage);

  function functionToCall(e: any) {
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
      } else if (stagePoint === 23) {
        setFocusedStage('stage_3-1');
      } else if (stagePoint === 33) {
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

  const speed = 100;
  // 타이핑 효과
  const typing = async () => {
    if (!focusedStage) return;
    console.log('들어옴');
    console.log(focusedStage);
    const $text = document.querySelector('.typing');
    const letterObjs = [
      { stageName: 'stage_1-1', text: 'hello' },
      { stageName: 'stage_2-1', text: 'Develop' },
      { stageName: 'stage_2-2', text: 'Others' },
    ];
    if (typingTimeOut) clearTimeout(typingTimeOut);
    if ($text instanceof HTMLElement) {
      // const letter = letters[i].split('');
      const letter = letterObjs.filter((obj) => obj.stageName === focusedStage)[0].text.split('');

      setLetterTobeDel(letter);
      while (letter.length) {
        await wait(speed);
        $text.innerHTML += letter.shift();
      }
      // // 잠시 대기
      // await wait(800);
      // // 지우는 효과
      // remove();
    }
  };

  // 글자 지우는 효과
  const remove = async () => {
    const $text = document.querySelector('.typing');
    if ($text instanceof HTMLElement) {
      const letter = letterTobeDel;
      while (letter.length) {
        await wait(speed);
        letter.pop();
        $text.innerHTML = letter.join('');
      }
      console.log(letterTobeDel);
      // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
      // i = !letterObjs[i + 1] ? 0 : i + 1;
      typing();
    }
  };

  // 딜레이 기능 ( 마이크로초 )
  function wait(ms: number) {
    return new Promise((res) => setTimeout(res, ms));
  }

  useEffect(() => {
    if (!focusedStage) return;
    if (typingTimeOut) clearTimeout(typingTimeOut);

    // 초기 실행
    remove();
    typingTimeOut = setTimeout(typing, 1500);
    return () => {
      clearTimeout(typingTimeOut);
    };
  }, [focusedStage]);

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
        <div className="typing">FrontEnd Developer, ju young's portfolio</div>

        <div className="contents">
          <div className="content_1">
            <div className="stage_1-1">
              <div className="content_wrapper">
                <article className="title_about">
                  <div className="about_first">
                    <div className="name">
                      <div className="name_icon">이름</div>
                      <div className="name_content">ㅁㄴㅇㄹ</div>
                    </div>
                    <div className="birth">
                      <div className="birth_icon">birth</div>
                      <div className="birth_content">2022-22-22</div>
                    </div>
                    <div className="addr">
                      <div className="addr_icon">address</div>
                      <div className="addr_content">seoul</div>
                    </div>
                  </div>
                  <div className="about_second">
                    <div className="phone">
                      <div className="phone_icon">mobile</div>
                      <div className="phone_content">010-2345-4104</div>
                    </div>
                    <div className="email">
                      <div className="email_icon">E-mail</div>
                      <div className="email_content">wndud0249@naver.com</div>
                    </div>
                    <div className="blog">
                      <div className="blog_icon">blog</div>
                      <div className="blog_content">blog address</div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="content_2">
            <div className="stage_2-1">
              <div className="content_wrapper">
                {/* <div className="title">무엇을 할 수 있나요?</div> */}
                <div className="stage_header h1 bold">SKILLS - develop</div>
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
                <div className="stage_header h1 bold">SKILLS - others</div>
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
            <div className="stage_2-3">
              <div className="content_wrapper">
                <div>stage_2-3</div>
              </div>
            </div>
          </div>
          <div className="content_3">
            <div className="stage_3-1">
              <div className="content_wrapper">
                {/* <div className="title">무엇을 할 수 있나요?</div> */}
                <div>stage_3-1 무엇을 해보았나요?</div>
              </div>
            </div>
            <div className="stage_3-2">
              <div className="content_wrapper">
                <div>stage_3-2</div>
              </div>
            </div>
            <div className="stage_3-3">
              <div className="content_wrapper">
                <div>stage_3-3</div>
              </div>
            </div>
          </div>
          <div className="content_4">
            <div className="stage_4-1">
              <div className="content_wrapper">
                {/* <div className="title">무엇을 할 수 있나요?</div> */}
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
      </div>
    </div>
  );
}

export default App;
