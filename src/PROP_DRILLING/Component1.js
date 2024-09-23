import React, { useState } from "react";
import Component2 from "./Component2";
import { UserContext } from "./UserContext";
const userData = { id: 101, name: "Faima Ahmed" };
function Component1(props) {
  const [user, setUser] = useState(userData);
  const [text, setText] = useState("hello i am text");
  return (
    <UserContext.Provider value={{ user, text }}>
      <Component2 />
    </UserContext.Provider>
  );
}

export default Component1;
