import UserService from "../services/UserService";

export default function RenderOnAnonymous({ children }) {
  if (!UserService.isLoggedIn())
    return children;

  return null;
}
