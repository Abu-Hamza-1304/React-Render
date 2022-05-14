import React, { useState } from "react";

const initState = ["Abu", "Hamza"];

export const ArrayUseState = () => {
  const [persons, setPersons] = useState(initState);

  const handleClick = () => {
    // persons.push("Abu");
    // persons.push("Zar");
    // setPersons(persons);
    const newPerson = [...persons];
    newPerson.push("Abu");
    newPerson.push("Zar");
    setPersons(newPerson);
  };

  console.log("ArrayUseState Render");

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {persons.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </div>
  );
};
