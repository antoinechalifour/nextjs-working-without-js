import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter()
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const res = await fetch('/api/login', {
      method: 'post',
      body: new URLSearchParams(formData)
    })
    const body = await res.json()

    router.replace(body.location)
  }

  return (
    <main>
      <form action="/api/login?redirect" method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </main>
  );
}
