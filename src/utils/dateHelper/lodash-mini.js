export function isArray(arr) {
  return Array.isArray(arr);
}

export function isURL(uri) {
  const regex =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,}(:[0-9]{1,5})?(\/.*)?$/;
  return regex.test(uri);
}

export function isRilEmail(email) {
  const regex = /(^\w+([.+-]\w+)?([.]\w+)?[@]ril.com)$/;
  return regex.test(email);
}

export function isEmail(email) {
  const regex = /(^\w+([.+-]\w+)?([.]\w+)?[@]\w+([.]\w+)([.]\w+)?)$/;
  return regex.test(email);
}
export function isPhone(phone) {
  const regex = /^[0-9]\d{9}$/;
  return regex.test(phone);
}
export function isSamePasswords(pwd, confPwd) {
  if (pwd && confPwd) {
    return pwd === confPwd;
  } else {
    return true;
  }
}
export function minLength(str, limit) {
  if (str && str.length < limit) {
    return false;
  } else {
    return true;
  }
}
export function minMaxLength(str, min, max) {
  if (str && (str.length < min || str.length > max)) {
    return false;
  } else {
    return true;
  }
}
export function strongPassword(pwd) {
  const regex =
    /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,16}$/;
  return regex.test(pwd);
}

export function isBlank(value) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0) ||
    (Array.isArray(value) && value.length === 0)
  );
}

export function truncateString(str, limit = 25) {
  if (isBlank(str)) return '';
  if (typeof str !== 'string') return str;
  if (str.length <= limit) {
    return str;
  }
  return `${str.slice(0, limit)}...`;
}

export const debounce = (callback, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      callback(args);
    }, delay);
  };
};
