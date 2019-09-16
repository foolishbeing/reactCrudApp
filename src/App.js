import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";

const App = () => {
  const usersData = [
    { id: 1, name: "Tanie", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconidolon" },
    { id: 3, name: "Ben", username: "benisphere" }
  ];

  const initialFormState = { id: null, name: "", username: "" };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [deleteBtn, setdeleteBtn] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const impInitialFormState = () => {
    setCurrentUser({id: null, name: "", username: "" });
  };

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setUsers(users.filter(user => user.id != id));
  };

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
    // setdeleteBtn(true);
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
    setCurrentUser({ id: null, name: "", username: "" });
    // setdeleteBtn(false);
  };

  return (
    <div className="container">
      <h1>CRUD App with React hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
                impInitialFormState={impInitialFormState}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editRow={editRow}
            editing={editing}
            currentUser={currentUser}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
