import { getAll, getById, remove } from "../utils";
import { useState } from "react";
import AddOrUpdatePerson from "./AddOrUpdatePerson";

function People() {
  const url = "http://localhost:5000/people/";

  const [allPeople, setAllPeople] = useState([]);
  const [person, setPerson] = useState({});
  const [personIdInput, setPersonIdInput] = useState("");
  const [addOrUpdate, setAddOrUpdate] = useState("");

  const getAllPersons = async () => {
    const allPeople = await getAll(url);
    setAllPeople(allPeople.data);
  };

  const getPersonById = async () => {
    const personById = await getById(url, personIdInput);
    setPerson(personById.data);
  };

  const addNewPerson = (newPerson) => {
    setAllPeople([...allPeople, newPerson]);
  };

  const updatePerson = (updatedPerson) => {
    const allPeopleCopy = [...allPeople];
    const index = allPeopleCopy.findIndex((p) => p._id === updatedPerson.id);

    if (index !== -1) {
      allPeopleCopy[index] = updatedPerson;
      setAllPeople(allPeopleCopy);
    }
  };

  const deleteHandler = async (id) => {
    await remove(url, id);
    const allPeopleCopy = [...allPeople];
    const index = allPeopleCopy.findIndex((p) => p.id === id);
    allPeopleCopy.splice(index, 1);
    setAllPeople(allPeopleCopy);
  };

  return (
    <>
      <h1>People</h1>
      {addOrUpdate === "add" && (
        <AddOrUpdatePerson
          addOrUpdate={addOrUpdate}
          addNewPerson={addNewPerson}
        />
      )}
      {addOrUpdate === "update" && (
        <AddOrUpdatePerson
          addOrUpdate={addOrUpdate}
          updatePerson={updatePerson}
        />
      )}
      <button onClick={getAllPersons}>Get All People !</button>
      <div>
        <ul>
          {allPeople.length > 0 &&
            allPeople.map((person) => (
              <div key={person.id}>
                <li>{person.name}</li>
                <button onClick={() => deleteHandler(person._id)}>
                  delete
                </button>
              </div>
            ))}
        </ul>
      </div>
      <input
        type="text"
        placeholder="Enter Person ID"
        onInput={(e) => setPersonIdInput(e.target.value)}
      />
      <br /> <br />
      <button onClick={getPersonById}>Get Person By Id</button> <br /> <br />
      {person && person.name} <br />
      <br />
      <button onClick={() => setAddOrUpdate("add")}>Add</button>
      <br />
      <br />
      <button onClick={() => setAddOrUpdate("update")}>Update</button>
    </>
  );
}

export default People;
