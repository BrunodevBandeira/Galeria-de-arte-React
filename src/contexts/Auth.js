import React from "react";
import { useNavigate } from "react-router-dom";

//contexto => É a parte que fazemos o controle de login e a regra de negocio(regra de sistema)
//tbm fazemos o armazenamento de forma global na aplicação, vide exemplo o token e usuario.

export const AuthContext = React.createContext(); 

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [ user, setUser ] = React.useState(null);
    const [ loading, setLoading ] = React.useState(true);


     React.useEffect(() => {
        const recoveredUser = localStorage.getItem("user"); 

        if(recoveredUser) {
            setUser(JSON.parse(recoveredUser)); 
        }

        setLoading(false);

    }, []);

    const login =  (email, password) => {
        console.log("LOGIN", {email, password});
        const recoveredUser = localStorage.getItem("user");
        const recoverePassword = JSON.parse(recoveredUser).password;
        if( password === recoverePassword) {
            navigate("/home");
        }
    };


    const verifyPassword = (email, password, confirm) => {
        
        const registerUser = {
            id:" 123",
            email,
            password,
        };
        
        if(password === confirm) {
            localStorage.setItem("user", JSON.stringify(registerUser));
            setUser(registerUser);
        }
        
        console.log("====> CONFIRMADO <====", {password, confirm});

        // navigate("/login");
    }

    const logOut = () => {
        console.log("SAIU <= .... ");
        localStorage.removeItem("user"); 
        setUser(null);
        navigate("/login");
    };



    return(
        <AuthContext.Provider value={{authenticated: !!user, user, loading, login, verifyPassword,  logOut}}>
            { children }
        </AuthContext.Provider>
    );
};


/**
 * parse() recebe uma string JSON e a transforma em um objeto JavaScript. JSON.     stringify() recebe um objeto JavaScript e o transforma em uma string JSON.
 */