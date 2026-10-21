const express = require('express');
const path = require('path');
const app = express();

const CSP = [
  "default-src 'self'",
  "style-src 'self' 'unsafe-inline' https:",
  "script-src 'self' 'unsafe-inline' https:",
  "font-src 'self' data: https:",
  "img-src 'self' data: blob: https:",
  "connect-src 'self' data: blob: https:",
  "media-src 'self' blob: https:",
  "worker-src 'self' blob:",
  "object-src 'none'"
].join('; ');

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', CSP);
  next();
});

app.use(express.static(path.join(__dirname)));
app.listen(process.env.PORT || 8080, '0.0.0.0');

//Prueba 