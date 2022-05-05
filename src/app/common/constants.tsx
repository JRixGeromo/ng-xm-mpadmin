import { environment } from "src/environments/environment";

const AUTH_TOKEN_KEY = 'auth_token';
const AUTH_ID = 'auth_id';
const ADMIN_ROLE = 'XM Admin';

// const DEFAULT_PROFILE_PICTURE = 'https://fileupload.bsg-api.tk/api/uploads/v1/af553d95-60a3-4c40-8d08-aa75158178f1';

const DEFAULT_PROFILE_PICTURE = `${environment.ANG_APP_FILE_DOMAIN}/af553d95-60a3-4c40-8d08-aa75158178f1`;

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
    name: 'Dashboard',
    route: '/',
    icon: 'xm-el-icon-s-home',
    child: false,
  },
  {
    name: 'Listings',
    route: '/listings',
    icon: 'xm-el-icon-s-listing',
    child: false,
  },
  {
    name: 'Transactions',
    route: '/transactions',
    icon: 'xm-el-icon-s-cart',
    child: false,
  },
  /* {
    name: 'Payments',
    route: '/payments',
    icon: 'xm-el-icon-s-payment',
    child: false,
  }, */
  {
    name: 'Users',
    route: '/users',
    icon: 'xm-el-icon-s-customer',
    child: false,
  },
  {
    name: 'Settings',
    route: '/settings',
    icon: 'xm-el-icon-s-settings',
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

