import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import UserTable from "../components/UserTable";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  const sortByName = () => {
    const sorted = [...users].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setUsers(sorted);
  };

  const sortByCompany = () => {
    const sorted = [...users].sort((a, b) =>
      a.company.name.localeCompare(b.company.name)
    );
    setUsers(sorted);
  };

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-600">
        Loading users...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Users
        </h2>

        {/* Search + Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-6">
          <SearchBar search={search} setSearch={setSearch} />

          <div className="flex gap-2">
            <button
              onClick={sortByName}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition"
            >
              Sort by Name
            </button>

            <button
              onClick={sortByCompany}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition"
            >
              Sort by Company
            </button>
          </div>
        </div>

        {/* Empty State */}
        {filteredUsers.length === 0 ? (
          <p className="text-center text-gray-500 p-6">
            No users found
          </p>
        ) : (
          <UserTable users={filteredUsers} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;