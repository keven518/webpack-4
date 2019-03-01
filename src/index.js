import _ from 'lodash';
import './style/index.css';  // loader=> css-loader module, style-loader
import './style/a.scss';

function createDomElemete() {
  var dom = document.createElement('div');
  dom.innerHTML = _.join(['aicoder.com', ' 好! ', '线下实习'], '');
  // dom.className = 'box';
  dom.classList.add('box');
  return dom;
}

var divDom = createDomElemete();

document.body.appendChild(divDom);