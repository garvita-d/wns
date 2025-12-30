import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'What Next Studio Success Stories';
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
        {/* Top section */}
        <div
          style={{
            display: 'flex',
            padding: '60px 80px',
            alignItems: 'center',
            justifyContent: 'space-between',
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
          <div
            style={{
              fontSize: 28,
              color: '#3b82f6',
              marginBottom: '20px',
              fontWeight: '600',
              display: 'flex',
            }}
          >
            SUCCESS STORIES
          </div>
          
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
            Real transformations.
            <br />
            Real results.
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
            Discover how we've helped brands achieve extraordinary growth through strategic marketing.
          </p>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '60px',
              marginTop: '50px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 'bold',
                  color: '#3b82f6',
                  display: 'flex',
                }}
              >
                150%+
              </div>
              <div
                style={{
                  fontSize: 20,
                  color: '#a3a3a3',
                  display: 'flex',
                }}
              >
                Avg Growth
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 'bold',
                  color: '#8b5cf6',
                  display: 'flex',
                }}
              >
                5+
              </div>
              <div
                style={{
                  fontSize: 20,
                  color: '#a3a3a3',
                  display: 'flex',
                }}
              >
                Case Studies
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 'bold',
                  color: '#ec4899',
                  display: 'flex',
                }}
              >
                100%
              </div>
              <div
                style={{
                  fontSize: 20,
                  color: '#a3a3a3',
                  display: 'flex',
                }}
              >
                Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
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