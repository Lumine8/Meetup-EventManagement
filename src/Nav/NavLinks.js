import { Link } from "react-router-dom";
import image from "./meetup.svg";

export default function NavLink() {
  return (
    <nav style={{ textAlign: "left", margin: "1rem 5rem" }}>
      <Link to="/">
        <img src={image} alt="logo" />
      </Link>
    </nav>
  );
}
