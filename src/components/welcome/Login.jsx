import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { KEY_ACCESS } from "../../consts/keysAccess";
import AuthContext from "../../utils/AuthContext";

export default function Login() {
  const [value, setValues] = useState(null);
  const [error, setError] = useState(false);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (KEY_ACCESS.includes(value)) {
      authContext.onLogin()
      console.log(authContext.onLogin);
      navigate("/home");
    }
    else{
      alert("error")
    }

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-96  flex-col fixed bottom-44 right-24 "
    >
      <h1 className="text-2xl mb-3 font-semibold text-center">
        Introduce clave de acceso
      </h1>
      <input
        onChange={(e) => setValues(e.target.value)}
        placeholder="*********"
        className="rounded-xl text-lg border-2 h-10 mb-5 text-center border-white bg-blueSecondary/50"
        type="text"
      />
      <div className="grid place-content-center">
        <button
          type="submit"
          className="rounded-lg py-3 px-6 border-2 border-white bg-blueSecondary/50"
        >
          Comenzar
        </button>
      </div>
    </form>
  );
}
