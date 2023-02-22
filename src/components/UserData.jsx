import React from "react";
import "./UserData.css";
const UserData = ({ userData }) => {
  return (
    <>
      {userData.length > 0 ? (
        <table>
          <th>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Gender</td>
            <td>IP Address</td>
            <td>Image</td>
          </th>

          {userData.map((user) => {
            return (
              <tr>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.ip_address}</td>
                <td>
                  <img src={user.image} alt="image" />
                </td>
              </tr>
            );
          })}
        </table>
      ) : (
        <h1>Searched User Does not exist</h1>
      )}
    </>
  );
};

export default UserData;
