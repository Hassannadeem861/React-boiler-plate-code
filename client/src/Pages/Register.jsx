import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const inputHandler = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    // console.log("inputName: ", inputName);
    // console.log("inputValue: ", inputValue);

    setUser({
      ...user,
      [inputName]: inputValue,
    });

    // console.log("...user value", user);
  };

    // const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("user: ", user);

    // try {
    //   let response = await axios.post('http://localhost:8080/api/v1/register',user)
    //   console.log("register response: ",response);

    //   setUser({
    //     username: "",
    //     email: "",
    //     password: "",
    //   })

    //   if (response.ok.trim()) {
    //     toast.success(response.data.message);
           // navigate("/login");
    //   } else {
    //     toast.error("Failed to register response");
    //   }
    // } catch (error) {
    //   console.log("Client register error :", error);
    // }
  };

  return (
    <section>
      <div>
        <form onSubmit={submitHandler}>
          <h2>Registration Form</h2>
          <div>
            <label htmlFor="username">username:</label>
            <input
              type="text"
              className="username"
              id="username"
              required
              placeholder="Enter your username"
              name="username"
              value={user.username}
              onChange={inputHandler}
            />
          </div>
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
  );
};

export default Register;
