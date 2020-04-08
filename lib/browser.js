if (typeof window !== "undefined") {
  module.exports = window.FormData;
} else {
  console.warn('isomorphic-form-data will not work properly in an environment without window, make sure you are using it from the main thread')
}
