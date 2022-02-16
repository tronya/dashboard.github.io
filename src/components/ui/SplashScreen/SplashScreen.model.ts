export const setSplashScreenToLocalStorage = (
  watched: boolean = true
): void => {
  window.localStorage.setItem('splashScreenViewed', String(watched));
};
export const getSplashScreen = (): boolean => {
  return Boolean(localStorage.getItem('splashScreenViewed'));
};
