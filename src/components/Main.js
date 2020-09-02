import {BasicElement} from '../lib/basicmodule.js'

class MyMain extends BasicElement {
    constructor(){
      super({word:'Main'})
    }

    render(state, props) {
      return `<h1>I am the ${state.word} component</h1>
      <button>Click Me</button>`;
    }

    postRender(state, props) {
      const element = this
      this.shadowRoot.querySelector('button').addEventListener('click', () => {
        element.setState({word: 'main'})
      })
    }
  }
  
  customElements.define("my-main", MyMain);
