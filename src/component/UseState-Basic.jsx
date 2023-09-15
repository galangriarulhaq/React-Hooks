import React, { useState } from "react";

function UseStateBasic() {
  const [name, setName] = useState("Luffy");

  const handleClick = () => {
    if (name === "Luffy") {
      setName("Zorro");
    } else {
      setName("Luffy");
    }
  };
  return (
    <div className="card">
      <h4>{name}</h4>
      <button onClick={handleClick}>Ubah name</button>
    </div>
  );
}

export default UseStateBasic;
