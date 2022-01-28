import * as React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef, useState } from "react";
// импортируем стили mapbox-gl чтобы карта отображалась коррекно

function MapBox() {
  // здесь будет хранится инстанс карты после инициализации
  const [map, setMap] = useState<mapboxgl.Map>();

  // React ref для хранения ссылки на DOM ноду который будет
  // использоваться как обязательный параметр `container`
  // при инициализации карты `mapbox-gl`
  // по-умолчанию будет содержать `null`
  const mapNode = useRef(null);

  React.useEffect(() => {
    const node = mapNode.current;
    // если объект window не найден,
    // то есть компонент рендерится на сервере
    // или dom node не инициализирована, то ничего не делаем
    if (typeof window === "undefined" || node === null) return;

    // иначе создаем инстанс карты передавая ему ссылку на DOM ноду
    // а также accessToken для mapbox
    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9,
    });

    // и сохраняем созданный объект карты в React.useState
    setMap(mapboxMap);

    // чтобы избежать утечки памяти удаляем инстанс карты
    // когда компонент будет демонтирован
    return () => {
      mapboxMap.remove();
    };
  }, []);

  return <div ref={mapNode} style={{ width: "100%", height: "100%" }} />;
}

export default MapBox;
