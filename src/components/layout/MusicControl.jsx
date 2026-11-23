import { Music2, VolumeX } from 'lucide-react';

function MusicControl({ isPlaying, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isPlaying ? 'Matikan musik' : 'Nyalakan musik'}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-rose/40 bg-white/90 text-dusty shadow-lg shadow-rose/10 backdrop-blur transition hover:scale-105 hover:bg-blush"
    >
      {isPlaying ? <Music2 size={20} /> : <VolumeX size={20} />}
    </button>
  );
}

export default MusicControl;
