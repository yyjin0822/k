import React, { useEffect } from 'react';

export default function Map() {
  useEffect(() => {
    KakaoMapScript();
  }, []); // 마운트 될때 사용할수 있도록 useEffect 사용

  return (
    <div
      id="myMap"
      style={{
        width: '100%',
        height: '350px',
      }}></div>
  );
}

const { kakao } = window;

function KakaoMapScript() {
  const container = document.getElementById('myMap');
  const options = {
    center: new kakao.maps.LatLng(37.275667015938254, 127.13431154275762),
    level: 3,
  };
  var map = new kakao.maps.Map(container, options);
  var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png'; // 마커이미지의 주소입니다
  var imageSize = new kakao.maps.Size(24, 35); // 마커이미지의 크기입니다
  var imageOption = { offset: new kakao.maps.Point(27, 69) };
  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
  var markerPosition = new kakao.maps.LatLng(37.27535609387587, 127.13436736667833);

  var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage,
  }); // 마커를 생성합니다

  marker.setMap(map); // 마커를 지도에 표시합니다
}
