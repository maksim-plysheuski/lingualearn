export const path = {
  MAIN: '/',
  PROFILE: '/profile',
  PACKS: '/packs',
  CARDS: '/cards/:packId',
  LEARN: '/learn/:packId',
  LOGIN: '/login',
  REGISTER: '/register',
  SET_NEW_PASSWORD: '/set-new-password/:token',
  PASSWORD_CHANGED: '/set-new-password/password-changed',
  FORGOT_PASSWORD: '/forgot',
  CHECK_EMAIL: '/check-email'
} as const