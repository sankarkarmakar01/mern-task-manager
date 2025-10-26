const {
  addTaskService,
  getAllTasksService,
  getTaskByIdService,
  updateTaskService,
  deleteTaskServices,
} = require("../services/task.service");

exports.addTask = async (req, res) => {
  try {
    const newTask = await addTaskService(req.body);

    res.status(200).json({
      success: true,
      message: "Task Added Successfully...",
      task: newTask,
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal Server Error...",
      error: error.message,
    });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await getAllTasksService();

    res.status(200).json({
      success: true,
      tasks: tasks,
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal Server Error...",
      error: error.message,
    });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await getTaskByIdService(req.params.id);
    res.status(200).json({
      success: true,
      task: task,
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal Server Error...",
      error: error.message,
    });
  }
};

exports.updateTask = async (req, res) => {
  
  try {
const updatedTask = await updateTaskService(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({
    success: true,
    message: "Task Updated Successfully...",
    updatedTask: updatedTask,
  });


  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal Server Error...",
      error: error.message,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await deleteTaskServices(req.params.id);
    res.status(200).json({
      success: true,
      message: "Task Deleted Successfully...",
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal Server Error...",
      error: error.message,
    });
  }
};
