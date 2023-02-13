import React from 'react';
import Beozzi from 'public/profile/beozzi.png';
import Image from 'next/image';
// import Menu from 'public/Icons/menu.svg';
// import Arrow from 'public/Icons/arrow.svg';
// import Man from 'public/Icons/man.svg';
// import Woman from 'public/Icons/woman.svg';

export interface IconProps {
  image: 'BEOZZI'
        // | 'MENU'
        // | 'INSTAGRAM'
        // | 'ARROW'
        // | 'MAN'
        // | 'WOMAN'
}

const isDiscernImage = ({ image }: IconProps) => {
  switch (image) {
    case 'BEOZZI':
      return Beozzi;
    // case 'MENU':      
    //   return Menu;
    // case 'ARROW':
    //   return Arrow;
    // case 'MAN':
    //   return Man;
    // case 'WOMAN':
    //   return Woman;
    default:
      break;
  };
}

const ImageProfile = ({ image }: IconProps) => {
  const ImageProfile = isDiscernImage({ image });

  return (
    <>
      <Image src={`/profile/${image}.png`} width={24} height={24} alt={"profile"} />
    </>
  );
};

export { ImageProfile };