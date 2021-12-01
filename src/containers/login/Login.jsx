import React, { useEffect, useState } from "react";
import GqlLogin from "../../graphql/GqlLogin";
import { useDispatch } from "react-redux";
import { login } from "../../store/loginSlice";
import { useNavigate } from "react-router";
import Loading from "../../components/Loading";
import Header from "../../components/Header";
import AlertFailedLogin from "../../components/AlertFailedLogin";

export default function Login() {
  const { loginAcc, loading, data } = GqlLogin();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputErr = {
    email: "",
    password: "",
  };

  const [input, setInput] = useState({
    email: "",
    pass: "",
  });

  const [err, setErr] = useState(inputErr);

  const [successLogin, setSuccessLogin] = useState(true);

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  //   function validatePassword(password) {
  //     const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{3,}$/;
  //     return re.test(String(password));
  //   }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      if (validateEmail(value)) {
        setErr({
          ...err,
          email: "",
        });
      } else {
        setErr({
          ...err,
          email: "Email harus sesuai",
        });
      }
    }

    if (name === "pass") {
      if (value.length >= 3) {
        setErr({
          ...err,
          password: "",
        });
      } else {
        setErr({
          ...err,
          password: "Password harus diisi",
        });
      }
    }
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginAcc({
      variables: {
        email: input.email,
        pass: input.pass,
      },
    });
  };

  useEffect(() => {
    if (data) {
      if (data.calories_tracker_users.length === 0) {
        console.log("No user");
        setSuccessLogin(false);
      } else {
        const authLogin = data.calories_tracker_users[0].id;
        dispatch(login(authLogin));
        setSuccessLogin(true);
        console.log("User logged in");
        console.log("data", data.calories_tracker_users);
        navigate("/");
      }
    }
  }, [data, loading, dispatch, navigate]);

  console.log("input", err);
  return (
    <div>
      <Header />
      <div className="h-screen flex justify-center relative items-center">
        <div className="flex-auto px-5 py-16 rounded-md md:shadow-xl shadow-none max-w-md">
          <h1 className="text-3xl font-bold text-center">Sign in</h1>
          <h6 className="text-2xs text-center">
            Stay update your daily calorie
          </h6>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col  my-3">
              <label className="text-xl font-semibold text-left">Email</label>
              <input
                className="py-1 px-1 w-full border-2 border-blue-400 rounded-md ring-2 ring-offset-blue-400"
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="email"
              />
              <p className="text-xs text-red-500">{err.email}</p>
            </div>
            <div className="flex flex-col my-3">
              <label className="text-xl font-semibold text-left">
                Password
              </label>
              <input
                className="py-1 px-1 w-full"
                type="password"
                name="pass"
                onChange={handleChange}
                placeholder="password"
              />
              <p className="text-xs text-red-500">{err.password}</p>
            </div>
            {loading ? <Loading /> : null}
            {!successLogin ? <AlertFailedLogin /> : null}
            <button
              onClick={handleSubmit}
              className="bg-blue-500 my-5 py-2 rounded-md text-white font-bold hover:bg-yellow-light w-full"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
