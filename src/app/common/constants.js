const AUTH_TOKEN_KEY = 'auth_token';
const AUTH_ID = 'auth_id';
const ADMIN_ROLE = 'XM Admin';

// const DEFAULT_PROFILE_PICTURE = 'https://fileupload.bsg-api.tk/api/uploads/v1/af553d95-60a3-4c40-8d08-aa75158178f1';

const DEFAULT_PROFILE_PICTURE = `${process.env.VUE_APP_FILE_DOMAIN}/af553d95-60a3-4c40-8d08-aa75158178f1`;

const ARTWORKS_SIZE = 100 * 1024 * 1024; // Convert MB to Byte
const ARTWORKS_SUPPORTED_FORMATS = [
  'image/jpg',
  'image/jpeg',
  'image/gif',
  'image/png',
  'image/svg+xml',
  'image/webp',
  'image/avif',
  'image/apng',
  'video/x-flv',
  'video/mp4',
  'application/x-mpegURL',
  'video/MP2T',
  'video/3gpp',
  'video/quicktime',
  'video/x-msvideo',
  'video/x-ms-wmv',
];
const IMAGE_FORMAT = [
  'image/jpg',
  'image/jpeg',
  'image/gif',
  'image/png',
  'image/svg+xml',
  'image/webp',
  'image/avif',
  'image/apng',
];
const VIDEO_FORMAT = [
  'video/x-flv',
  'video/mp4',
  'application/x-mpegURL',
  'video/MP2T',
  'video/3gpp',
  'video/quicktime',
  'video/x-msvideo',
  'video/x-ms-wmv',
];
const NAV_MENU = [
  {
    name: 'Home',
    route: '/',
    // icon: 'xm-el-icon-s-home',
    child: false,
  },
  {
    name: 'Series',
    route: '/categories',
    child: false,
  },
  {
    name: 'Characters',
    route: '/categories',
    child: false,
  },
  {
    name: 'Scales',
    route: '/license',
    child: false,
  },
  {
    name: 'Licenses',
    route: '/license',
    child: false,
  },
];

const PROFILE_NAV_MENU = [
  {
    name: 'Log in',
    route: '/login',
    child: false,
    needLogin: false,
  },
  {
    name: 'Sign Up',
    route: '/signup',
    child: false,
    needLogin: false,
  },
  {
    name: 'Chat',
    route: '/chat',
    child: false,
    needLogin: true,
  },
  {
    name: 'Listings',
    route: '/profile/listings',
    child: false,
    needLogin: true,
  },
  {
    name: 'Transactions',
    route: '/profile/transactions',
    child: false,
    needLogin: true,
  },
  {
    name: 'Likes',
    route: '/profile/likes',
    child: false,
    needLogin: true,
  },
  {
    name: 'Reviews',
    route: '/profile/reviews',
    child: false,
    needLogin: true,
  },
  {
    name: 'Settings',
    route: '/profile/settings',
    child: false,
    needLogin: true,
  },
  {
    name: 'Log Out',
    route: '/logout',
    child: false,
    needLogin: true,
  },
];

const CONFIGURATION_NAMES = {
  productSeries: 'Product Series',
  productCharacters: 'Product Characters',
  productScale: 'Product Scale',
  productLicense: 'Product License',
  productDistributors: 'Product Distributors',
};

export {
  AUTH_TOKEN_KEY,
  AUTH_ID,
  ADMIN_ROLE,
  DEFAULT_PROFILE_PICTURE,
  ARTWORKS_SIZE,
  ARTWORKS_SUPPORTED_FORMATS,
  IMAGE_FORMAT,
  VIDEO_FORMAT,
  NAV_MENU,
  PROFILE_NAV_MENU,
  CONFIGURATION_NAMES,
};
