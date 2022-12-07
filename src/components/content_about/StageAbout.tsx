import React from 'react';
import nameImg from '../../css/images/user.svg';
import birthImg from '../../css/images/user-plus.svg';
import addressImg from '../../css/images/home.svg';
import phoneImg from '../../css/images/smartphone.svg';
import emailImg from '../../css/images/mail.svg';
import blogImg from '../../css/images/monitor.svg';

interface StageAboutProps {
  onMouseOverBlog: () => void;
  onMouseLeaveBlog: () => void;
  clickTextShow: boolean;
}

const StageAbout = ({ onMouseOverBlog, onMouseLeaveBlog, clickTextShow }: StageAboutProps) => {
  return (
    <>
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
    </>
  );
};

export default StageAbout;
