import { Route, Routes } from "react-router-dom";
import BookDetails from "./BookDetails";
import BookForm from "./BookForm";
import BookList from "./BookList";
import Menu from "./Menu";
import NoMatch from "./NoMatch";
import RenderOnRole from "./RenderOnRole";
import SecretBooks from "./SecretBooks";

const BookBox = () => (
  <>
    <Menu/>
    <Routes>
      <Route exact path="/" element={<BookList/>}/>
      <Route exact path="/books/new" element={<BookForm/>}/>
      <Route path="/books/:bookId" element={<BookDetails/>}/>
      <Route path="/secret" element={
        <RenderOnRole roles={['admin']} showNotAllowed>
          <SecretBooks/>
        </RenderOnRole>
      }/>
      <Route path="*" element={<NoMatch/>}/>
    </Routes>
  </>
)

export default BookBox
