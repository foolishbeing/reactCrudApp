import React, { useState, useEffect } from "react";
import { EventEmitter } from "events";

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = event => {
    console.log(event);
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.setEditing(false);
        props.updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>update user</button>
      <button
        onClick={() => {
          props.setEditing(false);
          props.impInitialFormState();
        }}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};
export default EditUserForm;
