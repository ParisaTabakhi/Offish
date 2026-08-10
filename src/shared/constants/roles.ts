export const USER_ROLES = {
  USER: 0,
  ARTIST: 1,
  PLANNER: 2,
  ADMIN: 3,
} as const;

export type UserRoleType = (typeof USER_ROLES)[keyof typeof USER_ROLES];

export const ROLE_LABELS: Record<number, string> = {
  [USER_ROLES.USER]: 'کاربر',
  [USER_ROLES.ARTIST]: 'هنرمند',
  [USER_ROLES.PLANNER]: 'پلنر',
  [USER_ROLES.ADMIN]: 'ادمین',
};

export const ROLE_ROUTES: Record<number, string> = {
  [USER_ROLES.ARTIST]: '/dashboard/artist',
  [USER_ROLES.PLANNER]: '/dashboard/employer',
  [USER_ROLES.ADMIN]: '/dashboard/admin',
  [USER_ROLES.USER]: '/',
};