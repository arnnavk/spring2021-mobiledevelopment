// Import Component
import Component from "./Component.js";

// Article is a child object of Component
class Article extends Component {

  constructor (title,author,text) {
    // Send what it gets to its parent object
    super(title,author,text);
  }

  render () {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
    return (`
      <Article>
        <h1>THIS IS THE TITLE</h1>
        ${this.props.title}
        <span>${this.props.author}</span>
        <div>${this.props.text}</div>
      </Article>`
    );
    
  }

}

export default Article;
