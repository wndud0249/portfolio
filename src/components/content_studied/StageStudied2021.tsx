import React from 'react';
import js1gradeBookImg from '../../css/images/books/js1grade.png';
import django1BookImg from '../../css/images/books/django1.png';
import django2BookImg from '../../css/images/books/django2.png';
import modernJsBookImg from '../../css/images/books/modernjs.png';
import perfectJsBookImg from '../../css/images/books/perfectjs.png';
import reactBookImg from '../../css/images/books/reactBook.png';
import itBookImg from '../../css/images/books/it.png';
import yalcoBookImg from '../../css/images/books/yalco.png';
import computerBookImg from '../../css/images/books/computer.png';
import jsTutorialImg from '../../css/images/books/jstutorial.png';
import sangcoImg from '../../css/images/books/sangco.png';
import fastCampusImg from '../../css/images/books/fastcampus.png';
import dreamCodingImg from '../../css/images/books/dream.png';
import codingAppleImg from '../../css/images/books/apple.png';
import doItBookImg from '../../css/images/books/doit.png';
import reactImg from '../../css/images/react.png';
import nextJsImg from '../../css/images/nextjs.svg';

interface StageStudied2021Props {
  focusedBookTitle: string;
  onMouseOverBookTitle: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeaveBookTitle: () => void;
  onContent4: boolean;
  focusedStage: string;
}

