import React from 'react';

import imgOne from '../Images/beach2.png'
import imgTwo from '../Images/dogPawOne.png'

import { useNavigate } from 'react-router-dom';


const HAWAII = () => {

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
          height: "4248px",
          overflow: "hidden",
          textAlign: "left",
          fontSize: "24px",
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
            top: "2357px",
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
            >{`Hawaii is known for its stunning beaches, fresh fruit, cultural diversity, and so much more. I’m `}</span>
            <b style={{ color: "#92603d" }}>‘</b>
          </span>
          <b style={{ color: "#92603d" }}>
            <span>shore</span>
          </b>
          <span>
            <b style={{ color: "#92603d" }}>’</b>
            <span style={{ fontWeight: "600" }}>
              {" "}
              you’ll love your visit to Hawaii!
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
          Hawaii
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
            height: "1200px",
            overflowY: "auto",
            fontFamily: "Montserrat",
          }}
        >
          <p style={{ margin: "" }}>
            <b>9am-10am</b>
          </p>
          <p
            style={{ margin: "", fontWeight: "500" }}
          >{`Start your day with a delicious breakfast at Moke’s Bread & Breakfast. This local favorite offers a variety of mouthwatering options, including their famous macadamia nut pancakes.`}</p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>10am-12pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Begin your Hawaii adventure with a visit to Pearl Harbor and the USS
            Arizona Memorial. Learn about the history and significance of this
            iconic World War II site.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>12pm-1pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Grab a quick lunch at Helena’s Hawaiian Food, a renowned spot for
            authentic Hawaiian cuisine. Don’t miss their kalua pig, lomi salmon,
            and poi.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>1pm-3pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Explore the North Shore and enjoy some fun in the sun at Waimea Bay
            Beach Park. You can swim, snorkel, or simply relax on the beautiful
            sandy beach.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>3pm-5pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Visit the Dole Plantation, a pineapple paradise. Take a ride on the
            Pineapple Express train to learn about the history of pineapple
            farming in Hawaii, and don’t forget to indulge in some refreshing Dole
            Whip.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>5pm-7pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Head to Ala Moana Beach Park and enjoy the breathtaking sunset views.
            Take a leisurely stroll along the waterfront promenade or have a
            picnic while watching the colors of the sky change.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>7pm-10pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Experience the vibrant nightlife in Waikiki. Start with dinner at
            Duke’s Waikiki, a famous beachfront restaurant known for its delicious
            seafood and live Hawaiian music. Afterward, explore the bustling
            streets of Waikiki and try out some of the popular bars and clubs like
            RumFire or Sky Waikiki.
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
        >{`2 day Hawaii Itinerary `}</h1>
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
            top: "2410px",
            left: "150px",
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
        <section
          style={{
            position: "absolute",
            top: "2504px",
            left: "163px",
            fontSize: "32px",
            color: "#b88865",
            textAlign: "left",
            display: "inline-block",
            width: "1138px",
            height: "1200px",
            overflowY: "auto",
            fontFamily: "Montserrat",
          }}
        >
          <p style={{ margin: "" }}>
            <b>9am-10am</b>
          </p>
          <p
            style={{ margin: "", fontWeight: "500" }}
          >{`Start your day with a hearty breakfast at Boots & Kimo’s Homestyle Kitchen. Indulge in their famous macadamia nut pancakes with their homemade macadamia nut sauce.`}</p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>10am-12pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Embark on a thrilling adventure and go snorkeling at Hanauma Bay.
            Explore the vibrant coral reefs and swim among tropical fish and sea
            turtles.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>12pm-1pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Grab a quick lunch at Ono Seafood, a hidden gem known for their
            mouthwatering poke bowls. Choose from a variety of fresh fish and
            toppings for the perfect island-style lunch.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>1pm-3pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Visit the Polynesian Cultural Center and immerse yourself in the rich
            Polynesian heritage. Experience traditional dance performances,
            hands-on activities, and learn about the different cultures of Hawaii
            and its neighboring islands.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>3pm-5pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Take a scenic drive along the East Coast and stop at the iconic
            Lanikai Beach. Enjoy the soft white sand, azure waters, and
            magnificent views of the Mokulua Islands.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>5pm-7pm</b>
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Experience a traditional Hawaiian luau at Germaine’s Luau. Indulge in
            a buffet dinner featuring authentic Hawaiian dishes, enjoy live music
            and dance performances, and participate in cultural activities.
          </p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "" }}>
            <b>7pm-10pm</b>
          </p>
          <p
            style={{ margin: "", fontWeight: "500" }}
          >{`Wrap up your Hawaii adventure with a night dive or snorkel with manta rays in Kona. This unique experience allows you to witness these majestic creatures up close in their natural habitat. `}</p>
          <p style={{ margin: "", fontWeight: "500" }}>&nbsp;</p>
          <p style={{ margin: "", fontWeight: "500" }}>
            Alternatively, if you prefer a more relaxed evening, head to Mauna Kea
            Beach Hotel and stargaze under the clear Hawaiian sky with their
            astronomy program.
          </p>
        </section>
        <img
          style={{
            position: "absolute",
            top: "198.37px",
            left: "971.39px",
            borderRadius: "25px",
            width: "380px",
            height: "380px",
          }}
          alt=""
          src="/rectangle-17.svg"
        />
        <img
          style={{
            position: "absolute",
            top: "216px",
            left: "924px",
            width: "347.25px",
            height: "396.7px",
            objectFit: "cover",
          }}
          alt=""
          src={imgOne}
        />
        <h1
          style={{
            margin: "0",
            position: "absolute",
            top: "321px",
            left: "1139px",
            fontSize: "48px",
            fontWeight: "600",
            fontFamily: "inherit",
            color: "#ebddd3",
            display: "inline-block",
            width: "171px",
            height: "60px",
          }}
        >
          hawaii
        </h1>
      </div>
    );
  };
  
  export default HAWAII;
  