import { useState } from 'react';
import { Link } from 'react-router-dom';
export const Login = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    let newInput = { [e.target.name]: e.target.value };
    setData({
      ...data,
      ...newInput,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      /* await auth.signInWithEmailAndPassword(data.email, data.password); */
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <h1>Log in</h1>
      <input
        type="email"
        id="email"
        placeholder="Email"
        onChange={(event) => handleInput(event)}
      />
      <input
        type="password"
        id="password"
        placeholder="Password"
        onChange={(event) => handleInput(event)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <>
        <p>Already have an account?</p>
        <Link to="/signup">Sign up</Link>
      </>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
    </div>
  );
};
