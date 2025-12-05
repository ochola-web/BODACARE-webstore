import React, { useState, useEffect } from "react";
import "../../styles/admin.css";

export default function AdminSubscribers() {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    const storedSubs = JSON.parse(localStorage.getItem("subscribers")) || [];
    setSubs(storedSubs);
  }, []);

  const handleRemove = (id) => {
    const updatedSubs = subs.filter(sub => sub.id !== id);
    setSubs(updatedSubs);
    localStorage.setItem("subscribers", JSON.stringify(updatedSubs));
  };

  return (
    <div className="admin-content">
      <h2>Subscribers</h2>
      {subs.length === 0 ? (
        <p>No subscribers yet.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {subs.map(sub => (
              <tr key={sub.id}>
                <td>{sub.name || "N/A"}</td>
                <td>{sub.email}</td>
                <td>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(sub.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
