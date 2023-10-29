import React from 'react';

import imgOne from '../Images/mountain.png'
import imgTwo from '../Images/dogPawOne.png'

import { useNavigate } from 'react-router-dom';


const TAHOE = () => {

    const navigate = useNavigate();
    const handleButtonClickTwo = () => {
        navigate('/home');
      }
    return (
      <div
        style={{
          position: "relative",
          borderRadius: "25px",
          backgroundColor: "#f6ece5",
          width: "100%",
          height: "3796px",
          overflow: "hidden",
          textAlign: "left",
          fontSize: "24px",
          color: "#b88865",
          fontFamily: "Montserrat",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "203px",
            left: "968px",
            borderRadius: "25px",
            backgroundColor: "#b88865",
            width: "380px",
            height: "380px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "290px",
            left: "910px",
            width: "398px",
            height: "319px",
            objectFit: "cover",
          }}
          alt=""
          src={imgOne}
        />
        <h1
          style={{
            margin: "0",
            position: "absolute",
            top: "251px",
            left: "1169px",
            fontSize: "48px",
            fontWeight: "600",
            fontFamily: "inherit",
            color: "#ebddd3",
            display: "inline-block",
            width: "307px",
            height: "119px",
          }}
        >
          tahoe
        </h1>
        <section
          style={{
            position: "absolute",
            top: "679px",
            left: "121px",
            borderRadius: "30px",
            backgroundColor: "#ebddd3",
            border: "3px solid #b88865",
            boxSizing: "border-box",
            width: "1230px",
            height: "1450px",
          }}
        />
        <section
          style={{
            position: "absolute",
            top: "2340px",
            left: "121px",
            borderRadius: "30px",
            backgroundColor: "#ebddd3",
            border: "3px solid #b88865",
            boxSizing: "border-box",
            width: "1230px",
            height: "1450px",
          }}
        />
        <h3
          style={{
            margin: "0",
            position: "absolute",
            top: "335px",
            left: "121px",
            fontSize: "36px",
            display: "inline-block",
            width: "732px",
            fontFamily: "inherit",
          }}
        >
          <span>
            <span
              style={{ fontWeight: "600" }}
            >{`Lake Tahoe is known for it’s scenic beauty, ski resorts, water activities, and so much more. You’ll have `}</span>
            <b style={{ color: "#91613f" }}>‘</b>
          </span>
          <b style={{ color: "#91613f" }}>
            <span>snow</span>
          </b>
          <span>
            <b style={{ color: "#91613f" }}>’</b>
            <span style={{ fontWeight: "600" }}> much fun in Lake Tahoe!</span>
          </span>
        </h3>
        <h1
          style={{
            margin: "0",
            position: "absolute",
            top: "203px",
            left: "121px",
            fontSize: "96px",
            fontWeight: "400",
            fontFamily: "'Baloo Tamma 2'",
            color: "#63857a",
          }}
        >
          Lake Tahoe
        </h1>
        <section
          style={{
            position: "absolute",
            top: "793px",
            left: "170px",
            fontSize: "32px",
            color: "#b88865",
            textAlign: "left",
            display: "inline-block",
            width: "1131px",
            height: "1200px", // Specify a height for the scrolling to work
            overflowY: "auto", // This makes it vertically scrollable
            fontFamily: "Montserrat",
          }}
        >
          <p style={{ margin: "" }}>
            <b>9am-10am</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Start your day with a delicious breakfast at The Old Post Office, a
            charming cafe known for its hearty dishes and cozy ambiance.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>10am-12pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Begin your Lake Tahoe adventure with a visit to Emerald Bay State
            Park. Take a scenic hike to Eagle Falls and enjoy stunning views of
            the crystal-clear waters and surrounding mountains.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>12pm-1pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Grab a quick lunch at Tahoe City Farmers’ Market, where you can sample
            a variety of local foods, fresh produce, and artisan products.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>1pm-3pm</b>
          </p>
          <p
            style={{ margin: "", fontWeight: "500" }}
          >{`Get your adrenaline pumping with a thrilling water sports activity. Rent a kayak or paddle board from Tahoe Paddle & Oar and explore the pristine waters of Lake Tahoe.`}</p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>3pm-5pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Visit the Tallac Historic Site, a collection of historic buildings
            that offer a glimpse into Lake Tahoe’s past. Take a guided tour and
            learn about the early settlers of the area.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>5pm-7pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Enjoy a delicious dinner at Jake’s On The Lake, a lakeside restaurant
            known for its fresh seafood and impressive views. Don’t miss their
            famous Ahi Tuna Poke Bowl.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>7pm-10pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            End your day with a relaxing sunset cruise on Lake Tahoe. Take in the
            breathtaking scenery while sipping on a cocktail and enjoying the
            peaceful ambiance.
          </p>
        </section>
        <section
          style={{
            position: "absolute",
            top: "2460px",
            left: "170px",
            fontSize: "32px",
            color: "#b88865",
            textAlign: "left",
            display: "inline-block",
            width: "1131px",
            height: "1200px", // Specify a height for the scrolling to work
            overflowY: "auto", // This makes it vertically scrollable
            fontFamily: "Montserrat",
          }}
        >
          <p style={{ margin: "" }}>
            <b>9am-10am</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Start your day with breakfast at The Red Hut Cafe, a local favorite
            known for its classic diner fare and hearty portions.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>10am-12pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Embark on a scenic drive around Lake Tahoe, making stops at various
            viewpoints along the way. Don’t miss the panoramic views from the
            Mount Rose Highway Lookout and the Kings Beach overlook.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>12pm-1pm</b>
          </p>
          <p
            style={{ margin: "", fontWeight: "500" }}
          >{`Grab a quick lunch at Sunnyside Restaurant & Lodge, a lakeside eatery that offers a range of delicious options, including fresh salads, sandwiches, and seafood.`}</p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>1pm-3pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Head to Heavenly Mountain Resort and take a ride on the Heavenly
            Gondola. Enjoy breathtaking views of Lake Tahoe and the surrounding
            Sierra Nevada mountains from the observation deck at the top.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>3pm-5pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Explore the vibrant shops and boutiques in the town of Truckee. This
            charming mountain town is known for its unique arts and crafts stores,
            clothing boutiques, and local artisan products.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>5pm-7pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Treat yourself to a relaxing spa treatment at The Ritz-Carlton, Lake
            Tahoe. Indulge in a massage or facial and take advantage of the
            luxurious amenities, including a heated outdoor pool and hot tub.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>7pm-10pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Enjoy a memorable dinner at The Lone Eagle Grille, a lakeside
            restaurant with stunning views and a diverse menu featuring fresh
            seafood, steak, and unique seasonal dishes. End your evening with live
            music and cocktails at one of the local bars in the area.
          </p>
        </section>
        <h1
          style={{
            margin: "0",
            position: "absolute",
            top: "581px",
            left: "121px",
            fontSize: "48px",
            fontWeight: "400",
            fontFamily: "'Baloo Tamma 2'",
            color: "#63857a",
          }}
        >{`2 day Lake Tahoe Itinerary `}</h1>
        <div
          style={{
            position: "absolute",
            top: "716px",
            left: "170px",
            fontSize: "40px",
            fontFamily: "'Baloo Tamma 2'",
            color: "#63857a",
          }}
        >
          Day 1
        </div>
        <div
          style={{
            position: "absolute",
            top: "2379px",
            left: "170px",
            fontSize: "40px",
            fontFamily: "'Baloo Tamma 2'",
            color: "#63857a",
          }}
        >
          Day 2
        </div>
        <div
          style={{
            position: "absolute",
            top: "44px",
            left: "39px",
            borderRadius: "20px",
            backgroundColor: "#63857a",
            width: "63px",
            height: "63px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "50px",
            left: "45px",
            width: "52px",
            height: "52px",
            objectFit: "cover",
          }}
          alt=""
          onClick={handleButtonClickTwo}
          src={imgTwo}
        />
        <div
          style={{
            position: "absolute",
            top: "61px",
            left: "891px",
            fontWeight: "600",
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
            top: "61px",
            left: "1074px",
            fontWeight: "600",
          }}
        >
          top itineraries
        </div>
        <div
          style={{
            position: "absolute",
            top: "61px",
            left: "1321px",
            fontWeight: "600",
            display: "inline-block",
            width: "151px",
            height: "41px",
          }}
        >
          login
        </div>
      </div>
    );
  };
  
  export default TAHOE;
  