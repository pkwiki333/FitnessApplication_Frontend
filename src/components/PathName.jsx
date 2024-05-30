import { useLocation } from "react-router";

export default function PathName() {
  const { pathname } = useLocation();
  let path = pathname.split("/")[1];
  path = path.charAt(0).toUpperCase() + path.slice(1);
  return path === "" ? (path = "Exercises") : path.replace("_", " ");
}
