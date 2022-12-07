import React from 'react';

interface HeaderProps {
  onClickHeaderMenu: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Header = ({ onClickHeaderMenu }: HeaderProps) => {
  return (
    <header className="header">
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
    </header>
  );
};

export default Header;
