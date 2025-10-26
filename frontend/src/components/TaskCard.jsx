// import React from 'react'
// import { Link } from 'react-router-dom'

// const TaskCard = ({title,description,id}) => {
//   return (
//     <div className='w-72 h-auto p-5 border-2 rounded-[14px]'>
//         <h2 className='text-lg font-bold'>{title}</h2>
//         <p className='text-sm'>{description}</p>
//         <div className='w-full flex items-center justify-between'>
//            <Link to={`/updateTask/${id}`} className="cursor-pointer text-blue-600">Edit</Link>
//             <button className='cursor-pointer'>Delete</button>
//         </div>
//     </div>
//   )
// }

// export default TaskCard

import React from "react";
import { Link } from "react-router-dom";

const TaskCard = ({ title, description, taskStatus, id, onDelete }) => {
  // Badge color based on task status
  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "running":
        return "bg-blue-100 text-blue-700 border-blue-300";
      case "completed":
        return "bg-green-100 text-green-700 border-green-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  return (
    <div className="w-full max-w-sm bg-white/90 backdrop-blur-md border border-sky-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold text-sky-700 truncate">{title}</h2>
        <span
          className={`text-xs font-medium px-3 py-1 border rounded-full capitalize ${getStatusColor(
            taskStatus
          )}`}
        >
          {taskStatus}
        </span>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

      <div className="flex justify-between items-center mt-4">
        <Link
          to={`/updateTask/${id}`}
          className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm rounded-lg shadow-sm transition-all duration-200"
        >
          Edit
        </Link>

        <button
          onClick={() => onDelete(id)}
          className="px-4 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-lg text-sm transition-all duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
