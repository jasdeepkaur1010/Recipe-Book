import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default Login;
// import React from 'react';

// const Login = () => {
//   return (
//     <div>
//       <h2>Login</h2>
//       <p>
//         Login Page
//       </p>
//     </div>
//   );
// };

// export default Login;
