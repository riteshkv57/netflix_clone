import React, { useEffect, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { useUser } from "../context/user";
import toast from 'react-hot-toast';
import "../assets/css/Navbar.css";

function Navbar() {
  const [user, setUser] = useUser();
  const [show, handleShow] = useState(false);
  const [image, setImage] = useState("https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png");

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setImage(result.user.photoURL);
        setUser(result.user);
        toast.success(`Welcome ${result.user.displayName}!`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="img_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix logo"
      ></img>

      <button onClick={signInWithGoogle} className="profile_logo">
        <img className="profile_logo" src={image} alt="profile_logo" />
      </button>
    </div>
  );
}

export default Navbar;
