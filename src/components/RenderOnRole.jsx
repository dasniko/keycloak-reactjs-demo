import PropTypes from 'prop-types'
import UserService from "../services/UserService";
import NotAllowed from "./NotAllowed";

const RenderOnRole = ({ roles, showNotAllowed, children }) => (
  UserService.hasRole(roles)) ? children : showNotAllowed ? <NotAllowed/> : null;

RenderOnRole.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default RenderOnRole
