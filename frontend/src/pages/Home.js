import React from 'react';
import { Button } from "@mui/material";

import imgOne from "../Images/asian.png";
import imgTwo from "../Images/beach.png";
import imgThree from "../Images/camera.png";
import imgFour from "../Images/deliveryBag.png";
import imgFive from "../Images/dog.png";
import imgSix from "../Images/house.png";
import imgSeven from "../Images/HuggingDog.png";
import imgEight from "../Images/lineHeart.png";
import imgNine from "../Images/lineHeartTwo.png";
import imgTen from "../Images/map.png";
import imgEleven from "../Images/mountain.png";
import imgTwelve from "../Images/oval.png";
import imgThirteen from "../Images/pinkCoffee.png";
import imgFourteen from "../Images/pizza.png";
import imgFifteen from "../Images/rect17.png";
import imgSixteen from "../Images/speech.png";
import imgSeventeen from "../Images/strawberry.png";
import imgEighteen from "../Images/Email.png";
import imgNineteen from "../Images/Phone.png";
import imgTwenty from "../Images/Facebook.png";
import imgTwentyone from "../Images/Instagram.png";
import imgTwentytwo from "../Images/dogPawOne.png";
import imgTwentythree from "../Images/dogPawTwo.png";
import imgTwentyfour from "../Images/dogPawThree.png";


import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#B88865',
    },
    secondary: {
      main: '#63857A',
    },
  },
});

