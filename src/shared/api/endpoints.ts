export const ENDPOINTS = {
  CATEGORIES: {
    GROUPS: '/CategoryGroupQuery',
    GROUP_DETAIL: (id: string) => `/CategoryGroupQuery/${id}`,

    GROUPS_HIERARCHY: '/CategoryGroupQuery/hierarchy',

    LIST: '/CategoryQuery',

    ARTISTS_BY_SUBCATEGORY: (subCategoryId: string) =>
      `/subcategories/${subCategoryId}/artists`,
  },

 ARTISTS: {
    LIST: '/artists',
    DETAIL: (id: string) => `/ArtistQuery/${id}`,
    FEATURED: '/artists/featured',
    BY_SUBCATEGORY: (subcategoryId: string) =>
      `/ArtistQuery/by-category/${subcategoryId}`,
  },

  REQUESTS: {
    LIST: '/requests',
    DETAIL: (id: string) => `/requests/${id}`,
    CREATE: '/requests',
    UPDATE: (id: string) => `/requests/${id}`,
    OFFER_PRICE: (id: string) => `/requests/${id}/offer`,
  },

  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
  },

  PROFILE: {
    GET: '/profile',
    UPDATE: '/profile',
  },

  BOOKING: {
    CREATE: '/booking',
  },
} as const;