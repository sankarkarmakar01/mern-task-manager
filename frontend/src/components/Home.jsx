// import React, { useEffect, useState } from "react";
// import TaskCard from "./TaskCard";

// const Home = () => {
//   const [taskData, setTaskData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(`http://localhost:8000/api/task/all-tasks`, {
//         method: "get",
//       });
//       const data = await response.json();
//       setTaskData(data.tasks);
//     };
//     fetchData();
//   }, []);

//   return (
//     <>
//       <div className="w-full pt-5 px-10 grid grid-cols-4 place-items-center gap-5">
//         {taskData ? (
//           taskData.map((data, idx) => {
//             return (
//               <TaskCard
//                 key={idx}
//                 title={data.title}
//                 description={data.description}
//                 id={data._id}
//               />
//             );
//           })
//         ) : (
//           <>
//             <p>Data Not Found...</p>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default Home;


import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import { toast } from "react-toastify";

const Home = () => {
  const [taskData, setTaskData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/task/all-tasks`);
      const data = await response.json();
      setTaskData(data.tasks || []);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      toast.error("Failed to load tasks!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🗑️ Delete Task
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:8000/api/task/delete-task/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Task deleted successfully!");
        setTaskData((prev) => prev.filter((task) => task._id !== id));
      } else {
        toast.error(data.message || "Failed to delete task");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-sky-100 px-6 py-10">
      <h1 className="text-3xl font-bold text-sky-700 text-center mb-10">
        All Tasks
      </h1>

      {taskData && taskData.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {taskData.map((task) => (
            <TaskCard
              key={task._id}
              id={task._id}
              title={task.title}
              description={task.description}
              taskStatus={task.taskStatus}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg mt-20">
          No tasks found. Try adding one!
        </div>
      )}
    </div>
  );
};

export default Home;
