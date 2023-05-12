export const paths = {
  MAIN: '/',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  SET_NEW_PASSWORD: '/auth/set-new-password/:token',
  FORGOT_PASSWORD: '/auth/forgot',
  PROFILE: '/profile',
  PACKS: '/packs',
  CARDS: '/cards',
  PACKS_LIST: '/packs-list'
} as const