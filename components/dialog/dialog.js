import dialogHtml from './dialog.html';
import './dialog.css';

console.log(dialogHtml);
const tempate = document.createElement('div');
tempate.innerHTML = dialogHtml
const body = document.getElementsByTagName('body')[0];
body.appendChild(tempate)

export default class Dialog {
  constructor(){
    name: 'aaa'
  }
}

// TODO 操作dom