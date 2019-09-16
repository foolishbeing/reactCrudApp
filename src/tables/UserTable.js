import React from "react";

const UserTable = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>UserName</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <button
                  className="button muted-button"
                  onClick={() => props.editRow(user)}
                >
                  Edit
                </button>
               
                  <button
                    className="button muted-button"
                    onClick={() => props.deleteUser(user.id)}
                    disabled={props.currentUser.id === user.id}
                  >
                    Delete
                  </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
