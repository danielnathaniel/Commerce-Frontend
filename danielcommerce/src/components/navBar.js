import { NavLink } from "react-router-dom";
import Profile from "./Profile";
import GlobalProductStyle from "./Container.styled";

const NavBar = () => {
  return (
    <div>
      <GlobalProductStyle />
      <h1>DANIEL COMMERCE</h1>
      <Profile />
      <h3>
        <NavLink to="/">HOME</NavLink>
      </h3>
    </div>
  );
};
export default NavBar;
