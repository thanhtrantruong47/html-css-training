import Link from "next/link";

export default function Login() {
  return (
    <div className="wrapper-login">
      <div className="login">
        <h2 className="login__title">Create An Account</h2>
        <p className="login__desc">
          Create an account to enjoy all the services without any ads for free!
        </p>
        <form className="login__form" action="">
          <input
            className="login__form-input"
            type="text"
            name="email"
            placeholder="Email address"
          />
          <input
            className="login__form-input"
            type="password"
            name="password"
            placeholder="Password"
          />
        </form>
        <button className="login__btn">Create Account</button>
        <div className="login__action">
          <p className="login__sign-in">Already Have An Account? </p>
          <Link href={"/login"} className="login__link">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
