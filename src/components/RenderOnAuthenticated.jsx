import UserService from "../services/UserService";

export default function RenderOnAuthenticated({ children }) {
  if (UserService.isLoggedIn())
    return children;

  return null;
}
