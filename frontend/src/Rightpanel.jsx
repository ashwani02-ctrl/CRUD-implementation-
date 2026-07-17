import { useState } from "react";
import { deleteForm, updateForm } from "./api/form";

export default function Rightpanel({ users, updateuser }) {
    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({
        name: "",
        email: "",
        role: "",
        phone: "",
    });

    const handleEdit = (user) => {
        setEditingId(user._id);

        setEditData({
            name: user.name,
            email: user.email,
            role: user.role,
            phone: user.phone,
        });
    };

    const handleChange = (e) => {
        setEditData({
            ...editData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = async() => {

         const result = await updateForm(editingId, editData);
        if(result.success){
            await updateuser();
        }
        setEditingId(null);
    };

    const handleDelete = async(id) => {
        const result = await deleteForm(id);
        if(result.success){
            await updateuser();
        }
    }

    return (
        <div className="ml-10 w-full max-w-md overflow-y-auto h-[600px]">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
                <h1 className="text-3xl font-bold text-center text-white mb-8">
                    Stored Users
                </h1>
                {users.length === 0 ? (
                    <p className="text-slate-400 text-center">
                        No users added yet.
                    </p>
                ) : (
                    <div className="flex flex-col gap-5">
                        {users.map((user) => (
                            <div
                                key={user._id}
                                className="bg-slate-900 border border-slate-700 rounded-xl p-5"
                            >
                                {editingId === user._id ? (
                                    <>
                                        <input
                                            name="name"
                                            value={editData.name}
                                            onChange={handleChange}
                                            className="w-full mb-3 p-2 rounded bg-slate-800 text-white"
                                        />

                                        <input
                                            name="email"
                                            value={editData.email}
                                            onChange={handleChange}
                                            className="w-full mb-3 p-2 rounded bg-slate-800 text-white"
                                        />

                                        <select
                                            name="role"
                                            value={editData.role}
                                            onChange={handleChange}
                                            className="w-full mb-3 p-2 rounded bg-slate-800 text-white"
                                        >
                                            <option>Admin</option>
                                            <option>User</option>
                                        </select>

                                        <input
                                            name="phone"
                                            value={editData.phone}
                                            onChange={handleChange}
                                            className="w-full mb-3 p-2 rounded bg-slate-800 text-white"
                                        />

                                        <div className="flex gap-3">

                                            <button
                                                onClick={handleSave}
                                                className="flex-1 bg-green-600 hover:bg-green-500 py-2 rounded text-white"
                                            >
                                                Save
                                            </button>

                                            <button
                                                onClick={() => setEditingId(null)}
                                                className="flex-1 bg-gray-600 hover:bg-gray-500 py-2 rounded text-white"
                                            >
                                                Cancel
                                            </button>

                                        </div>
                                    </>

                                ) : (

                                    <>
                                        <div className="space-y-2">

                                            <p className="text-white">
                                                <span className="text-indigo-400 font-semibold">
                                                    Name:
                                                </span>{" "}
                                                {user.name}
                                            </p>

                                            <p className="text-white">
                                                <span className="text-indigo-400 font-semibold">
                                                    Email:
                                                </span>{" "}
                                                {user.email}
                                            </p>

                                            <p className="text-white">
                                                <span className="text-indigo-400 font-semibold">
                                                    Role:
                                                </span>{" "}
                                                {user.role}
                                            </p>

                                            <p className="text-white">
                                                <span className="text-indigo-400 font-semibold">
                                                    Phone:
                                                </span>{" "}
                                                {user.phone}
                                            </p>

                                        </div>

                                        <div className="flex gap-3 mt-5">

                                            <button
                                                onClick={() => handleEdit(user)}
                                                className="flex-1 bg-yellow-500 hover:bg-yellow-400 py-2 rounded text-white"
                                            >
                                                ✏️ Update
                                            </button>

                                            <button
                                                onClick={() => handleDelete(user._id)}
                                                className="flex-1 bg-red-600 hover:bg-red-500 py-2 rounded text-white"
                                            >
                                                🗑 Delete
                                            </button>

                                        </div>

                                    </>

                                )}

                            </div>

                        ))}

                    </div>
                )}

            </div>
        </div>
    );
}