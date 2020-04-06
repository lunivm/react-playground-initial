export default function getConfig(key) {
  const res = {
    apiUrl: process.env.REACT_APP_API_URL
  };

  return key ? res[key] : res;
}
