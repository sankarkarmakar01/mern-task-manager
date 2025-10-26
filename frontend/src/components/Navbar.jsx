// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//       <nav className="w-full h-auto py-4 px-10 flex items-center justify-between bg-sky-400 text-white">
//         <div className="text-2xl font-semibold">Task Manager</div>
//         <div className="flex justify-center items-center gap-10 font-semibold text-lg">
//           <Link to="/">All Tasks</Link>
//           <Link to="/addTask">Add Task</Link>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-sky-600 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between text-white">
        {/* Brand */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:text-sky-200 transition"
        >
          Task Manager
        </Link>

        {/* Nav Links */}
        <div className="flex flex-wrap items-center gap-8 font-semibold text-lg">
          <Link
            to="/"
            className="hover:text-sky-200 transition-colors duration-200"
          >
            All Tasks
          </Link>
          <Link
            to="/addTask"
            className="hover:text-sky-200 transition-colors duration-200"
          >
            Add Task
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
