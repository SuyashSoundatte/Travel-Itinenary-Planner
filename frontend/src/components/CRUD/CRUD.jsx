import crudData from "../../data/CRUD/Data";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";

function CRUD() {
  const [data, setData] = useState([...crudData]);
  const [open, setOpen] = useState(false);
  const [taskid, settaskid] = useState("");
  const [taskname, settaskname] = useState("");
  const [taskdetails, settaskdetails] = useState("");

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Delete this item?")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };

  const handleAddTask = () => {
    if (taskid && taskname && taskdetails) {
      const newTask = {
        id: Number(taskid),
        name: taskname,
        task: taskdetails,
      };

      setData([...data, newTask]);

      // Clear the input fields after adding the task
      settaskid("");
      settaskname("");
      settaskdetails("");
    } else {
      alert("Please fill in all the fields.");
    }
  };

  const EditTask = (task) => {
    settaskid(task.id);
    settaskname(task.name);
    settaskdetails(task.task);
    setOpen(true);
  };

  const handleSave = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === taskid ? { ...item, name: taskname, task: taskdetails } : item
      )
    );
    setOpen(false);
  };

  const handleClear = () => {
    settaskid("");
    settaskname("");
    settaskdetails("");
  };

  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            label="Task ID"
            type="number"
            value={taskid}
            fullWidth
            disabled
            margin="dense"
          />
          <TextField
            label="Task Name"
            type="text"
            value={taskname}
            onChange={(e) => settaskname(e.target.value)}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Task Details"
            type="text"
            value={taskdetails}
            onChange={(e) => settaskdetails(e.target.value)}
            fullWidth
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClear}>Clear</Button>
          <Button variant="contained" color="success" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <div className="Addtask pt-4 w-full bg-blue-300">
        <label htmlFor="taskid">Enter task id: </label>
        <input
          type="number"
          name="taskid"
          id="taskid"
          value={taskid}
          onChange={(e) => settaskid(e.target.value)}
        />
        <label htmlFor="taskname">Enter task name: </label>
        <input
          type="text"
          name="taskname"
          id="taskname"
          value={taskname}
          onChange={(e) => settaskname(e.target.value)}
        />
        <label htmlFor="taskdetails">Enter task details: </label>
        <input
          type="text"
          name="taskdetails"
          id="taskdetails"
          value={taskdetails}
          onChange={(e) => settaskdetails(e.target.value)}
        />
        <Button variant="contained" color="success" onClick={handleAddTask}>
          ADD
        </Button>
        <Button onClick={handleClear}>Clear</Button>
      </div>

      {data.map((item) => (
        <div key={item.id} className="flex justify-center items-center gap-10">
          <h1>{item.id}</h1>
          <h1>{item.name}</h1>
          <p>{item.task}</p>
          <Button variant="contained" onClick={() => EditTask(item)}>
            Edit
          </Button>
          <Button variant="contained" color="error" onClick={() => handleDelete(item.id)}>
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
}

export default CRUD;
