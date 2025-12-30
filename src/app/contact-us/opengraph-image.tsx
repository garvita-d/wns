import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Contact What Next Studio';
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
        {/* Gradient background */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent 60%)',
            display: 'flex',
          }}
        />

        {/* Header */}
        <div
          style={{
            display: 'flex',
            padding: '60px 80px',
            alignItems: 'center',
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
              fontSize: 72,
              fontWeight: 'bold',
              color: '#fff',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Let's create something amazing
          </h1>

          <p
            style={{
              fontSize: 32,
              color: '#a3a3a3',
              margin: '35px 0 0 0',
              maxWidth: '800px',
              lineHeight: 1.3,
            }}
          >
            Ready to elevate your brand? Get in touch and let's start building your success story.
          </p>

          {/* Contact methods */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              marginTop: '50px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '25px',
                  background: 'rgba(59, 130, 246, 0.2)',
                  border: '2px solid #3b82f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                }}
              >
                📧
              </div>
              <div
                style={{
                  fontSize: 24,
                  color: '#fff',
                  display: 'flex',
                }}
              >
                hello@whatnextstudio.com
              </div>
            </div>
            
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '25px',
                  background: 'rgba(139, 92, 246, 0.2)',
                  border: '2px solid #8b5cf6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                }}
              >
                🌐
              </div>
              <div
                style={{
                  fontSize: 24,
                  color: '#fff',
                  display: 'flex',
                }}
              >
                whatnextstudio.com
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient bar */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '8px',
            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}