import React from "react";

export default class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var author = this.refs.author.value.trim();
    var title = this.refs.title.value.trim();
    if (!author || !title) {
      return;
    }
    this.props.onBookSubmit({author: author, title: title});
    this.refs.author.value = '';
    this.refs.title.value = '';
  }

  render() {
    return (
      <div className="col-sm-6">
        <form className="bookForm" onSubmit={this.handleSubmit}>
          <h3>Add a new book:</h3>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref="author" className="form-control" placeholder="Author"/>
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" ref="title" className="form-control" placeholder="Title"/>
          </div>
          <button type="submit" className="btn btn-primary">Add book</button>
        </form>
      </div>
    );
  }
}
