function isMobileDevice() {
  return /iPhone|iPod|iPad|Android/i.test(window.navigator.userAgent);
}

export { isMobileDevice };
