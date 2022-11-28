import { useState } from "react";
export const Signup = () => {
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
/*       await auth.createUserWithEmailAndPassword(data.email, data.password); */
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup">
      <h1>Sign up</h1>
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
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
    </div>
  );
};
