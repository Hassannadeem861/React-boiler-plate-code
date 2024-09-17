import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value.trim();  // Trim input while typing;
    // console.log("inputName: ", inputName);
    // console.log("inputValue: ", inputValue);

    setUser({ ...user, [inputName]: inputValue });
  };

  // const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("user: ", user);
    
    setUser({
        email: "",
        password: "",
      });

    // try {
    //   const response = await axios.post('http://localhost:8080/api/v1/register', user)
    //   console.log("response: ", response);

    //   setUser({
    //     email: "",
    //     password: "",
    //   });

    //   if (response.ok.trim()) {
    //     // toast.success(response.data.message)
    // navigator('/home')
    //   } else {
    //      // toast.error(response.data.error)
    //   }

    // } catch (error) {
    //   console.log("error in login: ", error);
    // }
  };

  return (
    <div>
      <section>
        <div>
          <form onSubmit={submitHandler}>
            <h2>Login Form</h2>
            <div>
              <label htmlFor="email">email:</label>
              <input
                type="email"
                className="email"
                id="email"
                required
                placeholder="Enter your email"
                name="email"
                value={user.email}
                onChange={inputHandler}
              />
            </div>
            <div>
              <label htmlFor="password">password:</label>
              <input
                type="password"
                className="password"
                id="password"
                required
                placeholder="Enter your password"
                autoComplete="off"
                name="password"
                value={user.password}
                onChange={inputHandler}
              />
            </div>
            <br />
            <button type="submit" id="button" className="button">
              Register
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
