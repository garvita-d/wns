import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'What Next Studio Blog - Digital Marketing Insights';
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
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1), transparent 40%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.1), transparent 40%)',
            display: 'flex',
          }}
        />

        {/* Header */}
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
          <div
            style={{
              fontSize: 20,
              color: '#fff',
              background: '#3b82f6',
              padding: '12px 24px',
              borderRadius: '8px',
              display: 'flex',
            }}
          >
            BLOG
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
              fontSize: 68,
              fontWeight: 'bold',
              color: '#fff',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Insights & Strategies
          </h1>
          <h2
            style={{
              fontSize: 48,
              fontWeight: 'bold',
              color: '#a3a3a3',
              margin: '20px 0 0 0',
              lineHeight: 1.2,
            }}
          >
            for Digital Marketing Success
          </h2>

          {/* Topics tags */}
          <div
            style={{
              display: 'flex',
              gap: '15px',
              marginTop: '50px',
              flexWrap: 'wrap',
            }}
          >
            {['SEO', 'PPC', 'Social Media', 'Content', 'Analytics'].map((tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 18,
                  color: '#fff',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '10px 20px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom gradient */}
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