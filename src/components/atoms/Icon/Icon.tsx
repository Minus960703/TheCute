import React from 'react';
import Close from 'public/Icons/close.svg';
import Menu from 'public/Icons/menu.svg';
import Arrow from 'public/Icons/arrow.svg';
import Man from 'public/Icons/man.svg';
import Woman from 'public/Icons/woman.svg';
import BigMan from 'public/Icons/bigMan.svg';
import BigWoman from 'public/Icons/bigWoman.svg';

export interface IconProps {
  icon: 'CLOSE'
        | 'MENU'
        | 'INSTAGRAM'
        | 'ARROW'
        | 'MAN'
        | 'WOMAN'
        | 'BIGMAN'
        | 'BIGWOMAN'
}

const isDiscernIcon = ({ icon }: IconProps) => {
  switch (icon) {
    case 'CLOSE':
      return Close;
    case 'MENU':      
      return Menu;
    case 'ARROW':
      return Arrow;
    case 'MAN':
      return Man;
    case 'WOMAN':
      return Woman;
    case 'BIGMAN':
      return BigMan;
    case 'BIGWOMAN':
      return BigWoman;
    default:
      break;
  };
}

const Icon = ({ icon }: IconProps) => {
  const Icon = isDiscernIcon({ icon });

  return (
    <>
      <Icon />
    </>
  );
};

export { Icon };