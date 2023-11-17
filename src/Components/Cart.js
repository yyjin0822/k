import { useState } from 'react';
import './Cart.css';

// Coffee
import Esspresso from '../img/CoffeeImg/에스프레소.jpg';
import Americano from '../img/CoffeeImg/아메리카노.jpg';
import Latte from '../img/CoffeeImg/카페라떼.jpg';
import CoffeeMoca from '../img/CoffeeImg/카페모카.jpg';
import VanilaLatte from '../img/CoffeeImg/바닐라라떼.jpg';
import CaramelMacchiato from '../img/CoffeeImg/카라멜마끼아또.jpg';
import HazelnutLatte from '../img/CoffeeImg/헤이즐넛라떼.jpg';
import Coldbrew from '../img/CoffeeImg/콜드브루.jpg';
import addShot from '../img/CoffeeImg/샷추가.png';

// Smoothie
import ChocoSmoothie from '../img/SmoothieImg/초코스무디.jpg';
import GreenteaSmoothie from '../img/SmoothieImg/녹차스무디.jpg';
import PlainSmoothie from '../img/SmoothieImg/플레인스무디.jpg';
import StrawberrySmoothie from '../img/SmoothieImg/딸기요거트스무디.jpg';
import MangoSmoothie from '../img/SmoothieImg/망고요거트스무디.jpg';
import MilkShake from '../img/SmoothieImg/밀크셰이크.jpg';
import CoffeeShake from '../img/SmoothieImg/커피셰이크.jpg';

// NonCoffee
import 그린티라떼 from '../img/NonCoffeeImg/그린티라떼.jpg';
import 딸기라떼 from '../img/NonCoffeeImg/딸기라떼.png';
import 딸기에이드 from '../img/NonCoffeeImg/딸기에이드.avif';
import 레몬에이드 from '../img/NonCoffeeImg/레몬에이드.jpg';
import 자몽에이드 from '../img/NonCoffeeImg/자몽에이드.jpg';
import 패션후르츠에이드 from '../img/NonCoffeeImg/패션후르츠에이드.jpg';
import 초코라떼 from '../img/NonCoffeeImg/초코라떼.jpg';
import 복숭아아이스티 from '../img/NonCoffeeImg/복숭아아이스티.jpg';

// TEA-tavalon
import 쿨민트 from '../img/TeaImg/쿨민트.jpg';
import 피치우롱티 from '../img/TeaImg/피치우롱티.jpg';
import 망고멜랑 from '../img/TeaImg/망고멜랑.jpg';
import 자스민펄 from '../img/TeaImg/자스민펄.jpg';
import 밀크티 from '../img/TeaImg/밀크티.avif';
import 스위트레몬그라스 from '../img/TeaImg/스위트레몬그라스.jpg';

// signature
import 썸머펀치 from '../img/Signature/썸머펀치.jpg';
import 베리더티 from '../img/Signature/베리더티.jpg';
import 블룸즈버리라떼 from '../img/Signature/블룸즈버리라떼.jpg';

