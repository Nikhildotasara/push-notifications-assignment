// import React from "react";

// import { GoogleLogin } from "@react-oauth/google";

// import "./styles.css";

// function FirstScreen() {
//   const onSuccess = () => {};

//   const onFailure = () => {};

//   return (
//     <div className="firstScreenContainer">
//       <h1 className="firstScreenHeading">Create and subscribe to alerts</h1>
//       {/* <button className="loginButton">Login and get started</button> */}

//       <GoogleLogin
//         onSuccess={onSuccess}
//         onFailure={onFailure}
//         buttonText="Login"
//       />
//     </div>
//   );
// }

// export default FirstScreen;

import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import "./styles.css";

function FirstScreen() {
  const onSuccess = (response) => {
    console.log("Login Success:", response);
    // Handle the successful login here, e.g., store the response token
  };

  const onFailure = (error) => {
    console.error("Login Failed:", error);
    // Handle the failed login here
  };

  return (
    <div className="firstScreenContainer">
      <h1 className="firstScreenHeading">Create and subscribe to alerts</h1>
      {/* <button className="loginButton">Login and get started</button> */}
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onFailure}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="loginButton"
          >
            Login with Google
          </button>
        )}
      />
    </div>
  );
}

export default FirstScreen;
