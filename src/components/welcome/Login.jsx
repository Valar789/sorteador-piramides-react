import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { KEY_ACCESS } from "../../consts/keysAccess";
import GlobalContext from "../../utils/GlobalContext";

export default function Login() {
  const [value, setValues] = useState(null);
  const authContext = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (KEY_ACCESS.includes(value)) {
      authContext.onLogin()
      navigate("/home");
    }
    else{
      alert("error")
    }

  };

  return (
      
    <form
      onSubmit={handleSubmit}
      className="flex flex-col"
    >
      
      <h1 className="text-md text-left mb-3 font-normal">
        Ingresa tu código de acceso
      </h1>
      

      <div className="grid grid-cols-12">
      <input
        onChange={(e) => setValues(e.target.value)}
        placeholder="Código de acceso"
        className="col-span-8 rounded-xl text-lg border-2 h-12 mb-5 px-2 right-10 border-white bg-blueSecondary/50"
        type="text"
      />
        <button
          type="submit"
          className="mx-2 col-span-4 rounded-lg mb-5 border-2 h-12 font-medium border-redborderbuttons bg-redbuttons"
        >
          Ingresar
        </button>
        </div>
    </form>

  );
}
