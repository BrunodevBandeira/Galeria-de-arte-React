import React from "react";
import "./LoginPage.css";
import { AuthContext  } from "../../contexts/Auth";
import Head from "../../components/Head";

const LoginPage = () => {

    const { authenticated, login } = React.useContext(AuthContext);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("SUBMIT...", { email, password});
        login(email, password); //integração com o contexto e com a api
    }

    return( 
            <div id="login">
                <Head title="Entre" description="Logar"/>
                <h1 className="title"> Login do sistema... </h1>
                <p> {String(authenticated)} </p>
                <form className="form" onSubmit={handleSubmit}>

                    <div className="field">
                        <label htmlFor="email"> Email </label>
                        <input 
                        type="email" 
                        name="email" 
                        id="email"  
                        placeholder="Coloque o Email aqui"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        />  
                    </div>

                    <div className="field">
                        <label htmlFor="password"> Senha </label>
                        <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Coloque a senha aqui"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        />  
                    </div>

                    <div className="actions">
                        <button type="submit"> Entrar... </button>
                    </div>

                </form>
            </div>
    );
};

export default LoginPage;