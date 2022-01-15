export default function getBaseUrl() {
  const isInDevelopmentMode = window.location.hostname === 'localhost';
  return isInDevelopmentMode ? 'http://localhost:3001/' : '/';
}
