import Cookies from 'cookies'

export default function (req, res) {
    const { email, password } = req.body

    if (email === 'antoine.chalifour@gmail.com' && password === '1234') {
        const cookies = new Cookies(req, res)
        cookies.set('auth', 'ok')
        
        return res.redirect(302, '/')
    }

    return res.redirect('/login?invalid_credentials')
}