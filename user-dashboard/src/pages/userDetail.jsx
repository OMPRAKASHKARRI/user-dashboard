import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const userDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-xl mx-auto bg-white shadow rounded p-6">
        <h2 className="text-xl font-semibold mb-4">{user.name}</h2>

        <p><b>Email:</b> {user.email}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <p><b>Website:</b> {user.website}</p>
        <p><b>Company:</b> {user.company.name}</p>
        <p><b>City:</b> {user.address.city}</p>
      </div>
    </div>
  );
};

export default userDetail;