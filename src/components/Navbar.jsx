import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">APP CHAT</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
