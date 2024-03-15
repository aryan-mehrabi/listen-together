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
