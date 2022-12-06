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

    const showBox = () => {
        const boxes = document.querySelectorAll('.box');

        function checkBoxes() {
            const triggerBottom = window.innerHeight / 5 * 4;
 
            boxes.forEach(box => {
                const boxTop = box.getBoundingClientRect().top
                if(boxTop < triggerBottom) {
                    box.classList.add('show');
                } else {
                    box.classList.remove('show');
                }
            })
        };

        setMudar(checkBoxes());
        window.addEventListener('scroll', checkBoxes)
        console.log("bbbbb");
    };

    React.useEffect(() => {
        showBox();
    }, [mudar]);

    return( 
        <section id="Homepage" onWheel={showBox}> 
            <Head title="Home Page" description="Home Page"/>
                {/* <p> {String(authenticated)} </p> */}
            <div className="gallery-menu"  >
                {/* <h1> Scroll Animation </h1> */}

                <div className="box">
                    {/* <h2>Content</h2> */}
                    <img className="imagem01"/>
                </div>

                <div className="box">
                    {/* <h2>Content</h2> */}
                    <img className="imagem02"/>
                </div>

                <div className="box">
                    {/* <h2>Content</h2> */}
                    <img className="imagem03"/>
                </div>

                <div className="box">
                    {/* <h2>Content</h2> */}
                    <img className="imagem04"/>
                </div>

                <div className="box">
                    {/* <h2>Content</h2> */}
                    <img className="imagem05"/>
                </div>

                <div className="box">
                    {/* <h2>Content</h2> */}
                    <img className="imagem06"/>
                </div>

                <div className="box">
                    {/* <h2>Content</h2> */}
                    <img className="imagem07"/>
                </div>

                <div className="box">
                    {/* <h2>Content</h2> */}
                    <img className="imagem08"/>
                </div>

                <div className="box">
                    {/* <h2>Content</h2> */}
                    <img className="imagem09"/>
                </div>
                
                <div className="box">
                    {/* <h2>Content</h2> */}
                    <img className="imagem10"/>
                </div>

                <div className="box">
                    {/* <h2>Content</h2> */}
                    <img className="imagem11"/>
                </div>

                <div className="box">
                    {/* <h2>Content</h2> */}
                    <img className="imagem12"/>
                </div>
                <div className="box">
                    {/* <h2>Content</h2> */}
                    <img className="imagem13"/>
                </div>

                <div className="box">
                    {/* <h2>Content</h2> */}
                    <img className="imagem14"/>
                </div>

                <div className="box">
                    {/* <h2>Content</h2> */}
                    <img className="imagem15"/>
                </div>
 
            </div>
        </section>
    );
};

export default HomePage;