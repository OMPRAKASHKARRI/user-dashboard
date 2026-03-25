import { useNavigate } from "react-router-dom";

const UserTable = ({ users }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Company</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              onClick={() => navigate(`/user/${user.id}`)}
              className="border-t hover:bg-blue-50 transition cursor-pointer"
            >
              <td className="p-4 font-semibold text-gray-800">
                {user.name}
              </td>
              <td className="p-4 text-gray-600">{user.email}</td>
              <td className="p-4 text-gray-600">{user.phone}</td>
              <td className="p-4 text-gray-600">
                {user.company.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;