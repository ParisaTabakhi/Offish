export const ROUTES = {
  HOME: '/',
  CATEGORY: '/category',
  ARTISTS: '/artists',
  ABOUT: '/about',
  BOOKING: '/booking',
  ARTIST: '/artist',
  AUTH: '/auth',
  CONTACT: '/contact',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];