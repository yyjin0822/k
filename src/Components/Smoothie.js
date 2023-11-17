import React from 'react';
import MenuList from './MenuList';

import ChocoSmoothie from '../img/SmoothieImg/초코스무디.jpg';
import GreenteaSmoothie from '../img/SmoothieImg/녹차스무디.jpg';
import PlainSmoothie from '../img/SmoothieImg/플레인스무디.jpg';
import StrawberrySmoothie from '../img/SmoothieImg/딸기요거트스무디.jpg';
import MangoSmoothie from '../img/SmoothieImg/망고요거트스무디.jpg';
import MilkShake from '../img/SmoothieImg/밀크셰이크.jpg';
import CoffeeShake from '../img/SmoothieImg/커피셰이크.jpg';


function Smoothie({ menus, addToCart }) {
  // 예시로 각 메뉴 아이템에 해당하는 이미지 URL을 저장하는 객체
  const Images = {
    '초코 스무디': ChocoSmoothie,
    '녹차 스무디': GreenteaSmoothie,
    '플레인 요거트 스무디': PlainSmoothie,
    '딸기 요거트 스무디': StrawberrySmoothie,
    '망고 요거트 스무디': MangoSmoothie,
    '밀크 셰이크': MilkShake,
    '커피 셰이크': CoffeeShake,
    // ... 다른 커피 이미지들
  };

  return (
    <div>
      <MenuList kind="smoothie" Images={Images} menus={menus} addToCart={addToCart} />
    </div>
  );
}

export default Smoothie;
