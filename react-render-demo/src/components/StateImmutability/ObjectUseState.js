import React, { useState } from "react";

const initState = {
  fname: "Abu",
  lname: "Hamza",
};

export const ObjectUseState = () => {
  const [person, setPerson] = useState(initState);

  const changeName = () => {
    // person.fname = "Abu",
    // person.lname = "Zar",
    // setPerson(person);
    const newPerson = { ...person };
    newPerson.fname = "Abu";
    newPerson.lname = "Zar";
    setPerson(newPerson);
  };

  console.log("ObjectUseState Render");

  return (
    <div>
      <button onClick={changeName}>
        {person.fname} {person.lname}
      </button>
    </div>
  );
};
