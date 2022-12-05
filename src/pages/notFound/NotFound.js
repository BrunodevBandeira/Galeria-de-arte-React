import react from "react";
import Head from "../../components/Head";
import "./NotFound.css";
import foto from "../../assets/dali.jpg";

const NotFound = () => {


    function typeWrite()  {
        document.querySelector(".containerText");
    }

    return(
        <div id="notFound">
            <Head title="Página não encontrada" description="404"/>          
            <div className="notFoundContainer">
                <p className="containerText"> NotFound... </p>
                <img src={foto} title="Not Found... Salvador Dali" />
            </div>
        </div>
    );
};

export default NotFound;