import Cookies from "cookies";

export default function login(req, res) {
  const { email, password } = req.body;
  console.log(req.body);

  if (email === "antoine.chalifour@gmail.com" && password === "1234") {
    const cookies = new Cookies(req, res);
    cookies.set("auth", "ok");

    if (req.query.redirect) return res.redirect(302, "/");
    else return res.json({ location: "/" });
  }

  return res.redirect(302, "/login?invalid_credentials");
}
