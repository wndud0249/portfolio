import React from 'react';
import htmlImg from '../../css/images/html5.png';
import cssImg from '../../css/images/css3.png';
import jsImg from '../../css/images/js.png';
import sassImg from '../../css/images/sass.png';
import bootStrapImg from '../../css/images/bootstrap.jpg';
import typeScriptImg from '../../css/images/typescript.png';
import reactImg from '../../css/images/react.png';
import nextJsImg from '../../css/images/nextjs.svg';
import reduxImg from '../../css/images/redux.png';
import reduxSagaImg from '../../css/images/redux_saga.png';
import reduxToolKitImg from '../../css/images/toolkit.png';

const StageSkillDevelop = () => {
  return (
    <>
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
    </>
  );
};

export default StageSkillDevelop;
