import React from 'react';
import MenuList from './MenuList';

import 썸머펀치 from '../img/Signature/썸머펀치.jpg';
import 베리더티 from '../img/Signature/베리더티.jpg';
import 블룸즈버리라떼 from '../img/Signature/블룸즈버리라떼.jpg'

function SIGNATURE({ menus, addToCart }) {
  const Images = {
    썸머펀치 : 썸머펀치,
    베리더티 : 베리더티,
    블룸즈버리라떼 : 블룸즈버리라떼,
  };

  return (
    <div>
      <MenuList kind="SIGNATURE" Images={Images} menus={menus} addToCart={addToCart} />
    </div>
  );
}

export default SIGNATURE;
