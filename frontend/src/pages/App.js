import React, { useState, useEffect } from "react";
import api from "../api";

import { TextField, Button } from "@mui/material";

import imgOne from "../img1.png";
import imgTwentytwo from "../Images/dogPawOne.png";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';


const customTheme = createTheme({
  palette: {
    primary: {
      main: '#B88865',
    },
    secondary: {
      main: '#f6ece5',
    },
  },
});
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

  function formatItinerary(itinerary) {
    const lines = itinerary.split("\n"); // Split by line breaks
    let result = [];
  
    for (let i = 0; i < lines.length; i++) {
      let currentLine = lines[i].trim();
      if (
        i !== lines.length - 1 &&                 // not the last line
        !currentLine.startsWith("Day") &&         // doesn't start with "Day"
        i % 2 === 0 && 
        currentLine !== ""
      ) {
        result.push("• " + currentLine); // Add bullet point
      } else {
        result.push(currentLine);
      }
    }
  
    return result.join("\n"); // Join back into a string
  }
  

  const formattedItinerary = formatItinerary(itinerary);


  return (
    <ThemeProvider theme={customTheme}>
    <div
      style={{
        position: "relative",
        borderRadius: "25px",
        backgroundColor: "#f6ece5",
        width: "100%",
        height: "2724px",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "24px",
        color: "rgba(184, 136, 101, 0.8)",
        fontFamily: "Montserrat",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "46px",
          left: "46px",
          borderRadius: "20px",
          backgroundColor: "#63857a",
          width: "63px",
          height: "63px",
        }}
      />
      
      <form onSubmit={handleFormSubmit}>
        <TextField
          style={{
            border: "none",
            backgroundColor: "transparent",
            position: "absolute",
            top: "358px",
            left: "147px",
          }}
          type="text"
          id="location"
          name="location"
          label="Location"
          color="primary"
          sx={{ width: 464 }}
          variant="outlined"
          onChange={handleInputChange}
          value={formData.location}
        />
        <TextField
          style={{
            border: "none",
            backgroundColor: "transparent",
            position: "absolute",
            top: "483px",
            left: "147px",
          }}
          type="text"
          id="duration"
          name="duration"
          label="Duration"
          color="primary"
          sx={{ width: 464 }}
          variant="outlined"
          onChange={handleInputChange}
          value={formData.duration}
        />
        <TextField
          style={{
            border: "none",
            backgroundColor: "transparent",
            position: "absolute",
            top: "608px",
            left: "147px",
          }}
          type="text"
          id="interests"
          name="interests"
          label="Interests"
          color="primary"
          sx={{ width: 464 }}
          variant="outlined"
          onChange={handleInputChange}
          value={formData.interests}
        />
        <TextField
          style={{
            border: "none",
            backgroundColor: "transparent",
            position: "absolute",
            top: "733px",
            left: "147px",
          }}
          type="text"
          id="age"
          name="age"
          label="Age"
          color="primary"
          sx={{ width: 464 }}
          variant="outlined"
          onChange={handleInputChange}
          value={formData.age}
        />
        <Button
          style={{ position: "absolute", top: "882px", left: "147px" }}
          sx={{ width: 464, height: 60, fontFamily: 'Montserrat', fontWeight: 600, fontSize:'28px'}}
          color="primary"
          variant="contained"
          label="Let's Go!"
          type="submit"
        >
          Let's Go!
        </Button>
      </form>

      <h1
        style={{
          margin: "0",
          position: "absolute",
          top: "180px",
          left: "147px",
          fontSize: "64px",
          fontWeight: "800",
          fontFamily: "'Baloo Tamma 2'",
          color: "#63857a",
        }}
      >{`ADVENTURE TIME! `}</h1>
      <h1
        style={{
          margin: "0",
          position: "absolute",
          top: "1088px",
          left: "170px",
          fontSize: "64px",
          fontWeight: "800",
          fontFamily: "'Baloo Tamma 2'",
          color: "#63857a",
        }}
      >
        Time to TAKE OFF
      </h1>
      <div
        style={{
          position: "absolute",
          top: "261px",
          left: "147px",
          fontWeight: "500",
          color: "rgba(99, 133, 122, 0.8)",
          display: "inline-block",
          width: "586px",
        }}
      >
        Fill in these text bubbles and we will craft your trip
      </div>
      <img
        style={{
          position: "absolute",
          top: "300px",
          left: "733px",
          width: "613px",
          height: "553px",
          objectFit: "cover",
        }}
        alt=""
        src={imgOne}
      />
      
  <section
  style={{
    position: "absolute",
    top: "1222px",
    left: "147px",
    borderRadius: "30px",
    backgroundColor: "#ebddd3",
    border: "3px solid #b88865",
    boxSizing: "border-box",
    width: "1040px",
    height: "1160px",  // Set a fixed height so overflow can occur
    transformOrigin: "0 0",
    padding: "50px",
    whiteSpace: 'pre-line',
    overflowY: 'auto'  // Only allow vertical scrolling
  }}
>
  {formattedItinerary}
</section>



      <div style={{ position: "absolute", top: "2428px", left: "200px" }}>
        {loadingMessage}
      </div>
      <img
        style={{
          position: "absolute",
          top: "52px",
          left: "51px",
          width: "52px",
          height: "52px",
          objectFit: "cover",
        }}
        alt=""
        src={imgTwentytwo}
      />
    </div>
    </ThemeProvider>
  );
};

export default App;
