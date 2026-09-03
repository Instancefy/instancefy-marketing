import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "../lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/instancefy-logo.png"),
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 96,
              height: 96,
              borderRadius: 16,
              border: "4px solid #eecd56",
              background: "#ffe68c",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSrc}
              width={56}
              height={56}
              style={{ objectFit: "contain" }}
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              padding: "8px 14px",
              background: "#ffc9f0",
              borderRadius: 6,
              fontSize: 28,
              color: "#0c0c0c",
            }}
          >
            Technologies
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#0c0c0c",
              letterSpacing: "-0.02em",
            }}
          >
            <span>We build software</span>
            <span>
              that{" "}
              <span
                style={{
                  background: "#ffc9f0",
                  padding: "0 8px",
                }}
              >
                works
              </span>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#706f6f",
              maxWidth: 820,
              lineHeight: 1.35,
            }}
          >
            Software Development · IoT · ML/AI
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            color: "#0c0c0c",
          }}
        >
          <span style={{ fontWeight: 600 }}>{site.name}</span>
          <span style={{ color: "#706f6f" }}>{site.tagline}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
