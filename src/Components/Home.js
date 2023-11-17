import React from 'react';
import './homestyle.css';
import Map from '../Map';

import img_1 from '../img/MainImg/샬롬관.jpg';
import img_2 from '../img/MainImg/천은관.jpg';

import img_3 from '../img/MainImg/clockIcon.jpg';
import img_4 from '../img/MainImg/phoneIcon.jpg';
import img_5 from '../img/MainImg/채점자.jpg';

const Home = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <img src={img_1} alt="샬롬관" className="homeImage" />
              <div>샬롬관 블룸즈버리</div>
            </td>
            <td>
              <img src={img_2} alt="천은관" className="homeImage" />
              <div>천은관 블룸즈버리</div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="timeIcon">
        <img src={img_3} alt="영업시간" className="clockIcon" />
        <span>
          <div>open 8:30</div>
          <span>close 17:00</span>
        </span>
      </div>
      <div className="phoneNumIcon">
        <img src={img_4} alt="전화번호" className="phoneIcon" />
        <span>031-280-3114</span>
      </div>
      <div className="mapIcon">
        <img src={img_5} alt="장소" className="locationIcon" />
        <div> 경기 용인시 기흥구 강남로 40 강남대학교 샬롬관, 천은관 지하1층</div>
        <div style={{ width: '80%', padding:20, backgroundColor:'#f9f9f9' }}>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Home;
