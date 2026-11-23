import { RotateCcw } from 'lucide-react';
import { useJourney } from '../../hooks/useJourney';

function ResetJourneyButton() {
  const { dispatch } = useJourney();

  function handleReset() {
    const confirmed = window.confirm('Apakah kamu yakin ingin mengulang perjalanan dari awal?');

    if (!confirmed) return;

    dispatch({
      type: 'RESET_JOURNEY',
    });
  }

  return (
    <button
      type="button"
      onClick={handleReset}
      className="inline-flex items-center gap-2 rounded-full border border-rose/40 px-5 py-3 text-xs text-dusty transition hover:bg-blush"
    >
      <RotateCcw size={14} />
      Restart Journey
    </button>
  );
}

export default ResetJourneyButton;
