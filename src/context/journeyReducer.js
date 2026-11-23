export const initialJourneyState = {
  currentPage: 'welcome',
  currentChapter: 0,
  completedChapters: [],
  openedCards: [],
  error: '',
};

export function journeyReducer(state, action) {
  switch (action.type) {
    case 'START_JOURNEY':
      return {
        ...state,
        currentPage: 'code',
        error: '',
      };

    case 'SUBMIT_CODE_SUCCESS':
      return {
        ...state,
        currentPage: 'puzzle',
        error: '',
        openedCards: [],
      };

    case 'SUBMIT_CODE_ERROR':
      return {
        ...state,
        error: action.payload,
      };

    case 'OPEN_CARD':
      if (state.openedCards.includes(action.payload)) {
        return state;
      }

      return {
        ...state,
        openedCards: [...state.openedCards, action.payload],
      };

    case 'COMPLETE_CHAPTER':
      return {
        ...state,
        completedChapters: [...new Set([...state.completedChapters, state.currentChapter])],
        currentPage: state.currentChapter === 6 ? 'final' : 'code',
        currentChapter: state.currentChapter === 6 ? state.currentChapter : state.currentChapter + 1,
        openedCards: [],
        error: '',
      };

    case 'RESTORE_PROGRESS':
      return {
        ...state,
        ...action.payload,
      };

    case 'RESET_JOURNEY':
      return initialJourneyState;

    default:
      return state;
  }
}
