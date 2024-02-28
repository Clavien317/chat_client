import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Dashbord() {
    const [data, setData] = useState([]);
    const history = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        utilisateur();
        verifyAuth();
    }, []);

    const verifyAuth = () => {
        axios.post("http://localhost:4000/verifyAuth", {}, {
            headers: {
                'access-token': localStorage.getItem("token")
            }
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log(err))
    }

    setTimeout(() =>
    {
        if(verifyAuth)
        {
            if(localStorage.getItem("token") !=null)
            {
                console.log("Voici notre token :",localStorage.getItem("token")); 
            }else
            {
                history("/login")
            }
        }
    }, 2);

    const logout = () => {
        localStorage.removeItem("token");
        history("/login");
    }

    const utilisateur = async () => {
        try {
            const info = await axios.get(`http://localhost:4000/${id}`);
            setData(info.data);
            console.log("À PROPOS DE CE USER", info.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des données utilisateur:", error);
        }
    }

    return (
        <div className='contenu'>
            <h1>Welcome @city</h1>
            {
                data.map((item, i) => {
                    return (
                        <div key={i}>
                            <h1>{item.nom}</h1>
                        </div>
                    )
                })
            }
            <br />
            <br />
            <br />
            <button onClick={verifyAuth}>Vérifier l'authentification</button>
            <br />
            <br />
            <button className='logout' onClick={logout}>Se déconnecter</button>
        </div>
    )
}

export default Dashbord;

