import { useRouter } from "next/router";
import { FormInput } from "./FormInput";

const useLoginForm = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const res = await fetch("/api/login", {
      method: "post",
      body: new URLSearchParams(formData),
    });
    const body = await res.json();

    router.replace(body.location);
  };

  return { handleSubmit };
};

export const LoginForm = () => {
  const { handleSubmit } = useLoginForm();

  return (
    <form
      className="card page-content form-group"
      action="/api/login?redirect=true"
      method="post"
      onSubmit={handleSubmit}
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
