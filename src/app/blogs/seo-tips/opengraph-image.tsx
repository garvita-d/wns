import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Practical SEO Tips to Boost Your Website Traffic in 2025';
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
        {/* Background decoration */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.15), transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Header */}
        <div
          style={{
            display: 'flex',
            padding: '50px 70px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              color: '#fff',
              display: 'flex',
            }}
          >
            WHAT NEXT STUDIO
          </div>
          <div
            style={{
              fontSize: 18,
              color: '#000',
              background: '#22c55e',
              padding: '10px 24px',
              borderRadius: '20px',
              display: 'flex',
              fontWeight: '600',
            }}
          >
            SEO
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '0 70px',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 52,
              fontWeight: 'bold',
              color: '#fff',
              margin: 0,
              lineHeight: 1.15,
              maxWidth: '1000px',
            }}
          >
            Practical SEO Tips to Boost Your Website Traffic in 2025
          </h1>

          <div
            style={{
              display: 'flex',
              marginTop: '40px',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <div
              style={{
                fontSize: 22,
                color: '#a3a3a3',
                display: 'flex',
              }}
            >
              🔍 User Intent • Schema Markup • Mobile Optimization
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            padding: '40px 70px',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: '#a3a3a3',
              display: 'flex',
            }}
          >
            whatnextstudio.com/blogs
          </div>
          <div
            style={{
              width: '80px',
              height: '6px',
              background: 'linear-gradient(to right, #22c55e, #16a34a)',
              borderRadius: '3px',
              display: 'flex',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}