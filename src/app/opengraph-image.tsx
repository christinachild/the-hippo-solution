import { ImageResponse } from "next/og";

export const alt =
  "The Hippo Solution: the true story of the 1910 plan to ranch hippos in the Louisiana bayou";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#faf6ef",
          color: "#14213d",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", height: 14, width: "100%" }}>
          <div style={{ flex: 45, backgroundColor: "#1d4ed8" }} />
          <div style={{ flex: 33, backgroundColor: "#0ea5e9" }} />
          <div style={{ flex: 22, backgroundColor: "#f2683c" }} />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 90px",
          }}
        >
          <div
            style={{
              fontSize: 34,
              fontStyle: "italic",
              color: "#1d4ed8",
            }}
          >
            a true story, regrettably
          </div>
          <div
            style={{
              fontSize: 104,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.02,
              marginTop: 12,
            }}
          >
            The Hippo Solution
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#44506a",
              marginTop: 28,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            In 1910, Congress nearly voted to release hippos into the Louisiana
            bayou to fix a meat shortage.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