const Home = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/app');
  }
  const handleButtonClickTwo = () => {
    navigate('/home');
  }
  const handleButtonClickThree = () => {
    navigate('/palm');
  }
  const handleButtonClickFour = () => {
    navigate('/tahoe');
  }
  const handleButtonClickFive = () => {
    navigate('/hawaii');
  }

  return (
    <ThemeProvider theme={customTheme}>
    <div
      style={{
        position: "relative",
        borderRadius: "25px",
        backgroundColor: "#f6ece5",
        width: "100%",
        height: "4010px",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "24px",
        color: "#ebddd3",
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
      
      <div
        style={{
          position: "absolute",
          top: "1879px",
          left: "65px",
          borderRadius: "50%",
          backgroundColor: "#63857a",
          width: "634px",
          height: "634px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "63px",
          left: "898px",
          fontWeight: "600",
          color: "#b88865",
          display: "inline-block",
          width: "183px",
          height: "66px",
        }}
      >
        plan trip
      </div>
      <div
        style={{
          position: "absolute",
          top: "63px",
          left: "1081px",
          fontWeight: "600",
          color: "#b88865",
        }}
      >
        top itineraries
      </div>
      <div
        style={{
          position: "absolute",
          top: "63px",
          left: "1328px",
          fontWeight: "600",
          color: "#b88865",
          display: "inline-block",
          width: "151px",
          height: "41px",
        }}
      >
        login
      </div>
      <div
        style={{
          position: "absolute",
          top: "186px",
          left: "840px",
          borderRadius: "25px",
          backgroundColor: "#63857a",
          width: "533px",
          height: "575px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "2782px",
          left: "759px",
          borderRadius: "50%",
          backgroundColor: "#b88865",
          width: "634px",
          height: "634px",
        }}
      />
      
    
      <h3
        style={{
          margin: "0",
          position: "absolute",
          top: "395px",
          left: "93px",
          fontSize: "36px",
          display: "inline-block",
          width: "520px",
          height: "60px",
          color: "#b88865",
          fontFamily: "inherit",
        }}
      >
        <span>
          <span style={{ fontWeight: "600" }}>Don't</span>
          <span style={{ fontFamily: "Montserrat" }}>{` `}</span>
        </span>
        <span style={{ fontFamily: "'Baloo Tamma 2'", color: "#8c4e21" }}>
          'trip'
        </span>
        <span>
          <span style={{ fontFamily: "Montserrat" }}>{` `}</span>
          <span style={{ fontWeight: "600" }}>over the details</span>
          <span style={{ fontFamily: "Montserrat" }}>{` `}</span>
        </span>
      </h3>
      <Button
        style={{ position: "absolute", top: "529px", left: "93px" }}
        sx={{ width: 236, height:55, fontFamily: 'Montserrat', fontWeight: 700, fontSize:'20px' }}
        color="secondary"
        variant="contained"
        onClick={handleButtonClick}
        
      >Get Started!</Button>
    
      <div
        style={{
          position: "absolute",
          top: "1303px",
          left: "555px",
          borderRadius: "25px",
          backgroundColor: "#b88865",
          width: "383px",
          height: "389px",
        }}
        onClick={handleButtonClickFour}
      />
      <img
        style={{
          position: "absolute",
          top: "1203.62px",
          left: "1013.72px",
          borderRadius: "25px",
          width: "422.86px",
          height: "468.14px",
        }}
        alt=""
        onClick={handleButtonClickFive}
        src={imgFifteen}
      />
      <div
        style={{
          position: "absolute",
          top: "1218px",
          left: "149.37px",
          borderRadius: "25px",
          backgroundColor: "#b88865",
          width: "352.47px",
          height: "406.95px",
          transform: " rotate(9.24deg)",
          transformOrigin: "0 0",
        }}
        onClick={handleButtonClickThree}
      />
      <h3
        style={{
          margin: "0",
          position: "absolute",
          top: "1029px",
          left: "610px",
          fontSize: "36px",
          fontWeight: "600",
          fontFamily: "inherit",
          color: "#b88865",
        }}
      >
        ready to explore ?
      </h3>
      <h1
        style={{
          margin: "0",
          position: "absolute",
          top: "1073px",
          left: "372px",
          fontSize: "52px",
          fontWeight: "800",
          fontFamily: "'Baloo Tamma 2'",
          color: "#8c4e21",
        }}
      >{`SOME OF OUR TOP ITINERARIES `}</h1>
      <section
        style={{
          position: "absolute",
          top: "3620px",
          left: "0px",
          backgroundColor: "#63857a",
          width: "1512px",
          height: "390px",
        }}
      />
      <div
  style={{
    position: "absolute",
    top: "3730px",
    left: "530px",
    fontWeight: "600",
    color: "#efb68d",
  }}
>
  <span style={{ textDecoration: "underline", marginRight: "30px" }}>home</span>
  <span style={{ textDecoration: "underline", marginRight: "30px" }}>plan trip</span>
  <span style={{ textDecoration: "underline", marginRight: "30px" }}>top itineraries</span>
  <span style={{ textDecoration: "underline" }}>login</span>
</div>

      
      <h3
        style={{
          margin: "10",
          position: "absolute",
          top: "1964px",
          left: "910px",
          fontSize: "36px",
          fontWeight: "600",
          fontFamily: "inherit",
          color: "#b88865",
          display: "inline-block",
          width: "517px",
          height: "549px",
        }}
      >
        <p style={{ margin: "" }}>
          I can't believe how cool PawPals is, and I'm only 16! My mom said I can
          plan our trip to Disneyland, and this made everything so easy.
        </p>
        <p style={{ margin: "" }}>&nbsp;</p>
        <p style={{ margin: "" }}>
          I only had to put our travel dates and our location, and it magically
          planned our whole trip. I’m so excited to go on more trips :D
        </p>
      </h3>
      <h1
        style={{
          margin: "0",
          position: "absolute",
          top: "433px",
          left: "93px",
          fontSize: "46px",
          fontWeight: "800",
          fontFamily: "'Baloo Tamma 2'",
          color: "#8c4e21",
        }}
      >
        WE’VE GOT YOU COVERED
      </h1>
      <img
        style={{
          position: "absolute",
          top: "1390px",
          left: "497px",
          width: "398px",
          height: "319px",
          objectFit: "cover",
        }}
        alt=""
        src={imgEleven}
        onClick={handleButtonClickFour}
      />
      <img
        style={{
          position: "absolute",
          top: "1269px",
          left: "35px",
          width: "449.52px",
          height: "321.88px",
          objectFit: "cover",
        }}
        alt=""
        onClick={handleButtonClickThree}
        src={imgSix}
      />
      <img
        style={{
          position: "absolute",
          top: "1269px",
          left: "996px",
          width: "343px",
          height: "393px",
          objectFit: "cover",
        }}
        alt=""
        onClick={handleButtonClickFive}
        src={imgTwo}
      />
      <img
        style={{
          position: "absolute",
          top: "2002px",
          left: "432px",
          width: "588px",
          height: "636px",
          objectFit: "cover",
        }}
        alt=""
        src={imgSeven}
      />
      <h1
        style={{
          margin: "0",
          position: "absolute",
          top: "2013px",
          left: "178px",
          fontSize: "48px",
          fontWeight: "600",
          fontFamily: "inherit",
        }}
      >
        Meet
      </h1>
      <h1
        style={{
          margin: "0",
          position: "absolute",
          top: "2060px",
          left: "178px",
          fontSize: "96px",
          fontWeight: "600",
          fontFamily: "inherit",
        }}
      >
        Rachie!
      </h1>
      <h1
        style={{
          margin: "0",
          position: "absolute",
          top: "2893px",
          left: "1066px",
          fontSize: "48px",
          fontWeight: "600",
          fontFamily: "inherit",
        }}
      >
        Meet
      </h1>
      <h1
        style={{
          margin: "0",
          position: "absolute",
          top: "2940px",
          left: "1066px",
          fontSize: "96px",
          fontWeight: "600",
          fontFamily: "inherit",
        }}
      >
        Alex!
      </h1>
      <img
        style={{
          position: "absolute",
          top: "2209px",
          left: "310px",
          width: "199.08px",
          height: "195.93px",
          objectFit: "cover",
        }}
        alt=""
        src={imgThree}
      />
      <img
        style={{
          position: "absolute",
          top: "2309px",
          left: "50px",
          width: "427px",
          height: "173px",
          objectFit: "cover",
        }}
        alt=""
        src={imgFour}
      />
      <h1
        style={{
          margin: "0",
          position: "absolute",
          top: "1351px",
          left: "756px",
          fontSize: "48px",
          fontWeight: "600",
          fontFamily: "inherit",
          display: "inline-block",
          width: "307px",
          height: "119px",
        }}
        onClick={handleButtonClickFour}
      >
        tahoe
      </h1>
      <h2
        style={{
          margin: "0",
          position: "absolute",
          top: "1545px",
          left: "135.14px",
          fontSize: "40px",
          fontWeight: "600",
          fontFamily: "inherit",
          display: "inline-block",
          width: "396.01px",
          height: "119px",
          transform: " rotate(9.25deg)",
          transformOrigin: "0 0",
        }}
        onClick={handleButtonClickThree}
      >
        palm springs
      </h2>
      <h1
        style={{
          margin: "0",
          position: "absolute",
          top: "1364px",
          left: "1189px",
          fontSize: "48px",
          fontWeight: "600",
          fontFamily: "inherit",
          display: "inline-block",
          width: "171px",
          height: "60px",
        }}
        onClick={handleButtonClickFive}
      >
        hawaii
      </h1>
      <h3
        style={{
          margin: "0",
          position: "absolute",
          top: "2976px",
          left: "94px",
          fontSize: "36px",
          fontWeight: "600",
          fontFamily: "inherit",
          color: "#63857a",
          display: "inline-block",
          width: "580px",
          height: "536px",
        }}
      >{`As a busy college student, PawPals is a life saver! One of my favorite features is how it effortlessly it integrates everything I want to do... and I only have to click one button! `}</h3>
      <img
        style={{
          position: "absolute",
          top: "2950px",
          left: "759px",
          width: "470px",
          height: "528px",
          objectFit: "cover",
        }}
        alt=""
        src={imgOne}
      />
      <img
        style={{
          position: "absolute",
          top: "3060px",
          left: "1095px",
          width: "64.84px",
          height: "86.32px",
          objectFit: "cover",
        }}
        alt=""
        src={imgSeventeen}
      />
      <img
        style={{
          position: "absolute",
          top: "3111px",
          left: "1147px",
          width: "98px",
          height: "121px",
          objectFit: "cover",
        }}
        alt=""
        src={imgThirteen}
      />
      <div
        style={{
          position: "absolute",
          top: "3880px",
          left: "568px",
          fontSize: "20px",
          fontWeight: "500",
          color: "#bfd0ce",
        }}
      >{`pack us in your suitcase for your next trip ;) `}</div>
      <img
        style={{
          position: "absolute",
          top: "3797px",
          left: "798px",
          width: "61px",
          height: "61px",
          objectFit: "cover",
        }}
        alt=""
        src={imgTwentyone}
      />
      <img
        style={{
          position: "absolute",
          top: "3797px",
          left: "713px",
          width: "61px",
          height: "61px",
          objectFit: "cover",
        }}
        alt=""
        src={imgEighteen}
      />
      <img
        style={{
          position: "absolute",
          top: "3797px",
          left: "884px",
          width: "61px",
          height: "61px",
          objectFit: "cover",
        }}
        alt=""
        src={imgTwenty}
      />
      <img
        style={{
          position: "absolute",
          top: "3797px",
          left: "626px",
          width: "61px",
          height: "61px",
          objectFit: "cover",
        }}
        alt=""
        src={imgNineteen}
      />
      <img
        style={{
          position: "absolute",
          top: "260.56px",
          left: "1112px",
          width: "85.42px",
          height: "80.36px",
          objectFit: "cover",
        }}
        alt=""
        src={imgFourteen}
      />
      <img
        style={{
          position: "absolute",
          top: "225.61px",
          left: "1059.78px",
          width: "170.15px",
          height: "131.25px",
          objectFit: "cover",
        }}
        alt=""
        src={imgTwelve}
      />
      <img
        style={{
          position: "absolute",
          top: "281px",
          left: "1080px",
          width: "452px",
          height: "480px",
          objectFit: "cover",
        }}
        alt=""
        src={imgTen}
      />
      <img
        style={{
          position: "absolute",
          top: "1991px",
          left: "316px",
          width: "64px",
          height: "70px",
          objectFit: "cover",
        }}
        alt=""
        src={imgEight}
      />
      <img
        style={{
          position: "absolute",
          top: "2886px",
          left: "994px",
          width: "55px",
          height: "57px",
          objectFit: "cover",
        }}
        alt=""
        src={imgNine}
      />
      <img
        style={{
          position: "absolute",
          top: "484px",
          left: "909px",
          width: "248px",
          height: "276px",
          objectFit: "cover",
        }}
        alt=""
        src={imgFive}
      />
      <img
        style={{
          position: "absolute",
          top: "285px",
          left: "769px",
          width: "221px",
          height: "162px",
          objectFit: "cover",
        }}
        alt=""
        src={imgSixteen}
      />
      <div
        style={{
          position: "absolute",
          top: "326px",
          left: "790px",
          fontSize: "22px",
          fontWeight: "600",
          color: "#63857a",
        }}
      >
        we is me btw
      </div>
      <img
        style={{
          position: "absolute",
          top: "1148.56px",
          left: "868.57px",
          width: "116.87px",
          height: "116.87px",
          objectFit: "cover",
        }}
        alt=""
        src={imgTwentyfour}
      />
      <img
        style={{
          position: "absolute",
          top: "967px",
          left: "423px",
          width: "124.92px",
          height: "124.92px",
          objectFit: "cover",
        }}
        alt=""
        src={imgTwentythree}
      />
      <img
        style={{
          position: "absolute",
          top: "52px",
          left: "52px",
          width: "52px",
          height: "52px",
          objectFit: "cover",
        }}
        alt=""
        onClick={handleButtonClickTwo}
        src={imgTwentytwo}
      />
    </div>
    </ThemeProvider>
  );
};

export default Home;
