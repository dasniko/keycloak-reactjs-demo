import PropTypes from 'prop-types'
import UserService from "../services/UserService";

export default function RenderOnRole({ roles, children }) {
  if (!UserService.hasRole(roles))
    return null;

  return children;
}

RenderOnRole.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
}
