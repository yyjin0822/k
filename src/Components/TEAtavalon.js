import React from 'react';
import MenuList from './MenuList';

import 쿨민트 from '../img/TeaImg/쿨민트.jpg';
import 피치우롱티 from '../img/TeaImg/피치우롱티.jpg';
import 망고멜랑 from '../img/TeaImg/망고멜랑.jpg';
import 자스민펄 from '../img/TeaImg/자스민펄.jpg';
import 밀크티 from '../img/TeaImg/밀크티.avif';
import 스위트레몬그라스 from '../img/TeaImg/스위트레몬그라스.jpg';

function TEAtavalon({ menus, addToCart }) {
  // 예시로 각 메뉴 아이템에 해당하는 이미지 URL을 저장하는 객체
  const Images = {
    '쿨 민트': 쿨민트,
    피치우롱 : 피치우롱티,
    망고멜랑 : 망고멜랑,
    '자스민 펄' : 자스민펄,
    밀크티 : 밀크티,
    '스위트 레몬그라스' : 스위트레몬그라스,
  };

  return (
    <div>
      <MenuList kind="TEA-tavalon" Images={Images} menus={menus} addToCart={addToCart} />
    </div>
  );
}

export default TEAtavalon;
