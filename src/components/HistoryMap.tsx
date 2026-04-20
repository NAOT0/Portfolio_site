import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// 日本地図専用のTopoJSON（都道府県の境界線があるもの）
const geoUrl =
  "https://raw.githubusercontent.com/dataofjapan/land/master/japan.geojson";

const markers = [
  {
    markerOffset: -15,
    name: "兵庫県 (2014-2020年)",
    coordinates: [135.22, 34.89],
  },
  {
    markerOffset: -25,
    name: "京都府 (2020-2025年)",
    coordinates: [135.33, 35.47],
  },
  {
    markerOffset: -15,
    name: "福井県 (2025-現在)",
    coordinates: [136.22, 36.06],
  },
  {
    markerOffset: 20,
    name: "埼玉県 (2004-2014年)",
    coordinates: [139.72, 35.8],
  },
];

const HistoryMap = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "#f8fafc",
        borderRadius: "12px",
        aspectRatio: "16/9",
      }}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          // 兵庫から埼玉までをカバーするために中心を少し東（右）へ、スケールを調整
          center: [137.2, 35.8],
          scale: 4500, // 範囲が広がったため、少しズームアウトして全体を見やすく
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#e2e8f0"
                stroke="#cbd5e1"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#cbd5e1", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates as [number, number]}>
            <circle r={5} fill="#0070f3" stroke="#fff" strokeWidth={2} />
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{
                fontFamily: "sans-serif",
                fill: "#1e293b",
                fontSize: "12px",
                fontWeight: "600",
                paintOrder: "stroke",
                stroke: "#ffffff",
                strokeWidth: "3px",
              }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default HistoryMap;
