const PATHS = {
      HOME: '/',
      NEWS: '/tin-tuc',
      NEWS_DETAIL: '/tin-tuc/:slug',
    }
    
    export const PATHS_WITH_SSR = [
      PATHS.HOME,
      PATHS.NEWS,
      PATHS.NEWS_DETAIL
    ];
    
    export default PATHS;