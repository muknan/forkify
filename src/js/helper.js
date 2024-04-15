import { TIMEOUT_DURATION } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(
        new Error(
          `Request took too long! Timeout after ${s} second (Promise rejected)`
        )
      );
    }, s * 1000);
  });
};

<<<<<<< HEAD
export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_DURATION)]);

    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

/*
=======
>>>>>>> b93b0d7d9ffec3dc904939468aeab7ab0407253c
export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_DURATION)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
<<<<<<< HEAD

export const sendJSON = async function (url, uploadData) {
  try {
    const res = await Promise.race([
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(uploadData),
      }),
      timeout(TIMEOUT_DURATION),
    ]);

    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
*/
=======
>>>>>>> b93b0d7d9ffec3dc904939468aeab7ab0407253c
