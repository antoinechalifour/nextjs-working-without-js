import Cookies from "cookies";

const { AUTH_USER, AUTH_PASSWORD } = process.env;

export default function login(req, res) {
  const { email, password } = req.body;

  if (email === AUTH_USER && password === AUTH_PASSWORD) {
    const cookies = new Cookies(req, res);
    cookies.set("auth", "ok");

    return res.redirect(302, "/");
  }

  return res.redirect(302, "/login?invalid_credentials");
}
