import React from 'react';
import MenuList from './MenuList';

import 그린티라떼 from '../img/NonCoffeeImg/그린티라떼.jpg';
import 딸기라떼 from '../img/NonCoffeeImg/딸기라떼.png';
import 딸기에이드 from '../img/NonCoffeeImg/딸기에이드.avif';
import 레몬에이드 from '../img/NonCoffeeImg/레몬에이드.jpg';
import 자몽에이드 from '../img/NonCoffeeImg/자몽에이드.jpg';
import 패션후르츠에이드 from '../img/NonCoffeeImg/패션후르츠에이드.jpg';
import 초코라떼 from '../img/NonCoffeeImg/초코라떼.jpg';
import 복숭아아이스티 from '../img/NonCoffeeImg/복숭아아이스티.jpg';

function NonCoffee({ menus, addToCart }) {
  // 예시로 각 메뉴 아이템에 해당하는 이미지 URL을 저장하는 객체
  const Images = {
    그린티라떼: 그린티라떼,
    딸기라떼 : 딸기라떼,
    딸기에이드 : 딸기에이드,
    레몬에이드 : 레몬에이드,
    자몽에이드 : 자몽에이드,
    패션후르츠에이드 : 패션후르츠에이드,
    초코라떼 : 초코라떼,
    복숭아아이스티 : 복숭아아이스티,
  };

  return (
    <div>
      <MenuList kind="NON-coffee" Images={Images} menus={menus} addToCart={addToCart} />
    </div>
  );
}

export default NonCoffee;
