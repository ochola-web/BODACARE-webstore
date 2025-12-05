import React, { useState, useEffect } from "react";
import "../../styles/admin.css";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    // Ensure every user has a role and an id
    const usersWithRoles = storedUsers.map((u, index) => ({
      id: u.id || index + 1,
      role: u.role || "user",
      ...u
    }));
    setUsers(usersWithRoles);
    localStorage.setItem("users", JSON.stringify(usersWithRoles));
  }, []);

  const changeRole = (id, newRole) => {
    const updatedUsers = users.map(u =>
      u.id === id ? { ...u, role: newRole } : u
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div className="admin-content">
      <h2>User Accounts</h2>
      {users.length === 0 ? (
        <p>No users yet.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  {u.role === "user" ? (
                    <button onClick={() => changeRole(u.id, "admin")}>
                      Make Admin
                    </button>
                  ) : (
                    <button onClick={() => changeRole(u.id, "user")}>
                      Make User
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
