import {BasicElement} from '../lib/basicmodule.js'

class MyFooter extends BasicElement {
    render(state, props) {
      return `<h1>I am the ${props.word} component</h1>`;
    }
  }
  
  customElements.define("my-footer", MyFooter);
