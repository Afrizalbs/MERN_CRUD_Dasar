import React from "react";
import { LoginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} alt="background" className="bg-register" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="masukan email anda yang aktif" />
        <Gap height={20} />
        <Input label="Password" placeholder="masukan password" />
        <Gap height={50} />
        <Button label="Login" />
        <Link label="Belum Punya Akun ? Register Now" />
      </div>
    </div>
  );
};

export default Register;
