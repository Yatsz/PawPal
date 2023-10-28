import React, { useState, useEffect } from "react";
import api from "./api";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

const App = () => {
  const [plan, setPlan] = useState([]);
  const [itinerary, setItinerary] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    location: "",
    duration: "",
    interests: "",
    age: "",
  });

  const fetchPlan = async () => {
    const response = await api.get("/plan/");
    setPlan(response.data);
  };

  useEffect(() => {
    fetchPlan();
  }, []);

  useEffect(() => {
    let count = 0;
    if (isLoading) {
        const interval = setInterval(() => {
            count += 1;
            setLoadingMessage(`Loading for ${count} seconds...`);
        }, 1000);

        return () => clearInterval(interval);
    } else {
        setLoadingMessage("");
    }
}, [isLoading]);


  const handleInputChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Post the form data to /plan/
    const response = await api.post("/plan/", formData);

    // Check if the post to /plan/ was successful
    if (response.status === 200) {
        // Fetch the most recent plan
        fetchPlan();

        // Now, call the generate_itinerary endpoint to get the itinerary
        const itineraryResponse = await api.post("/generate_itinerary/");
        if (itineraryResponse.status === 200) {
            // Set the itinerary state with the received data
            setItinerary(itineraryResponse.data.itinerary);
        } else {
            console.error("Failed to generate itinerary");
        }
    } else {
        console.error("Failed to post plan");
    }

    // Reset the form
    setFormData({
        location: "",
        duration: "",
        interests: "",
        age: "",
    });
    setIsLoading(false);
};


  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Trip Planning App
          </a>
        </div>
      </nav>
      <div className="container">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3 mt-3">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
            type="text"
              id="location"
              label="Location"
              name="location"
              onChange={handleInputChange}
              value={formData.location}
            />
          </Box>
          </div>
          
          <div className="mb-3">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
            type="text"
              id="duration"
              label="Duration"
              name="duration"
              onChange={handleInputChange}
              value={formData.duration}
            />
          </Box>
          </div>
          <div className="mb-3">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
            type="text"
              id="interests"
              label="Interests"
              name="interests"
              onChange={handleInputChange}
              value={formData.interests}
            />
          </Box>
          </div>
          <div className="mb-3">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
            type="text"
              id="age"
              label="Age"
              name="age"
              onChange={handleInputChange}
              value={formData.age}
            />
          </Box>
          </div>

          <Button variant="outlined" type="submit">
            Make Plan
          </Button>
        </form>
        <br></br>
        
      </div>
      <div>
        <TextareaAutosize value={itinerary} readOnly />
      </div>
      <div>{loadingMessage}</div>

    </div>
  );
};
/*
<table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Location</th>
              <th>Duration</th>
              <th>Interests</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {plan.map((plan) => (
              <tr key={plan.id}>
                <td>{plan.location}</td>
                <td>{plan.duration}</td>
                <td>{plan.interests}</td>
                <td>{plan.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
*/
export default App;

