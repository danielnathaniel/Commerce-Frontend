import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import GlobalProductStyle from "./Container.styled";

const NavBar = () => {
  return (
    <div>
      <GlobalProductStyle />
      <h1>DANIEL COMMERCE</h1>
      <Profile />
    </div>
  );
};
export default NavBar;
