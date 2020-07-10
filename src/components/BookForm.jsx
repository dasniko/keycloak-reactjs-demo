import React from "react";

export default function BookForm({onBookSubmit}) {

  const [author, setAuthor] = React.useState('');
  const [title, setTitle] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!author || !title) {
      return;
    }
    onBookSubmit({author, title});
    setAuthor('');
    setTitle('');
  };

  return (
    <div className="col-sm-6">
      <form className="bookForm" onSubmit={handleSubmit}>
        <h3>Add a new book:</h3>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input type="text" className="form-control" placeholder="Author"
                 value={author} onChange={(e) => setAuthor(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" placeholder="Title"
                 value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Add book</button>
      </form>
    </div>
  );
}
