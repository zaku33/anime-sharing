import {FC, forwardRef, useImperativeHandle} from "react";

type LoginBtnProps = {
  onLogin: (val: boolean) => void;
};

const LoginBtn: FC<LoginBtnProps> = (props) => {
  const {onLogin} = props;

  const requestLogin = () => {

    // TODO;
    if (true) {
      onLogin(true);
    }
  };

  return (
    <>
      <a className="w-8 h-8">
        <svg fill="none" stroke="black" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      </a>
      <button className="text-black" onClick={requestLogin}>Login</button>
    </>
  );
};
LoginBtn.displayName = 'LoginBtn';
export default LoginBtn;
