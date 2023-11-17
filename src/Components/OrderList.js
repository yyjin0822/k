import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [cartData, setCartData] = useState([]);
  console.log(cartData);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/get_cartMenus.php');
        // 전화번호를 기준으로 주문을 그룹화
        const groupedOrders = groupOrdersByPhoneNumber(response.data);
        setCartData(groupedOrders);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };
    fetchCartData();
  }, []);

  // 전화번호를 기준으로 주문을 그룹화하는 함수
  const groupOrdersByPhoneNumber = (orders) => {
    return orders.reduce((result, order) => {
      const phoneNumber = order.phone_number;
      if (!result[phoneNumber]) {
        // 새로운 전화번호인 경우 새로운 그룹을 생성
        result[phoneNumber] = [order];
      } else {
        // 기존에 있는 전화번호인 경우 해당 그룹에 추가
        result[phoneNumber].push(order);
      }
      return result;
    }, {});
  };

  // 주문 삭제 함수
  const handleDelete = async (phoneNumber) => {
    try {
      await axios.delete(`http://localhost:8080/delete_cartMenus_by_phone.php?phone_number=${phoneNumber}`);
      // 삭제 후 다시 주문 목록을 업데이트
      const response = await axios.get('http://localhost:8080/get_cartMenus.php');
      const updatedOrders = groupOrdersByPhoneNumber(response.data);
      setCartData(updatedOrders);
      alert('주문이 삭제되었습니다.');
      window.location.replace('/OrderList');
    } catch (error) {
      console.error('주문삭제 중 오류가 발생했습니다.', error); // 콘솔에 에러 출력
      alert(`주문 삭제 중 오류가 발생했습니다. ${error.message}`); // 에러 발생 시에도 사용자에게 알림
    }
  };
  return (
    <div>
      <h2>주문 목록</h2>
      {Object.keys(cartData).map((phoneNumber) => (
        <div key={phoneNumber}>
          <h3>{`주문 전화번호: 0${phoneNumber}`}</h3>
          <button onClick={() => handleDelete(phoneNumber)}>주문 삭제</button>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>메뉴 이름</th>
                <th>가격</th>
                <th>온도</th>
                <th>수량</th>
              </tr>
            </thead>
            <tbody>
              {cartData[phoneNumber].map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.cart_menu_name}</td>
                  <td>{item.cart_price}</td>
                  <td style={{ color: item.cart_tem === '0' ? 'blue' : 'red' }}>{item.cart_tem === '0' ? 'ICE' : 'HOT'}</td>
                  <td>{item.cart_num}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Admin;
