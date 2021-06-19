import { FormInput } from "./FormInput";

export const LoginForm = () => {
  return (
    <form
      className="card page-content form-group"
      action="/action/login"
      method="post"
    >
      <FormInput
        label="Email"
        placeholder="john.doe@example.com"
        type="email"
        name="email"
      />

      <FormInput label="Password" type="Password" name="password" />

      <div>
        <button className="block" type="submit">Login</button>
      </div>
    </form>
  );
};
