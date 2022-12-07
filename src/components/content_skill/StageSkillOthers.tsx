import React from 'react';
import gitImg from '../../css/images/git.png';
import gitHubImg from '../../css/images/github.png';
import gitLabImg from '../../css/images/gitlab.png';
import postManImg from '../../css/images/postman.png';
import slackImg from '../../css/images/slack.png';
import confluenceImg from '../../css/images/confluence.svg';
import jiraImg from '../../css/images/jira.svg';
import zeplinImg from '../../css/images/zeplin.png';

const StageSkillOthers = () => {
  return (
    <>
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
    </>
  );
};

export default StageSkillOthers;
