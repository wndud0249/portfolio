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
            className={focusedBookTitle === 'django' ? 'time_line_list focused' : 'time_line_list'}
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
            className={focusedBookTitle === 'doIt' ? 'time_line_list focused' : 'time_line_list'}
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
                <img src={doItBookImg} alt="Do it! 웹 프로그래밍을 위한 자바스크립트 기본 편" />
                <span>Do it! 웹 프로그래밍을 위한 자바스크립트 기본 편</span>
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
            className={focusedBookTitle === 'react' ? 'time_line_list focused' : 'time_line_list'}
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
                  focusedStage === 'stage_4-3' ? 'time_line_item on yalco' : 'time_line_item yalco'
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
                <img src={fastCampusImg} alt="패캠 - 한번에 끝내는 프론트엔드 개발 초격차 패키지" />
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
              focusedBookTitle === 'appleHtmlCss' ? 'time_line_list focused' : 'time_line_list'
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
            className={focusedBookTitle === 'appleJs' ? 'time_line_list focused' : 'time_line_list'}
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
            className={focusedBookTitle === 'appleTs' ? 'time_line_list focused' : 'time_line_list'}
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
    </>
  );
};

export default StageStudied2021;
