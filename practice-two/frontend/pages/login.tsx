import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent } from "react";

export default function Login() {
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const response = await fetch("http://localhost:8000/users/login/", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      router.push("/");
    } else {
      const data = await response.json();
      alert(data.detail);
    }
  }

  return (
    <div className="wrapper-login">
      <div className="login">
        <h2 className="login__title">Login</h2>
        <p className="login__desc">
          Login to enjoy all the services without any ads for free!
        </p>
        <form className="login__form" action="" onSubmit={onSubmit}>
          <input
            className="login__form-input"
            type="text"
            name="username"
            placeholder="Username"
          />
          <input
            className="login__form-input"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button className="login__btn">Login</button>
        </form>
        <div className="login__action">
          <p className="login__sign-in">Already Haven't An Account? </p>
          <Link href={"/register"} className="login__link">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
