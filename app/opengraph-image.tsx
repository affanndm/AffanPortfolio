import { ImageResponse } from "next/og";

export const alt = "Affan Nadeem - Student, Developer, Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#090a09",
          color: "#f2f0e8",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}>
            <span>AFFAN NADEEM</span>
            <span style={{ color: "#c4ff45" }}>SIGNAL / SYSTEMS</span>
          </div>
          <div style={{ display: "flex", maxWidth: 930, fontSize: 88, lineHeight: 0.92, fontWeight: 700 }}>
            SOFTWARE FOR COMPLEX SYSTEMS.
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", color: "#a8aaa2", fontSize: 24 }}>
            <span>LOCAL DISCOVERY / COMPUTATIONAL BIOLOGY</span>
            <span>2026</span>
          </div>
        </div>
        {[
          [900, 130],
          [1010, 250],
          [930, 390],
          [1090, 480],
        ].map(([left, top], index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left,
              top,
              width: index === 1 ? 12 : 8,
              height: index === 1 ? 12 : 8,
              borderRadius: 999,
              background: index === 1 ? "#c4ff45" : "#f2f0e8",
              opacity: 0.72,
            }}
          />
        ))}
      </div>
    ),
    size,
  );
}
