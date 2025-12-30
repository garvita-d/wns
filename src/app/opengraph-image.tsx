import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'What Next Studio - Take Your Brand Global';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          position: 'relative',
        }}
      >
        {/* Background gradient effect */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            display: 'flex',
          }}
        />
        
        {/* Content Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
            zIndex: 10,
          }}
        >
          {/* Logo placeholder - you can replace with actual logo */}
          <div
            style={{
              display: 'flex',
              fontSize: 48,
              fontWeight: 'bold',
              color: '#fff',
              marginBottom: '40px',
              letterSpacing: '-0.02em',
            }}
          >
            WHAT NEXT STUDIO
          </div>

          {/* Main Heading */}
          <h1
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#fff',
              margin: 0,
              lineHeight: 1.1,
              textAlign: 'center',
              maxWidth: '900px',
            }}
          >
            Take Your Brand Global
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontSize: 32,
              color: '#a3a3a3',
              margin: '30px 0 0 0',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            Elevate your brand to global heights with creative strategies
          </p>

          {/* Bottom accent line */}
          <div
            style={{
              display: 'flex',
              width: '200px',
              height: '6px',
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
              marginTop: '50px',
              borderRadius: '3px',
            }}
          />
        </div>

        {/* Corner decoration */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle at bottom right, rgba(139, 92, 246, 0.15), transparent)',
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}