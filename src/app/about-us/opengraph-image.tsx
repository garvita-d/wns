import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'About What Next Studio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#000',
          position: 'relative',
        }}
      >
        {/* Top section with brand */}
        <div
          style={{
            display: 'flex',
            padding: '60px 80px',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            style={{
              fontSize: 32,
              fontWeight: 'bold',
              color: '#fff',
              display: 'flex',
            }}
          >
            WHAT NEXT STUDIO
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#a3a3a3',
              display: 'flex',
            }}
          >
            About Us
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0 80px',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: '#fff',
              margin: 0,
              lineHeight: 1.2,
              maxWidth: '900px',
            }}
          >
            We design brands people remember
          </h1>

          <p
            style={{
              fontSize: 28,
              color: '#a3a3a3',
              margin: '30px 0 0 0',
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            Creative strategy, brand experiences and digital products for companies who want to be remarkable.
          </p>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '8px',
            background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}