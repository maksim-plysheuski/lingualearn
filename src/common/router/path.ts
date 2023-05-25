export const paths = {
  MAIN: '/',
  AUTH: '/auth',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  SET_NEW_PASSWORD: '/auth/set-new-password/:token',
  FORGOT_PASSWORD: '/auth/forgot',
  CHECK_EMAIL: '/auth/check-email',
  PROFILE: '/profile',
  PACKS: '/packs',
  CARDS: '/cards',
} as const