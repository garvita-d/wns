import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Careers at What Next Studio';
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
              color: '#000',
              background: '#fff',
              padding: '12px 28px',
              borderRadius: '24px',
              display: 'flex',
              fontWeight: '600',
            }}
          >
            WE'RE HIRING!
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
            Be part of our mission
          </h1>

          <p
            style={{
              fontSize: 32,
              color: '#a3a3a3',
              margin: '30px 0 0 0',
              maxWidth: '850px',
              lineHeight: 1.3,
            }}
          >
            Join passionate people building remarkable brands. 100% remote. Full ownership.
          </p>

          {/* Open positions tags */}
          <div
            style={{
              display: 'flex',
              gap: '15px',
              marginTop: '50px',
              flexWrap: 'wrap',
            }}
          >
            {['Graphic Designer', 'Social Media Manager', 'Web Developer', 'SEO Consultant'].map((role) => (
              <div
                key={role}
                style={{
                  fontSize: 18,
                  color: '#fff',
                  background: 'rgba(59, 130, 246, 0.2)',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: '1px solid rgba(59, 130, 246, 0.4)',
                  display: 'flex',
                }}
              >
                {role}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div
          style={{
            display: 'flex',
            padding: '40px 80px',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div
            style={{
              fontSize: 22,
              color: '#a3a3a3',
              display: 'flex',
            }}
          >
            📧 hello@whatnextstudio.com
          </div>
          <div
            style={{
              fontSize: 22,
              color: '#3b82f6',
              display: 'flex',
              fontWeight: '600',
            }}
          >
            Apply Now →
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}