import PropTypes from 'prop-types'
import { Route } from "react-router-dom";
import UserService from "../services/UserService";
import NotAllowed from "./NotAllowed";

const RolesRoute = ({ roles, children, ...rest }) => (
  <Route {...rest}>
    {UserService.hasRole(roles) ? children : <NotAllowed/>}
  </Route>
)

RolesRoute.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default RolesRoute
