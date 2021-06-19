import Cookies from "cookies";

export default function login(req, res) {
  const { email, password } = req.body;

  if (email === "antoine.chalifour@gmail.com" && password === "1234") {
    const cookies = new Cookies(req, res);
    cookies.set("auth", "ok");

    return res.redirect(302, "/");
  }

  return res.redirect(302, "/login?invalid_credentials");
}
