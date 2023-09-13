import { useState } from "react";
import { add, update } from "../utils";

const url = "http://localhost:5000/people/";

function AddOrUpdatePerson({ addOrUpdate, addNewPerson, updatePerson }) {
  const [person, setPerson] = useState({});

  const setPersonHandler = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const addHandler = async () => {
    await add(url, person);
    addNewPerson(person);
  };

  const updateHandler = async () => {
    await update(url, person.id, person);
    updatePerson(person);
  };

  return (
    <>
      <h3>{addOrUpdate}</h3>
      {addOrUpdate === "update" && (
        <>
          <input
            type="text"
            placeholder="id"
            name="id"
            onInput={(e) => setPersonHandler(e)}
          />
          <br /> <br />
        </>
      )}
      <input
        type="text"
        placeholder="name"
        name="name"
        onInput={(e) => setPersonHandler(e)}
      />
      <br /> <br />
      <input
        type="text"
        placeholder="age"
        name="age"
        onInput={(e) => setPersonHandler(e)}
      />
      <br /> <br />
      <input
        type="text"
        placeholder="city"
        name="city"
        onInput={(e) => setPersonHandler(e)}
      />
      <br /> <br />
      <button
        onClick={
          addOrUpdate === "add" ? () => addHandler() : () => updateHandler()
        }
      >
        {addOrUpdate}
      </button>
      <br /> <br />
    </>
  );
}

export default AddOrUpdatePerson;
