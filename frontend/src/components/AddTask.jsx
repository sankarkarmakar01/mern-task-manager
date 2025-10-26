// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const AddTask = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     taskStatus: "pending",
//   });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`http://localhost:8000/api/task/add-task`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         toast.success("Task Added Successfully");
//         navigate("/");
//       } else {
//         toast.error(data.message || "Failed to add task");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("Something went wrong!");
//     }
//   };

//   return (
//     <div className="w-full h-screen flex justify-center relative">
//       <form
//         onSubmit={handleSubmit}
//         className="w-[35%] absolute top-10 border-2 p-5 rounded-2xl "
//       >
//         <h1 className="text-3xl font-bold mb-5">Create Task</h1>
//         <div className="w-full">
//           <label htmlFor="title" className="font-semibold">
//             Enter the title:
//           </label>
//           <br />
//           <input
//             type="text"
//             id="title"
//             name="title"
//             className="w-full  outline-none  border-b-2 "
//             value={formData.title}
//             onChange={(e) =>
//               setFormData({ ...formData, title: e.target.value })
//             }
//           />
//         </div>
//         <br />
//         <div className="w-full">
//           <label htmlFor="description" className="font-semibold">
//             Enter the description:
//           </label>
//           <br />
//           <textarea
//             type="text"
//             id="description"
//             name="description"
//             rows={5}
//             className="w-full   outline-none border-b-2 "
//             value={formData.description}
//             onChange={(e) =>
//               setFormData({ ...formData, description: e.target.value })
//             }
//           />
//         </div>
//         <div className="flex justify-center items-center py-5 mt-3">
//           <button
//             type="submit"
//             className="w-full bg-sky-600 text-white px-6 py-2 text-lg rounded-2xl"
//           >
//             Save
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddTask;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddTask = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    taskStatus: "pending",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/api/task/add-task`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Task Added Successfully");
        navigate("/");
      } else {
        toast.error(data.message || "Failed to add task");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-sky-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl"
      >
        <h1 className="text-3xl font-bold text-sky-700 mb-6 text-center">
          Create New Task
        </h1>

        {/* Title Field */}
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block text-gray-700 font-semibold mb-2"
          >
            Task Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter task title..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
        </div>

        {/* Description Field */}
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block text-gray-700 font-semibold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            placeholder="Enter task description..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            Save Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
