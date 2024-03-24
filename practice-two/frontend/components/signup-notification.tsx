export function SignUpNotification() {
  return (
    <div>
      <div className="sign-up">
        <div className="sign-up__item container">
          <p className="sign-up__desc">
            Sign up and get 20% off to your first order.{" "}
            <a className="sign-up__advertise" href="#">
              Sign Up Now
            </a>
          </p>
          <a
            className="sign-up__off icon-off"
            aria-label="icon-off"
            href="#"
          ></a>
        </div>
      </div>
    </div>
  );
}
