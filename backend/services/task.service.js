const Task = require("../models/Task.model");

exports.addTaskService = async (taskData) => {
  try {
    const { title, description, taskStatus } = taskData;
    const newTask = new Task({ title, description, taskStatus });
    await newTask.save();
    return newTask;
  } catch (error) {
    throw new Error(`Task Creation Failed: ${error.message}`);
  }
};


exports.getAllTasksService = async () => {
  try {
   const tasks = await Task.find()
   return tasks
  } catch (error) {
    throw new Error(`Tasks Not Found...\n${error.message}`);
  }
};


exports.getTaskByIdService = async(id) =>{
 try {
   const task = await Task.findById(id)
   return task
  } catch (error) {
    throw new Error(`Task Not Found...\n${error.message}`);
  }
}


exports.updateTaskService = async (id,taskData,show={}) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(id,taskData,show)
    await updatedTask.save();
    return updatedTask;
  } catch (error) {
    throw new Error(`Task Updation Failed: ${error.message}`);
  }
};


exports.deleteTaskServices = async (id) => {
  try {
    return await Task.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`Task Updation Failed: ${error.message}`);
  }
};