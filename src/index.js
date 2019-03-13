import _ from 'lodash';
import './style/index.css'; // loader=> css-loader module, style-loader
import './style/a.scss';
import axios from 'axios';

import { e, f, j } from './b';

import $ from 'jquery';

function createDomElemete() {
  var dom = document.createElement('div');
  dom.innerHTML = _.join(['aicoder.com', ' 好! ', '线下实习'], '');
  // dom.className = 'box';
  dom.classList.add('box');
  return dom;
}

console.log('111151888');

var divDom = createDomElemete();

document.body.appendChild(divDom);

console.log('33335200000');

class Demo {
  show() {
    console.log('name: ', this.Name);
  }

  get Name() {
    return this._name;
  }

  set Name(v) {
    this._name = `${v}万岁wswws`;
  }
}

let d = new Demo();
d.Name = '柯文';
d.show();

let [a, b, c] = [1, 2, 3];
console.log('a: ', a);
console.log('b: ', b);
console.log('c: ', c);

console.log('e: ', e);
console.log('f: ', f);
console.log('j: ', j);

// 发送ajax请求数据
axios.get('/api/getNewsCategory').then(res => console.log('res: ', res));

$(() => {
  console.log('jquery');
  $('.box').click(() => {
    alert(1);
  });
});
