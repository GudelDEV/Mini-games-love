import { AnimatePresence } from 'framer-motion';

import { useJourney } from './hooks/useJourney';
// import { journeyReducer } from './context/journeyReducer';

import WelcomePage from './pages/WelcomePage';
import CodePage from './pages/CodePage';
import PuzzlePage from './pages/PuzzlePage';
import FinalPage from './pages/FinalPage';

import FloatingPetals from './components/effects/FloatingPetals';
import FloralDecoration from './components/effects/FloralDecoration';
import MusicControl from './components/layout/MusicControl';
import ChapterProgress from './components/gift/ChapterProgress';
import PageTransition from './components/layout/PageTransition';

import useBackgroundMusic from './hooks/useBackgroundMusic';

import { chapters } from './data/chapters';

function App() {
  const { state, dispatch } = useJourney();

  const { currentPage, currentChapter, error } = state;

  const { play, toggle, isPlaying } = useBackgroundMusic();

  const chapter = chapters[currentChapter];

  function handleStart() {
    play();

    dispatch({
      type: 'START_JOURNEY',
    });
  }

  function handleCodeSubmit(inputCode) {
    if (inputCode === chapter.code) {
      dispatch({
        type: 'SUBMIT_CODE_SUCCESS',
      });
    } else {
      dispatch({
        type: 'SUBMIT_CODE_ERROR',
        payload: 'Hmm, sepertinya kode belum tepat. Coba lagi, ya.',
      });
    }
  }

  function handleOpenCard(cardKey) {
    dispatch({
      type: 'OPEN_CARD',
      payload: cardKey,
    });
  }

  function handleContinue() {
    dispatch({
      type: 'COMPLETE_CHAPTER',
      totalChapters: chapters.length,
    });
  }
  const showDecorations = currentPage !== 'welcome';

  return (
    <>
      {showDecorations && (
        <>
          <FloatingPetals />
          <FloralDecoration />

          <MusicControl
            isPlaying={isPlaying}
            onToggle={toggle}
          />
        </>
      )}

      {currentPage !== 'welcome' && currentPage !== 'final' && (
        <div className="fixed left-0 right-0 top-6 z-30 px-6">
          <ChapterProgress
            currentChapter={currentChapter + 1}
            totalChapters={chapters.length}
          />
        </div>
      )}

      <AnimatePresence mode="wait">
        <PageTransition
          key={currentPage}
          pageKey={currentPage}
        >
          {currentPage === 'welcome' && <WelcomePage onStart={handleStart} />}

          {currentPage === 'code' && (
            <CodePage
              chapter={chapter}
              onSubmitCode={handleCodeSubmit}
              error={error}
            />
          )}

          {currentPage === 'puzzle' && (
            <PuzzlePage
              chapter={chapter}
              openedCards={state.openedCards}
              onOpenCard={handleOpenCard}
              onContinue={handleContinue}
            />
          )}

          {currentPage === 'final' && <FinalPage />}
        </PageTransition>
      </AnimatePresence>
    </>
  );
}

export default App;
