import { useEffect, useRef, useState } from 'react';
import vid from "./complete3.mp4";
import Signup from '../Page/Signup';

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showSignup, setShowSignup] = useState(false);
  const loopCount = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      loopCount.current += 1;
      
      if (loopCount.current >= 2) {
        video.pause();
        setShowSignup(true);
      }
    };

    // Set up event listeners
    video.addEventListener('ended', handleVideoEnd);
    
    // Try to autoplay (muted videos can usually autoplay)
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log('Autoplay blocked:', error);
        // Show a play button if autoplay is blocked
      });
    }

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* Video Background */}
      <div className={`transition-all duration-500 ${showSignup ? 'opacity-0' : 'opacity-100'}`}>
        <video
          ref={videoRef}
          src={vid}
          autoPlay
          muted
          loop
          className="w-full h-screen object-center object-fill"
        />
      </div>

      {/* Signup Page - Shows after 2 video loops */}
      {showSignup && (
        <div className="absolute top-0 left-0 w-full h-full">
          <Signup />
        </div>
      )}

      {/* Skip button */}
      {!showSignup && (
        <button 
          onClick={() => setShowSignup(true)}
          className="absolute bottom-8 right-8 z-20 px-4 py-2 bg-white/20 text-white rounded-lg backdrop-blur-sm hover:bg-white/30 transition"
        >
          Skip Intro
        </button>
      )}
    </div>
  );
};

export default Home;