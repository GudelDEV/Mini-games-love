import { useEffect } from 'react';
import confetti from 'canvas-confetti';

function ConfettiCelebration() {
  useEffect(() => {
    const colors = ['#E8AAB8', '#D8B4E2', '#F3D9C4', '#C5D8C0', '#F8E8A8', '#FFFFFF'];

    const duration = 3500;
    const end = Date.now() + duration;

    const timer = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(timer);
        return;
      }

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        startVelocity: 45,
        origin: { x: 0, y: 0.65 },
        colors,
        gravity: 0.8,
        ticks: 180,
        scalar: 0.9,
      });

      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        startVelocity: 45,
        origin: { x: 1, y: 0.65 },
        colors,
        gravity: 0.8,
        ticks: 180,
        scalar: 0.9,
      });
    }, 250);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return null;
}

export default ConfettiCelebration;
