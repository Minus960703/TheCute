import { useEffect, useState } from "react";

interface MapProps {
  latitude ?:number;
  longitude ?:number;
  address :string;
}

function Map({ latitude = 37.4812845080678, longitude = 126.952713197762, address }: MapProps) {
  const [coordinate, setCoordinate] = useState({latitude, longitude})
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
        };
        const map = new window.kakao.maps.Map(container, options);

        var geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(address, function (result :any, status :any) {
          if (status === window.kakao.maps.services.Status.OK) {
            var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
            var marker = new window.kakao.maps.Marker({
              map: map,
              position: coords
            });
            map.setCenter(coords);
          }
        });

        const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, [latitude, longitude]);

  return (
    <>
      <div id="map" className="maps"></div>
      <style jsx>{`
        .maps {
          aspect-ratio: 320 / 220;
        }
      `}</style>
    </>
  );
}

export { Map };