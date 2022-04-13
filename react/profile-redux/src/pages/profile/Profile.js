import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);
  return <div>Profile</div>;
};

export default Profile;
