import React from 'react';

import imgOne from '../Images/house2.png'
import imgTwo from '../Images/dogPawOne.png'

import { useNavigate } from 'react-router-dom';


const PALMSPRINGS = () => {

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
          height: "4350px",
          overflow: "hidden",
          textAlign: "left",
          fontSize: "40px",
          color: "#b88865",
          fontFamily: "Montserrat",
        }}
      >
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
            top: "2400px",
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
            >{`Palm Springs is known for its desert oasis, hot springs, arts culture, and so much more. I `}</span>
            <b style={{ color: "#92603d" }}>‘</b>
          </span>
          <b style={{ color: "#92603d" }}>
            <span>paw-mise</span>
          </b>
          <span>
            <b style={{ color: "#92603d" }}>’</b>
            <span style={{ fontWeight: "600" }}>
              {" "}
              you’ll enjoy your visit to Palm Spring!
            </span>
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
          Palm Springs
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
            Start your day with a delicious breakfast at Cheeky’s, known for their
            creative menu featuring locally sourced ingredients and seasonal
            dishes.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>10am-12pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Head to the Palm Springs Aerial Tramway, where you can take a scenic
            ride up the San Jacinto Mountains. Enjoy breathtaking views of the
            Coachella Valley and explore the hiking trails and nature walks at the
            Mountain Station.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>12pm-1pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Grab a quick lunch at Sandwich Spot, a local favorite for tasty
            sandwiches and salads.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>1pm-3pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Spend the afternoon relaxing at one of Palm Springs’ renowned spas.
            The Spa at The Parker Palm Springs offers a luxurious and tranquil
            environment, with a variety of rejuvenating treatments to choose from.
            Indulge in a massage or facial to unwind and pamper yourself.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>3pm-5pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Take a leisurely stroll through the Palm Springs Art Museum. This
            modern and contemporary art museum showcases a diverse collection of
            artworks, including paintings, sculptures, photography, and more.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>5pm-7pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Treat yourself to a delightful dinner at Trio Restaurant, known for
            its sophisticated ambiance and innovative American cuisine. Enjoy
            their selection of cocktails and indulge in their delicious seafood or
            steak options.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>7pm-10pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Wrap up your day by enjoying the vibrant nightlife in downtown Palm
            Springs. Head to VillageFest, a vibrant street fair that takes place
            every Thursday night. Explore the local shops, enjoy live music
            performances, and sample delicious bites from food vendors.
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
        >{`2 day Palm Springs Itinerary `}</h1>
        <div
          style={{
            position: "absolute",
            top: "716px",
            left: "170px",
            fontFamily: "'Baloo Tamma 2'",
            color: "#63857a",
          }}
        >
          Day 1
        </div>
        <div
          style={{
            position: "absolute",
            top: "2453px",
            left: "150px",
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
            fontSize: "24px",
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
            fontSize: "24px",
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
            fontSize: "24px",
            fontWeight: "600",
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
            top: "214px",
            left: "980.7px",
            borderRadius: "25px",
            backgroundColor: "#b88865",
            width: "380px",
            height: "380px",
            transform: " rotate(0.79deg)",
            transformOrigin: "0 0",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "269px",
            left: "939px",
            width: "422.11px",
            height: "276.15px",
            objectFit: "cover",
          }}
          alt=""
          src={imgOne}
        />
        <h2
          style={{
            margin: "0",
            position: "absolute",
            top: "519px",
            left: "1043.66px",
            fontSize: "inherit",
            fontWeight: "600",
            fontFamily: "inherit",
            color: "#ebddd3",
            display: "inline-block",
            width: "396.01px",
            height: "119px",
            transform: " rotate(0.8deg)",
            transformOrigin: "0 0",
          }}
        >
          palm springs
        </h2>
        <section
          style={{
            position: "absolute",
            top: "2547px",
            left: "163px",
            fontSize: "32px",
            color: "#b88865",
            textAlign: "left",
            display: "inline-block",
            width: "1138px",
            height: "1200px", // Specify a height for the scrolling to work
    overflowY: "auto", // This makes it vertically scrollable
 
            fontFamily: "Montserrat",
          }}
        >
          <p style={{ margin: "" }}>
            <b>9am-10am</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Start your second day with a hearty breakfast at Elmer’s Restaurant, a
            Palm Springs institution known for its delicious breakfast classics
            like pancakes, omelets, and bacon.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>10am-12pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Embark on a guided tour of the Indian Canyons, located just outside of
            Palm Springs. These beautiful canyons are home to lush palm oases,
            scenic hiking trails, and ancient Native American artifacts. Explore
            the stunning landscapes and learn about the rich cultural history of
            the Agua Caliente Band of Cahuilla Indians.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>12pm-1pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Grab a quick lunch at Palm Greens Cafe, a popular spot for healthy and
            plant-based cuisine. Their menu features salads, wraps, smoothies, and
            more, all made with fresh and organic ingredients.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>1pm-3pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Visit the Palm Springs Air Museum, where you can explore a vast
            collection of vintage planes and learn about the history of aviation.
            Take a guided tour or try your hand at the flight simulator for a
            unique experience.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>3pm-5pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Take a leisurely walk along the Palm Springs Walk of Stars, located on
            Palm Canyon Drive. This iconic sidewalk features the names of
            celebrities who have made significant contributions to the
            entertainment industry, paying homage to Palm Springs’ rich Hollywood
            history.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>5pm-7pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Enjoy a memorable dinner at Workshop Kitchen + Bar, known for its
            farm-to-table concept and industrial-chic setting. Savor their
            seasonal dishes and craft cocktails, all made with locally sourced
            ingredients.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>7pm-10pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            End your Palm Springs adventure with some live entertainment at the
            Purple Room Supper Club. This retro-style venue offers fantastic
            performances ranging from live music to comedy acts. Sit back, relax,
            and enjoy the nostalgic atmosphere.
          </p>
        </section>
      </div>
    );
  };
  
  export default PALMSPRINGS;
  