const StageStudied2021 = ({
  focusedBookTitle,
  onMouseOverBookTitle,
  onMouseLeaveBookTitle,
  onContent4,
  focusedStage,
}: StageStudied2021Props) => {
  return (
    <>
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
                title={'???????????? - ?????????????????? 1??????'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={js1gradeBookImg} alt="?????????????????? 1??????" />
                <span>Javascript 1??????</span>
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
            className={focusedBookTitle === 'django' ? 'time_line_list focused' : 'time_line_list'}
            onMouseOver={onMouseOverBookTitle}
            onMouseLeave={onMouseLeaveBookTitle}
            data-book-title="django"
          >
            <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
              <a
                href="https://product.kyobobook.co.kr/detail/S000001057711"
                title={'???????????? - django??? ????????? ?????? ?????? ????????? ????????? ??????????????????'}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={django1BookImg}
                  alt="django??? ????????? ?????? ?????? ????????? ????????? ??????????????????"
                />
                <img
                  src={django2BookImg}
                  alt="django??? ????????? ?????? ?????? ????????? ????????? ??????????????????"
                />
                <span>django??? ????????? ?????? ?????? ????????? ????????? ??????????????????</span>
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
            className={focusedBookTitle === 'doIt' ? 'time_line_list focused' : 'time_line_list'}
            onMouseOver={onMouseOverBookTitle}
            onMouseLeave={onMouseLeaveBookTitle}
            data-book-title="doIt"
          >
            <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
              <a
                href="https://product.kyobobook.co.kr/detail/S000001817926"
                title={'???????????? - Do it! ??? ?????????????????? ?????? ?????????????????? ?????? ???'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={doItBookImg} alt="Do it! ??? ?????????????????? ?????? ?????????????????? ?????? ???" />
                <span>Do it! ??? ?????????????????? ?????? ?????????????????? ?????? ???</span>
              </a>
            </div>
            <div className="time_line_item_wrapper">
              <div
                className={
                  focusedStage === 'stage_4-2' ? 'time_line_item on doIt' : 'time_line_item doIt'
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
                title={'???????????? - ???????????????????????? Deep Dive'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={modernJsBookImg} alt="???????????????????????? Deep Dive" />
                <span>???????????????????????? Deep Dive</span>
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
                title={'???????????? - ???????????? ????????? ??????'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={reactBookImg} alt="???????????? ????????? ??????" />
                <span>???????????? ????????? ??????</span>
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
            className={focusedBookTitle === 'react' ? 'time_line_list focused' : 'time_line_list'}
            onMouseOver={onMouseOverBookTitle}
            onMouseLeave={onMouseLeaveBookTitle}
            data-book-title="react"
          >
            <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
              <a
                href="https://ko.reactjs.org/tutorial/tutorial.html"
                title={'react ????????????'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={reactImg} alt="react ????????????" />
                <span>react ????????????</span>
              </a>
            </div>
            <div className="time_line_item_wrapper">
              <div
                className={
                  focusedStage === 'stage_4-2' ? 'time_line_item on react' : 'time_line_item react'
                }
              ></div>
            </div>
          </div>
          <div
            className={focusedBookTitle === 'nextJs' ? 'time_line_list focused' : 'time_line_list'}
            onMouseOver={onMouseOverBookTitle}
            onMouseLeave={onMouseLeaveBookTitle}
            data-book-title="nextJs"
          >
            <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
              <a
                href="https://nextjs.org/docs/getting-started"
                title={'nextJs ????????????'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={nextJsImg} alt="nextjs ????????????" />
                <span>nextjs ????????????</span>
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
                title={'???????????? - ???????????? ?????? ?????? ??? ????????? ?????? IT ??????'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={itBookImg} alt="???????????? ?????? ?????? ??? ????????? ?????? IT ??????" />
                <span>???????????? ?????? ?????? ??? ????????? ?????? IT ??????</span>
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
                title={'???????????? - ?????? ???????????? ????????? ?????? ??????'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={yalcoBookImg} alt="?????? ???????????? ????????? ?????? ??????" />
                <span>?????? ???????????? ????????? ?????? ??????</span>
              </a>
            </div>
            <div className="time_line_item_wrapper">
              <div
                className={
                  focusedStage === 'stage_4-3' ? 'time_line_item on yalco' : 'time_line_item yalco'
                }
              ></div>
            </div>
          </div>
          <div className="time_line_list">
            <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
              <a
                href="https://product.kyobobook.co.kr/detail/S000001033131"
                title={'???????????? - ?????????????????? ?????? ?????????'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={perfectJsBookImg} alt="?????????????????? ?????? ?????????" />
                <span>?????????????????? ?????? ?????????</span>
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
                title={'???????????? - ????????? ???????????? ????????? ????????????????'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={computerBookImg} alt="????????? ???????????? ????????? ????????????????" />
                <span>????????? ???????????? ????????? ????????????????</span>
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
                title={'????????? - ?????? javascript ????????????'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={jsTutorialImg} alt="????????? - ?????? javascript ????????????" />
                <span>????????? - ?????? javascript ????????????</span>
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
                title={'???????????? - HTML & Internet'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={sangcoImg} alt="???????????? - html/css" />
                <span>???????????? - html/css</span>
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
                title={'???????????? - JavaScript'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={sangcoImg} alt="???????????? - js" />
                <span>???????????? - js</span>
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
                title={'???????????? - git1'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={sangcoImg} alt="???????????? - git" />
                <span>???????????? - git</span>
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
                title={'?????????????????? - ????????? ????????? ??????????????? ?????? ????????? ?????????'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={fastCampusImg} alt="?????? - ????????? ????????? ??????????????? ?????? ????????? ?????????" />
                <span>?????? - ????????? ????????? ??????????????? ?????? ????????? ?????????</span>
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
              focusedBookTitle === 'appleHtmlCss' ? 'time_line_list focused' : 'time_line_list'
            }
            onMouseOver={onMouseOverBookTitle}
            onMouseLeave={onMouseLeaveBookTitle}
            data-book-title="appleHtmlCss"
          >
            <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
              <a
                href="https://codingapple.com/course/html-basics/"
                title={'???????????? - html/css'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={codingAppleImg} alt="???????????? - html/css" />
                <span>???????????? - html/css</span>
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
                title={'???????????? - javascript & jquery ??????'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={codingAppleImg} alt="???????????? - javascript & jquery ??????" />
                <span>???????????? - javascript & jquery ??????</span>
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
            className={focusedBookTitle === 'appleJs' ? 'time_line_list focused' : 'time_line_list'}
            onMouseOver={onMouseOverBookTitle}
            onMouseLeave={onMouseLeaveBookTitle}
            data-book-title="appleJs"
          >
            <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
              <a
                href="https://codingapple.com/course/javascript-es6/"
                title={'???????????? - javascript es6'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={codingAppleImg} alt="???????????? - javascript es6" />
                <span>???????????? - javascript es6</span>
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
                title={'???????????? - nodejs + mongoDB'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={codingAppleImg} alt="???????????? - nodejs + mongoDB" />
                <span>???????????? - nodejs + mongoDB</span>
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
                title={'???????????? - react'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={codingAppleImg} alt="???????????? - react" />
                <span>???????????? - react</span>
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
            className={focusedBookTitle === 'appleTs' ? 'time_line_list focused' : 'time_line_list'}
            onMouseOver={onMouseOverBookTitle}
            onMouseLeave={onMouseLeaveBookTitle}
            data-book-title="appleTs"
          >
            <div className={onContent4 ? 'time_line_label on' : 'time_line_label'}>
              <a
                href="https://codingapple.com/course/typescript-crash-course/"
                title={'???????????? - typescript'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={codingAppleImg} alt="???????????? - typescript" />
                <span>???????????? - typescript</span>
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
                title={'???????????? - ?????????'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={sangcoImg} alt="???????????? - ?????????" />
                <span>???????????? - ?????????</span>
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
                title={'???????????? - ??? ???????????????'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={dreamCodingImg} alt="???????????? - ??? ???????????????" />
                <span>???????????? - ??? ???????????????</span>
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
                title={'???????????? - ??????????????? ?????? ???????????? 101'}
                target="_blank"
                rel="noreferrer"
              >
                <img src={dreamCodingImg} alt="???????????? - ??????????????? ?????? ???????????? 101" />
                <span>???????????? - ??????????????? ?????? ???????????? 101</span>
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
    </>
  );
};

export default StageStudied2021;
