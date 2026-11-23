import { useCallback, useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';

function useBackgroundMusic() {
  const soundRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = useCallback(() => {
    if (!soundRef.current) {
      soundRef.current = new Howl({
        src: ['/audio/background-music.mp3'],
        html5: true,
        loop: true,
        volume: 0.35,
        onplay: () => setIsPlaying(true),
        onpause: () => setIsPlaying(false),
        onstop: () => setIsPlaying(false),
        onloaderror: () => setIsPlaying(false),
        onplayerror: () => setIsPlaying(false),
      });
    }

    soundRef.current.play();
  }, []);

  const pause = useCallback(() => {
    soundRef.current?.pause();
  }, []);

  const toggle = useCallback(() => {
    if (soundRef.current?.playing()) {
      pause();
    } else {
      play();
    }
  }, [play, pause]);

  useEffect(() => {
    return () => {
      soundRef.current?.unload();
      soundRef.current = null;
    };
  }, []);

  return {
    play,
    pause,
    toggle,
    isPlaying,
  };
}

export default useBackgroundMusic;
