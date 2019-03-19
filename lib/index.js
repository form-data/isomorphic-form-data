const formData = require('form-data');

let hasWindow = true;
try { window } catch { hasWindow = false }
if (!hasWindow) {
  global.FormData = formData
}

module.exports = formData;
