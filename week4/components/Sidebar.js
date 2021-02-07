import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
   
    let responseHTML = '<ul><li>Albert Eggstein</li><li>Attila the Hen</li><li>Attila the Hen</li><li>Dixie Chick</li><li>Gregory Peck</li><li>Mary Poopins</li></ul>';

    this.props.menu.forEach( (item) => {
      `<ul><li></li></ul>`;
      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
    });

    return responseHTML;
  }
}

export default Sidebar;
