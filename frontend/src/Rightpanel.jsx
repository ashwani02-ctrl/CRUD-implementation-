export default function Rightpanel({ users }) {
    return (
        <div className="ml-10 w-full max-w-md overflow-scroll h-150">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
                <h1 className="text-3xl font-bold text-center text-white mb-8 tracking-wide">
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
                                className="bg-slate-900 border border-slate-700 rounded-xl p-5 hover:border-indigo-500 transition-all duration-300"
                            >
                                <div className="space-y-2">
                                    <p className="text-white">
                                        <span className="font-semibold text-indigo-400">
                                            Name:
                                        </span>{" "}
                                        {user.name}
                                    </p>

                                    <p className="text-white">
                                        <span className="font-semibold text-indigo-400">
                                            Email:
                                        </span>{" "}
                                        {user.email}
                                    </p>

                                    <p className="text-white">
                                        <span className="font-semibold text-indigo-400">
                                            Role:
                                        </span>{" "}
                                        {user.role}
                                    </p>

                                    <p className="text-white">
                                        <span className="font-semibold text-indigo-400">
                                            Phone:
                                        </span>{" "}
                                        {user.phone}
                                    </p>
                                </div>

                                <div className="flex gap-3 mt-5">
                                    <button
                                        className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-2 rounded-lg transition duration-200"
                                    >
                                        ✏️ Update
                                    </button>

                                    <button
                                        className="flex-1 bg-red-600 hover:bg-red-500 text-white font-semibold py-2 rounded-lg transition duration-200"
                                    >
                                        🗑 Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}