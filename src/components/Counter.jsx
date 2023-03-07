import { useState } from "react";

export default function Counter() {
  // count is the current value of the state
  // setCount is a function that allows us to update the state. It comes from the useState hook.
  const [count, setCount] = useState(100);

  return (
    <>
      <p>Here is the current count: {count}</p>;
      <button
        type="button"
        className="rounded bg-green-500 px-2 py-4 text-white"
        // onClick is a react synthetic event. It's a way to listen for events on the DOM. It wraps the native event and adds some extra functionality.
        onClick={() => {
          console.log("clicked");
          // Prevent situations involving stale data - use the callback version of 'setState'
          // Bring in previous state AS A PARAMETER (not as a variable) & RETURN new state
          setCount((prev) => prev + 1);
        }}
      >
        Update Count
      </button>
    </>
  );
}
