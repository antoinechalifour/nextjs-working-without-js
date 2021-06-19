import { FormInput } from "./FormInput";

export const LoginForm = ({ isFailed }) => (
  <form
    className="card page-content form-group"
    action="/action/login"
    method="post"
  >
    {isFailed && <p className="alert alert-danger">Could not log you in. Please check your credentials.</p>}

    <FormInput
      label="Email"
      placeholder="john.doe@example.com"
      type="email"
      name="email"
    />

    <FormInput label="Password" type="Password" name="password" />

    <div>
      <button className="button block" type="submit">
        Login
      </button>
    </div>
  </form>
);
