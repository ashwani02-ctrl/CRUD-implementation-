import { useState } from "react"
import Rightpanel from "./Rightpanel";
import {createForm, readForm} from "./api/form"
import { useEffect } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault();

    const result = await createForm({
      name,
      email,
      role,
      phone,
    })
    
   
    if(result.success){
      setUsers((prev) => [...prev, result.data])
    }
    setName("");
    setEmail("");
    setPhone("");
    setRole("");
  }

  const fetchUser = async()=>{
    const result = await readForm();
    if(result.success){
      setUsers(result.data);
    }
  }
  useEffect(()=>{
    fetchUser();
    
  },[])
  
 
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 p-8">

      {/* main-card wrapper with padding and color combo */}
      <div className="bg-slate-800 border border-slate-700 w-full max-w-md rounded-2xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-white mb-8 tracking-wide">
          Test Form
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="user-name" className="text-slate-300 text-sm font-semibold tracking-wide">
              Name
            </label>
            <input
              className="w-full border border-slate-600 bg-slate-900 rounded-lg p-3 text-base text-slate-100 placeholder-slate-500 transition focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              type="text"
              id="user-name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="user-email" className="text-slate-300 text-sm font-semibold tracking-wide">
              E-mail
            </label>
            <input
              className="w-full border border-slate-600 bg-slate-900 rounded-lg p-3 text-base text-slate-100 placeholder-slate-500 transition focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              type="email"
              id="user-email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </div>

          {/* Role Selection Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="user-role" className="text-slate-300 text-sm font-semibold tracking-wide">
              Role
            </label>
            <select
              name="role"
              id="user-role"
              className="w-full border border-slate-600 bg-slate-900 rounded-lg p-3 text-base text-slate-100 transition focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="" className="bg-slate-900 text-slate-400">Select role</option>
              <option value="Admin" className="bg-slate-900 text-slate-100">Admin</option>
              <option value="User" className="bg-slate-900 text-slate-100">User</option>
            </select>
          </div>

          {/* Phone Field - Fixed type to 'tel' to completely remove scroll/spinners */}
          <div className="flex flex-col gap-2">
            <label htmlFor="user-phone" className="text-slate-300 text-sm font-semibold tracking-wide">
              Phone
            </label>
            <input
              className="w-full border border-slate-600 bg-slate-900 rounded-lg p-3 text-base text-slate-100 placeholder-slate-500 transition focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              type="tel"
              id="user-phone"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium p-3 rounded-lg transition-all duration-200 active:scale-[0.98]"
          >
            Submit Data
          </button>
        </form>
      </div>

      {/* right-side placeholder structure */}
      <Rightpanel
      users={users}
      updateuser={fetchUser}
      />

     

    </div>
  )
}
