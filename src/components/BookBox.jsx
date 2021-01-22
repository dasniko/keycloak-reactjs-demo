import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import BookForm from "./BookForm";
import BookList from "./BookList";
import {addBook, allBooks, deleteBook} from "../modules/books";
import UserService from "../services/UserService";
import RenderOnRole from "./RenderOnRole";
import RenderOnAuthenticated from "./RenderOnAuthenticated";
import RenderOnAnonymous from "./RenderOnAnonymous";

export default function BookBox() {

  const dispatch = useDispatch();
  const { books } = useSelector((state) => state);

  useEffect(() => {
    dispatch(allBooks())
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <RenderOnAnonymous>
        <div className="bookBox row">
          <h1>
            Hello Anonymous, please login!&nbsp;
            <button className="btn btn-warning" onClick={UserService.doLogin}>Login</button>
          </h1>
        </div>
      </RenderOnAnonymous>
      <RenderOnAuthenticated>
        <div className="bookBox row">
          <h1>
            Welcome {UserService.getUsername()}&nbsp;
            <button className="btn btn-success" onClick={UserService.doLogout}>Logout</button>
          </h1>
          <h1>Best Books ever!</h1>
          <hr/>
          <BookList books={books} onBookDelete={(book) => dispatch(deleteBook(book))}/>
          <RenderOnRole roles={['user']}>
            <BookForm onBookSubmit={(book) => dispatch(addBook(book))}/>
          </RenderOnRole>
        </div>
      </RenderOnAuthenticated>
    </>
  );
}
