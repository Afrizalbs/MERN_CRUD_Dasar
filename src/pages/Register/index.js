import React from "react";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import "./register.scss";

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} alt="background" className="bg-register" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full Name" placeholder="masukan nama lengkap anda" />
        <Gap height={20} />
        <Input label="Email" placeholder="masukan email anda yang aktif" />
        <Gap height={20} />
        <Input label="Password" placeholder="masukan password" />
        <Gap height={50} />
        <Button label="Register" />
        <Link label="Kembali ke Login" />
      </div>
    </div>
  );
};

export default Register;
