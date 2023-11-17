import React, { useState } from 'react';
import OrderList from './OrderList';

const OrderListPage = () => {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // 비밀번호가 '0000'인 경우에만 로그인 처리
    if (password === '0000') {
      setIsLoggedIn(true);
    } else {
      alert('비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <h2>사장님 페이지</h2>
          <label>
            비밀번호:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button onClick={handleLogin}>로그인</button>
        </div>
      ) : (
        <OrderList />
      )}
    </div>
  );
};

export default OrderListPage;
