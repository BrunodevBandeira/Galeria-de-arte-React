import React from "react";
import "./HomePage.css";
import { AuthContext } from "../../contexts/Auth";
import HomePageCard from "./HomePageCard";
import leo from "../../assets/leo.jpg";
import marco from "../../assets/marco.jpg";
import Head from "../../components/Head";
 

const HomePage = () => {
    const { authenticated, logOut } = React.useContext(AuthContext);
    console.log("HOMEPAGE ^^");

const [ mudar, setMudar ] = React.useState("");

    return( 
        <section id="Homepage"> 
        <Head title="Home Page" description="Home Page"/>
                {/* <p> {String(authenticated)} </p> */}
            <div className="gallery-menu">

 

            </div>
        </section>
    );
};

export default HomePage;