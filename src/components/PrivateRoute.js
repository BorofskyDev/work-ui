import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Older version. Keep for reference in case you face this again
// export default function PrivateRoute({Component, ...rest }) {
//     let { currentUser } = useAuth()

//     return (
//         <Route
//             {...rest}
//             render={props => {
//                 return currentUser ? <Component {...props} /> : <Navigate to="/login" />
//             }}
//         ></Route>
//     )
// }

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/" />;
}
