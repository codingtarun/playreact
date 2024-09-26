import { useEffect, useState } from "react";

export const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/users/all")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);
  return (
    <>
      <table class="min-w-full bg-white rounded-lg shadow-lg">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
              ID
            </th>
            <th class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
              Name
            </th>
            <th class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr class="hover:bg-gray-100" key={user.id}>
              <td class="py-2 px-4 border-b border-gray-200">{user.id}</td>
              <td class="py-2 px-4 border-b border-gray-200">{user.name}</td>
              <td class="py-2 px-4 border-b border-gray-200">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
