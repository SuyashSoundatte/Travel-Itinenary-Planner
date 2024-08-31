import axios from 'axios';
import { useState } from 'react';
import crudData from "../../data/CRUD/Data";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function CRUD() {
  const [data, setData] = useState([...crudData]);
  const [open, setOpen] = useState(false);
  const [taskid, settaskid] = useState("");
  const [taskname, settaskname] = useState("");
  const [taskdetails, settaskdetails] = useState("");
  const [place, setPlace] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Delete this item?")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };

  const handleAddTask = async () => {
    if (taskid && taskname && taskdetails && place) {
      const newTask = {
        id: Number(taskid),
        name: taskname,
        task: taskdetails,
        place: place,
      };

      setData([...data, newTask]);

      settaskid("");
      settaskname("");
      settaskdetails("");
      setPlace("");

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/itinerary/suggest/${place.toLowerCase()}`
        );
        console.log(response.data);
        setSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      alert("Please fill in all the fields.");
    }
  };

  const EditTask = (task) => {
    settaskid(task.id);
    settaskname(task.name);
    settaskdetails(task.task);
    setPlace(task.place);
    setOpen(true);
  };

  const handleSave = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === taskid ? { ...item, name: taskname, task: taskdetails, place: place } : item
      )
    );
    setOpen(false);
  };

  const handleClear = () => {
    settaskid("");
    settaskname("");
    settaskdetails("");
    setPlace("");
  };

  const handleChange = (event) => {
    setPlace(event.target.value);
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
          <FormControl fullWidth margin="dense">
            <InputLabel id="select-place-label">Choose place</InputLabel>
            <Select
              labelId="select-place-label"
              id="select-place"
              value={place}
              label="Choose place"
              onChange={handleChange}
            >
              <MenuItem value="Hill">Hill</MenuItem>
              <MenuItem value="Beach">Beach</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClear}>Clear</Button>
          <Button variant="contained" color="success" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <div className="Addtask p-4 w-full flex-col flex justify-center items-center">
        <div className="w-full">
          <label htmlFor="taskid" className="w-[50%] text-[2em]">Enter task id: </label>
          <TextField 
            label="Task ID"
            type="text"
            value={taskid}
            onChange={(e) => settaskid(e.target.value)}
            fullWidth
            margin="dense"
          />
        </div>
        <div className="w-full">
          <label htmlFor="taskname" className="w-[50%] text-[2em]">Enter task name: </label>
          <TextField
            label="Task name"
            type="text"
            name="taskname"
            value={taskname}
            fullWidth
            margin="dense"
            onChange={(e) => settaskname(e.target.value)}
          />
        </div>
        <div className="w-full">
          <label htmlFor="taskdetails" className="w-[50%] text-[2em]">Enter task details: </label>
          <TextField
            label="Task Details"
            type="text"
            name="taskname"
            value={taskdetails}
            id="taskdetails"
            fullWidth
            margin="dense"
            onChange={(e) => settaskdetails(e.target.value)}
          />
        </div>
        <FormControl fullWidth margin="dense">
          <InputLabel id="select-place-label">Choose place</InputLabel>
          <Select
            labelId="select-place-label"
            id="select-place"
            value={place}
            label="Choose place"
            onChange={handleChange}
            name='preferences'
          >
            <MenuItem value="Hill">Hill</MenuItem>
            <MenuItem value="Beach">Beach</MenuItem>
          </Select>
        </FormControl>
        <div className="text-[1.2em] flex items-center justify-center mt-4">
          <button onClick={handleAddTask} className="px-5 py-2 bg-red-400 rounded-lg">Add task</button>
          <Button onClick={handleClear} className="px-5 py-2 bg-red-400 ml-2">Clear</Button>
        </div>
      </div>

      {data.map((item) => (
        <div key={item.id} className="grid grid-cols-6 shadow-md gap-10 p-5">
          <div className="text-[1.9em]">{item.id}</div>
          <div className="text-[1.9em]">{item.name}</div>
          <div className="text-[1.9em] truncate">{item.task}</div>
          <div className="text-[1.9em]">{item.place}</div>
          <Button variant="contained" onClick={() => EditTask(item)}>Edit</Button>
          <Button variant="contained" onClick={() => handleDelete(item.id)}>Delete</Button>
        </div>
      ))}
      <div className="suggestions mt-5">
        <h2 className="text-[2em] mb-4">Suggestions for {place}</h2>
        <div className="grid grid-cols-1 gap-5">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="shadow-md p-4">
              <h3 className="text-[1.5em]">{suggestion.title}</h3>
              <p>{suggestion.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CRUD;
