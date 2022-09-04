import React, { useState } from "react";
// import crypto from "crypto";

import { users as sampleUsers, breaches as sampleBreaches } from "../sample";

export default function LoginForm(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    loginFailed: false
  });

  const updateLogin = (val) => {
    setUser({ ...user, ...val });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // NOTE: Normally would be hooked up to the code
    // from the previous problem, but you should leave
    // this hard-coded data for now. We're mostly
    // interested in the React portion of this code.
    if (user.email === sampleUsers[0].email) {
      setUser({ ...user, loginFailed: false });
      // has no breaches
      props.onLoginSuccess({
        token: crypto.randomBytes(16).toString("hex"),
        user: sampleUsers[0]
      });
    } else if (user.email === sampleUsers[1].email) {
      setUser({ ...user, loginFailed: false });
      // has breaches
      props.onLoginSuccess({
        token: crypto.randomBytes(16).toString("hex"),
        user: sampleUsers[1],
        meta: {
          suggestPasswordChange: true,
          breachedAccounts: sampleBreaches
        }
      });
    } else {
      setUser({ ...user, loginFailed: true });
    }
    return false;
  }

   return (
     <div>
     {user.loginFailed && (
       <div className="alert alert-danger mt-3">
         The email or password you provided is incorrect. Please check your
         entry and try again.
       </div>
     )}
       <div className="py-5 text-center">
         <h2>Sign In</h2>
       </div>
       <div>
         <form onSubmit={e => handleSubmit(e)}>
           <div className="mb-3">
             <label htmlFor="email">Email</label>
             <div className="input-group">
               <input
                 type="text"
                 className="form-control"
                 id="email"
                 required
                 onChange={e => updateLogin({ email: e.target.value })}
                 value={user.email}
               />
              </div>
           </div>

           <div className="mb-3">
             <label htmlFor="password">Password</label>
             <div className="input-group">
               <input
                 type="password"
                 className="form-control"
                 id="password"
                 onChange={e => updateLogin({ password: e.target.value })}
                 required
               />
             </div>
           </div>

           <button className="btn btn-primary" type="submit">
             Sign In
           </button>
         </form>
       </div>
     </div>
   );
}
