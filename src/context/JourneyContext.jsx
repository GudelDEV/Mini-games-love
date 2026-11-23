import { createContext, useEffect, useReducer } from 'react';

import { initialJourneyState, journeyReducer } from './journeyReducer';

export const JourneyContext = createContext(null);

const STORAGE_KEY = 'graduation-journey-progress';

const validChapters = (value) =>
  Array.isArray(value) && value.every((chapter) => Number.isInteger(chapter) && chapter >= 0 && chapter <= 6);

const validCards = (value) => Array.isArray(value) && value.every((card) => ['A', 'B'].includes(card));

function getInitialState() {
  try {
    const savedProgress = localStorage.getItem(STORAGE_KEY);

    if (!savedProgress) return initialJourneyState;

    const parsed = JSON.parse(savedProgress);

    const validPages = ['welcome', 'code', 'puzzle', 'final'];

    if (
      !validPages.includes(parsed.currentPage) ||
      !Number.isInteger(parsed.currentChapter) ||
      parsed.currentChapter < 0 ||
      parsed.currentChapter > 6 ||
      !validChapters(parsed.completedChapters) ||
      !validCards(parsed.openedCards) ||
      typeof parsed.error !== 'string'
    ) {
      return initialJourneyState;
    }

    return {
      ...initialJourneyState,
      ...parsed,
    };
  } catch {
    return initialJourneyState;
  }
}

export function JourneyProvider({ children }) {
  const [state, dispatch] = useReducer(journeyReducer, undefined, getInitialState);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save journey:', error);
    }
  }, [state]);

  return <JourneyContext.Provider value={{ state, dispatch }}>{children}</JourneyContext.Provider>;
}
