import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookBox from "../components/BookBox";
import Login from "./Login";
import RenderOnAnonymous from "./RenderOnAnonymous";
import RenderOnAuthenticated from "./RenderOnAuthenticated";
import Welcome from "./Welcome";

const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={
            <>
              <RenderOnAnonymous>
                <Welcome/>
              </RenderOnAnonymous>
              <RenderOnAuthenticated>
                <BookBox/>
              </RenderOnAuthenticated></>
          }/>
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
