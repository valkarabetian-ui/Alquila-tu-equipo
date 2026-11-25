const fs = require('node:fs');
let app = fs.readFileSync('app.js', 'utf8');
function replaceBetween(start, end, replacement) {
  const from = app.indexOf(start);
  const to = app.indexOf(end, from);
  if (from < 0 || to < 0) throw new Error(`Could not locate ${start}`);
  app = app.slice(0, from) + replacement.trim() + app.slice(to);
}
replaceBetween('function q({current:A,onNavigate:t})', 'let C="ALQUILA TU EQUIPO"', fs.readFileSync('header-function.js', 'utf8'));
replaceBetween('function W({onNavigate:A})', 'var S=I("aIIwE");function h()', fs.readFileSync('home-function.js', 'utf8'));
fs.writeFileSync('app.js', app, 'utf8');
console.log('Updated navigation and homepage.');
