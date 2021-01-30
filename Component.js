// Component is the parent
class Component {
  constructor (title) {
    this.props = {};
    this.props.title = title;
  }

  render () {
    // Child objects define their own render() methods
    return `<h1>${this.props.title}</h1>`;
  }
}

export default Component;
