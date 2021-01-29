import PropTypes from 'prop-types'
import UserService from "../services/UserService";

const RenderOnRole = ({ roles, children }) => (UserService.hasRole(roles)) ? children : null;

RenderOnRole.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default RenderOnRole
