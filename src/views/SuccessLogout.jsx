import { useState } from 'react';

export const SuccessLogout = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      /*       await auth.signOut(); */
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sucess-login">
      {loading === false && (
        <>
          <h1>You are out!</h1>
          <button type="submit" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
    </div>
  );
};
