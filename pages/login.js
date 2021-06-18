export default function Login() {
  return (
    <main>
      <form action="/api/login" method="post">
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
