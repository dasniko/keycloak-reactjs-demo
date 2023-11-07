import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="my-5 p-5 bg-body-secondary rounded-3">
      <h1 className="text-body-emphasis">Hello Anonymous!</h1>
      <p className="lead">Please authenticate yourself!</p>
      <p>
        <button className="btn btn-lg btn-success" onClick={() => UserService.doLogin()}>Login</button>
      </p>
      <p>
        <button className="btn btn-lg btn-danger" onClick={() => navigate('/login')}>Login</button>
      </p>
      <p>
        <button className="btn btn-lg btn-warning"
                onClick={() => UserService.doLogin({ acr: { values: ['gold'], essential: true } })}>
          Login (Gold)
        </button>
      </p>
    </div>
  );
}

export default Welcome
