export const routePaths = {
  MAIN: '/',
  PROFILE: '/profile',
  PACKS: '/packs',
  CARDS: '/cards/:packId',
  LEARN: '/learn/:packId/:cardsCount',
  LOGIN: '/login',
  REGISTER: '/register',
  SET_NEW_PASSWORD: '/set-new-password/:token',
  FORGOT_PASSWORD: '/forgot',
  CHECK_EMAIL: '/check-email',
} as const