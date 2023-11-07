const Login = () => (
  <main className="w-100 m-auto mt-5 bg-body-secondary rounded-3 p-5" style={{ maxWidth: 460 }}>
    <h1 className="mb-3">Please sign in</h1>
    <div className="form-floating">
      <input type="email" className="form-control" id="input" placeholder="Username or email"/>
      <label htmlFor="input">Username or email</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="password" placeholder="Password"/>
      <label htmlFor="password">Password</label>
    </div>
    <button className="btn btn-primary w-100 py-2 my-3">Sign in</button>
  </main>
);

export default Login
