import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? (
    <div>
      {/* <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p> */}
      <h4>STATUS: LOGGED IN</h4>
      <br></br>
    </div>
  ) : (
    <>
      <h4>STATUS: NOT LOGGED IN</h4>
      <h5>*Please Log In To Add/Delete/Update Cart*</h5>
    </>
  );
};

export default Profile;
