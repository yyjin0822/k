import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

function MenuList({ kind, menus, addToCart, Images }) {
  const iconButtonStyle = {
    fontSize: 30,
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
  };

  const menuListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around', // Center alignment with space around each item
    padding: '20px', // Increased space on both sides
  };

  const menuItemStyle = {
    width: '30%', // Adjusted width for three items per row
    margin: '10px', // Margin between menu items
    textAlign: 'center',
  };

  return (
    <div>
      <h1>{kind.charAt(0).toUpperCase() + kind.slice(1)}</h1>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0, ...menuListStyle }}>
        {menus.map((menu) => (
          <li key={menu.id} className="menu-item" style={menuItemStyle}>
            <img
              style={{ width: '70%', height: '200px', objectFit: 'scale-down', border: '1px solid #ddd', borderRadius: '4px' }}
              src={Images[menu.menu_name]}
              alt={menu.menu_name}
              className="menu-image"
            />
            <div className="menu-details">
              {menu.menu_name} - {menu.price}원
              <button
                style={iconButtonStyle}
                onClick={() => {
                  alert(`${menu.menu_name} 가 장바구니에 추가되었습니다.`);
                  return addToCart(menu);
                }}>
                <i alt="장바구니에 추가" className="fa fa-shopping-cart"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
