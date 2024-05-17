import React from 'react';
import style from "./style.module.css";
import Navi from '../Toolbar/nav';
const Login = () => {
  return (
    <div className={style.loginContainer}>
      <form className={style.loginForm}>
        <h2>Нэвтрэх</h2>
        <div className={style.formGroup}>
          <label htmlFor="email">И-Мэйл</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password">Нууц үг</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className={style.loginButton}>Нэвтрэх</button>
        <p className={style.registerLink}>
          Бүртгэлгүй юу? <a href="/register">Энд дарж бүртгүүлнэ үү!</a>
        </p>
      </form>
    </div>
  );
};

export default Login;