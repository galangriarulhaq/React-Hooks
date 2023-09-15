import React, { useEffect, useState } from "react";

function UseEffectBasic() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Call UseEffect");
    document.title = `Tombol udah ${count} kali di klik`;
  });

  return (
    <div>
      <h2> Hooks UseEffect </h2>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Tambah
      </button>
    </div>
  );
}

export default UseEffectBasic;
