import * as React from "react";
import User, { UserContainer, UserSubscribe } from "../UserProvider/UserProvider";

const DevControls = () => {
  return (
    <UserSubscribe to={[User]}>
     { (user: UserContainer) => (
          <div>
            <button onClick={()=> user.login()}>Login</button>
            <button onClick={()=> user.logout()}>Logout</button>
          </div>
        )
     }
    </UserSubscribe>
  )
}

export default DevControls