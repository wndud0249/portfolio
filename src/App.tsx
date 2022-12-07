import React, { useEffect, useRef, useState } from 'react';
import './css/reset.scss';
import './css/App.scss';
import './css/modal.scss';

import pocariVideo from './css/videos/pocari.mp4';
import coupangVideo from './css/videos/coupang.mp4';
import xtlv1Video from './css/videos/4xtlv1.mp4';
import xtlAdminVideo from './css/videos/4xtladmin.mp4';
import xtlv2Video from './css/videos/4xtlv2.mp4';
import webinarVideo from './css/videos/webinar.mp4';
import ModalComponent from './components/ModalComponent';
import useOnScreen from './lib/useOnScreen';

import Header from './components/Header';
import StageOneOfOne from './components/content_about/StageAbout';
import StageOneOfTwo from './components/content_skill/StageSkillDevelop';
import StageTwoOfTwo from './components/content_skill/StageSkillOthers';
import StageOneOfFour from './components/content_studied/StageStudied2020';
import StageTwoOfFour from './components/content_studied/StageStudied2021';
import StageThreeOfFour from './components/content_studied/StageStudied2022';
import StageOneOfFive from './components/content_career/StageCareer';
import StageProjectPocari from './components/content_project/StageProjectPocari';
import StageProjectCoupang from './components/content_project/StageProjectCoupang';
import StageProjectXtlV1 from './components/content_project/StageProjectXtlV1';
import StageProjectXtlAdmin from './components/content_project/StageProjectXtlAdmin';
import StageProjectXtlV2 from './components/content_project/StageProjectXtlV2';
import StageProjectWebinar from './components/content_project/StageProjectWebinar';
import StageAbout from './components/content_about/StageAbout';
import StageSkillDevelop from './components/content_skill/StageSkillDevelop';
import StageSkillOthers from './components/content_skill/StageSkillOthers';
import StageStudied2020 from './components/content_studied/StageStudied2020';
import StageStudied2021 from './components/content_studied/StageStudied2021';
import StageStudied2022 from './components/content_studied/StageStudied2022';
import StageCareer from './components/content_career/StageCareer';

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

  useEffect(() => {
    const titleDom = document.querySelector('title');
    if (titleDom instanceof HTMLElement) {
      titleDom.innerText = `jy's portfolio`;
    }
  }, []);

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
        <Header onClickHeaderMenu={onClickHeaderMenu} />
        <div className="typing" style={{ color: typingColor }}></div>

        <div className="contents">
          <div className="content_1">
            <StageAbout
              onMouseOverBlog={onMouseOverBlog}
              onMouseLeaveBlog={onMouseLeaveBlog}
              clickTextShow={clickTextShow}
            />
          </div>
          <div className="content_2">
            <StageSkillDevelop />
            <StageSkillOthers />
          </div>
          <div className="content_3">
            <StageProjectPocari
              onClickVideo={onClickVideo}
              onMouseOverImage={onMouseOverImage}
              onMouseLeaveImage={onMouseLeaveImage}
              bigImageSrc={bigImageSrc}
            />
            <StageProjectCoupang
              onClickVideo={onClickVideo}
              onMouseOverImage={onMouseOverImage}
              onMouseLeaveImage={onMouseLeaveImage}
              bigImageSrc={bigImageSrc}
            />
            <StageProjectXtlV1
              onClickVideo={onClickVideo}
              onMouseOverImage={onMouseOverImage}
              onMouseLeaveImage={onMouseLeaveImage}
              bigImageSrc={bigImageSrc}
            />
            <StageProjectXtlAdmin
              onClickVideo={onClickVideo}
              onMouseOverImage={onMouseOverImage}
              onMouseLeaveImage={onMouseLeaveImage}
              bigImageSrc={bigImageSrc}
            />
            <StageProjectXtlV2
              onClickVideo={onClickVideo}
              onMouseOverImage={onMouseOverImage}
              onMouseLeaveImage={onMouseLeaveImage}
              bigImageSrc={bigImageSrc}
            />
            <StageProjectWebinar
              onClickVideo={onClickVideo}
              onMouseOverImage={onMouseOverImage}
              onMouseLeaveImage={onMouseLeaveImage}
              bigImageSrc={bigImageSrc}
            />
          </div>
          <div className="content_4" ref={divRef}>
            <StageStudied2020
              focusedBookTitle={focusedBookTitle}
              onMouseOverBookTitle={onMouseOverBookTitle}
              onMouseLeaveBookTitle={onMouseLeaveBookTitle}
              onContent4={onContent4}
              focusedStage={focusedStage}
            />
            <StageStudied2021
              focusedBookTitle={focusedBookTitle}
              onMouseOverBookTitle={onMouseOverBookTitle}
              onMouseLeaveBookTitle={onMouseLeaveBookTitle}
              onContent4={onContent4}
              focusedStage={focusedStage}
            />
            <StageStudied2022
              focusedBookTitle={focusedBookTitle}
              onMouseOverBookTitle={onMouseOverBookTitle}
              onMouseLeaveBookTitle={onMouseLeaveBookTitle}
              onContent4={onContent4}
              focusedStage={focusedStage}
            />
          </div>
          <div className="content_5">
            <StageCareer />
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
