import { useEffect, useRef } from 'react';

const VideoHero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        style={{ objectFit: 'cover' }}
      >
        <source 
          src="https://ik.imagekit.io/ko0ec3rfg/Video.mp4?updatedAt=1761962042631" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoHero;
