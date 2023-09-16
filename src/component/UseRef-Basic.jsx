import React, { useRef, useState } from "react";

function UseRefBasic() {
  const [count, setCount] = useState(0);
  const rerender = useRef(1);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClickRef = () => {
    rerender.current = rerender.current + 4;
  };

  const cekValue = () => {
    console.log("Value : ");
    console.log({ count, rerender: rerender.current });
  };

  return (
    <div>
      <h4> useState : {count}</h4>
      <button className="btn" onClick={handleClick}>
        change
      </button>
      <h4> useRef : {rerender.current}</h4>
      <button className="btn" onClick={handleClickRef}>
        change
      </button>
      <h4> cek Value : </h4>
      <button className="btn" onClick={cekValue}>
        value
      </button>
    </div>
  );
}

export default UseRefBasic;
