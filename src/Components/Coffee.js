import React from 'react';
import MenuList from './MenuList';

import Esspresso from '../img/CoffeeImg/에스프레소.jpg';
import Americano from '../img/CoffeeImg/아메리카노.jpg';
import Latte from '../img/CoffeeImg/카페라떼.jpg';
import CoffeeMoca from '../img/CoffeeImg/카페모카.jpg';
import VanilaLatte from '../img/CoffeeImg/바닐라라떼.jpg';
import CaramelMacchiato from '../img/CoffeeImg/카라멜마끼아또.jpg';
import HazelnutLatte from '../img/CoffeeImg/헤이즐넛라떼.jpg';
import Coldbrew from '../img/CoffeeImg/콜드브루.jpg';
import addShot from '../img/CoffeeImg/샷추가.png';

function Coffee({ menus, addToCart }) {
  // 예시로 각 메뉴 아이템에 해당하는 이미지 URL을 저장하는 객체
  const Images = {
    에스프레소: Esspresso,
    아메리카노: Americano,
    카페라떼: Latte,
    카페모카: CoffeeMoca,
    바닐라라떼: VanilaLatte,
    카라멜마끼아또: CaramelMacchiato,
    헤이즐넛라떼: HazelnutLatte,
    '콜드브루(디카페인)': Coldbrew,
    샷추가: addShot,
    // ... 다른 커피 이미지들
  };

  const handleAddToCart = (menu) => {
    const itemToAdd = {
      ...menu,
      image: Images[menu.name], // 이미지 경로를 itemToAdd 객체에 추가합니다.
    };
    addToCart(itemToAdd);
  };

  return (
    <div>
      <MenuList kind="coffee" Images={Images} menus={menus} addToCart={handleAddToCart} />
    </div>
  );
}

export default Coffee;
