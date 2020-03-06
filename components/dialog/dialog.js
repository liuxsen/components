const dialogHtml = require('./dialog.html');

console.log(dialogHtml);
const tempate = document.createElement('div');
tempate.innerHTML = dialogHtml
const body = document.getElementsByTagName('body')[0];

body.appendChild(tempate)

// TODO 操作dom