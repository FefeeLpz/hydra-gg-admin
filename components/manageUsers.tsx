"use client";

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dataUsers } from "./data-users";

const ManageUsers = () => {
  const [selectedKey, setSelectedKey] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = dataUsers.filter(user => 
    (selectedKey === "All" || user.key.includes(selectedKey)) &&
    user.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col overflow w-full bg-neutral-900 p-7 rounded-2xl border border-neutral-800">
      <h2 className="text-white font-normal text-xl">Manage Users</h2>
      <div className='flex justify-evenly items-center'>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-4 px-4 py-2 rounded-xl bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <div className="flex space-x-4 mt-4">
          <button
            onClick={() => setSelectedKey("All")}
            className={`px-4 py-2 rounded-xl ${selectedKey === "All" ? "bg-white text-neutral-900 transition duration-500" : "bg-neutral-950"} text-white`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedKey("7D")}
            className={`px-4 py-2 rounded-xl ${selectedKey === "7D" ? "bg-white text-neutral-900 transition duration-500" : "bg-neutral-950"} text-white`}
          >
            7D
          </button>
          <button
            onClick={() => setSelectedKey("30D")}
            className={`px-4 py-2 rounded-xl ${selectedKey === "30D" ? "bg-white text-neutral-900 transition duration-500" : "bg-neutral-950"} text-white`}
          >
            30D
          </button>
          <button
            onClick={() => setSelectedKey("90D")}
            className={`px-4 py-2 rounded-xl ${selectedKey === "90D" ? "bg-white text-neutral-900 transition duration-500" : "bg-neutral-950"} text-white`}
          >
            90D
          </button>
      </div>
      </div>
      <Table className="mt-4">
        <TableCaption>A list of the clients of Hydra</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Discord ID</TableHead>
            <TableHead>Key</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.user}</TableCell>
              <TableCell>{item.discordId}</TableCell>
              <TableCell>{item.key}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ManageUsers;
