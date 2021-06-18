import Cookies from "cookies";

export default function logout(req, res) {
    const cookies = new Cookies(req, res)
    cookies.set('auth', undefined)

    res.redirect(302, '/login')
}