const Cart = ({ inCart: initialCart }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const [inCart, setInCart] = useState(
    initialCart.map((item) => ({
      ...item,
      temperature: item.temperature || 'cold',
      quantity: item.quantity || 1,
    }))
  );
  // `inCart: initialCart`는 객체 구조 분해 할당을 사용하여
  // `inCart`라는 prop을 `initialCart`라는 새로운 이름의 변수로 받아옵니다.
  // 이를 통해 `inCart` prop은 이 함수 내에서 `initialCart`라는 이름으로 사용됩니다.

  const handleQuantityChange = (index, delta) => {
    const updatedCart = [...inCart];
    if (!updatedCart[index].quantity) updatedCart[index].quantity = 1;
    updatedCart[index].quantity += delta;
    if (updatedCart[index].quantity < 1) updatedCart[index].quantity = 1;
    setInCart(updatedCart);
  };

  const onDelete = (index) => {
    const updatedCart = [...inCart];
    updatedCart.splice(index, 1);
    setInCart(updatedCart);
  };

  const toggleTemperature = (index) => {
    const updatedCart = [...inCart];
    updatedCart[index].temperature = updatedCart[index].temperature === 'cold' ? 'hot' : 'cold';
    setInCart(updatedCart);
  };

  const totalPrice = inCart.reduce((acc, product) => acc + parseFloat(product.price) * (product.quantity || 1), 0);

  const handleOrder = () => {
    const cartData = {
      items: inCart,
      phoneNumber: phoneNumber,
    };
    console.log(JSON.stringify(cartData, null, 2));
    setInCart([]);
    if (phoneNumber.length === 11) {
      //11자리 00011112222 이면,
      setPhoneNumber('');
      alert('주문이 완료되었습니다.');
    }
    //수정한 부분 시작
    fetch('http://localhost:8080/order.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        console.log('Received text:', text);
        window.location.replace('/'); // 홈페이지로 돌아갑니다요 다 만들고 주석 풀기

        if (!text) {
          throw new Error('JSON is empty');
        }

        return JSON.parse(text);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        alert(`주문 처리 중 오류가 발생했습니다: ${error.message}`);
      });
  };
  //여기까지 수정했더욤

  const ButtonStyle = {
    fontSize: '1rem', // Adjust the font size as necessary
    padding: '0.5em', // Provide some padding around the text
    margin: '0.5em',
    background: 'none',
    border: '1px solid #ccc', // Optional: add a border to make it look like a button
    cursor: 'pointer',
  };

  const menuImages = {
    에스프레소: Esspresso,
    아메리카노: Americano,
    카페라떼: Latte,
    카페모카: CoffeeMoca,
    바닐라라떼: VanilaLatte,
    카라멜마끼아또: CaramelMacchiato,
    헤이즐넛라떼: HazelnutLatte,
    '콜드브루(디카페인)': Coldbrew,
    샷추가: addShot,

    '초코 스무디': ChocoSmoothie,
    '녹차 스무디': GreenteaSmoothie,
    '플레인 요거트 스무디': PlainSmoothie,
    '딸기 요거트 스무디': StrawberrySmoothie,
    '망고 요거트 스무디': MangoSmoothie,
    '밀크 셰이크': MilkShake,
    '커피 셰이크': CoffeeShake,

    그린티라떼: 그린티라떼,
    딸기라떼: 딸기라떼,
    딸기에이드: 딸기에이드,
    레몬에이드: 레몬에이드,
    자몽에이드: 자몽에이드,
    패션후르츠에이드: 패션후르츠에이드,
    초코라떼: 초코라떼,
    복숭아아이스티: 복숭아아이스티,

    '쿨 민트': 쿨민트,
    피치우롱: 피치우롱티,
    망고멜랑: 망고멜랑,
    '자스민 펄': 자스민펄,
    밀크티: 밀크티,
    '스위트 레몬그라스': 스위트레몬그라스,

    썸머펀치: 썸머펀치,
    베리더티: 베리더티,
    블룸즈버리라떼: 블룸즈버리라떼,
  };

  return (
    <div class="cart">
      <h1>장바구니</h1>
      <div class="number" style={{ margin: '0.3rem' }}>
        <label>
          <span>전화번호: </span>
          <input
            type="tel"
            value={phoneNumber}
            maxLength={11}
            onChange={(e) => setPhoneNumber(e.target.value)} // 사용자 입력에 따라 전화번호 업데이트
            placeholder="  전화번호를 입력하세요"
          />
        </label>
      </div>

      {inCart.length === 0 ? (
        <p>장바구니가 비어있습니다.</p>
      ) : (
        <div class = "box">
          {inCart.map((product, index) => (
            <div key={index}>
              <span class = "wrap">
                <span class ="img">
                  <img src={menuImages[product.menu_name]} alt={product.menu_name} />
                </span>
                <span class = "right">
                  <span class = "right-top">
                    <span class = "name">{product.menu_name}</span>
                    <span class = "tem">
                      <button
                        style={{
                          ...ButtonStyle,
                          color: product.temperature === 'cold' ? 'blue' : 'red',
                        }}
                        onClick={() => toggleTemperature(index)}>
                        {product.temperature.toUpperCase()}
                      </button>
                    </span>
                  </span>
                  <span class = "option">
                    <span class="price">
                      {product.price}원
                    </span>
                    <span>
                      <span class = "count">
                        <button style={ButtonStyle} onClick={() => handleQuantityChange(index, 1)}>
                          +
                        </button>
                        {product.quantity || 1}
                        <button style={ButtonStyle} onClick={() => handleQuantityChange(index, -1)}>
                          - 
                        </button>
                      </span>
                      <span class = "deleteB">
                        <button style={ButtonStyle} onClick={() => onDelete(index)}>
                        삭제</button>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </div>
          ))
          } 
          <span class = "footer">
            <h2 class = "t-price">총 금액: {totalPrice}원</h2>
            <button style={ButtonStyle} onClick={phoneNumber.length === 11 ? handleOrder : null}>
              주문하기
            </button>
          </span>
        </div>
      )}
    </div>
  );
};

export default Cart;
