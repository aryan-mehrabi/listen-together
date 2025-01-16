import { FILE_SIZE_LIMIT, FILE_TYPE_ALLOWED } from "./constants";

export const randomHash = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let result = "";
  const randomValues = new Uint32Array(length);
  window.crypto.getRandomValues(randomValues);
  randomValues.forEach((value) => {
    result += characters.charAt(value % charactersLength);
  });
  return result;
};

export const filterImageFiles = (file) =>
  file.size <= FILE_SIZE_LIMIT && FILE_TYPE_ALLOWED.includes(file.type);

export const isMobileDevice = (userAgent) => {
  const mobileRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return mobileRegex.test(userAgent);
};

export const getVideoThumbnail = (trackId) => {
  return `https://img.youtube.com/vi/${trackId}/default.jpg`;
};

export const decodeHtml = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  return doc.documentElement.textContent;
};
