import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addBook } from "../modules/books";
import RenderOnRole from "./RenderOnRole";

const BookForm = () => {

  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!author || !title) {
      return;
    }
    dispatch(addBook({ author, title }))
      .then(() => history.push("/"))
  };

  return (
    <div className="row">
      <div className="col-sm-6">
        <form onSubmit={handleSubmit}>
          <h1>Add a new book:</h1>
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
          <RenderOnRole roles={['user']}>
            <button type="submit" className="btn btn-primary">Add book</button>
          </RenderOnRole>
        </form>
      </div>
    </div>
  );
}

export default BookForm
