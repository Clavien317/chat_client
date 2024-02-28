import React, { useState } from 'react'
import "../style.css"
import Header from '../component/Header'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Connect() {

    const [input,setInput] = useState([])
    const navigate = useNavigate()

    const change=(e)=>
    {
        const name = e.target.name;
        const value = e.target.value
        setInput(values=>({...values,[name]:value}))
    }

    const submit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4000/reinit", input).then((res)=>
            {
                console.log(res);
                navigate("/initialisation")
            })
            
        } catch (error) {
            console.log("Erreur lors de la connexion", error);
        }
    }


  return (
    <>
    <Header />
    <div className='inscrir'>
        <br />
        <h2>Veillez entrer votre email pour recuperer votre compte</h2>
        <fieldset>
            <legend>Recuperation</legend>
                <form action="" onSubmit={submit}>
                    <br />
                    <br />

                    <label htmlFor="">Email</label>
                    <br />
                    <input type="text" name='email' onChange={change}/>
                    <br />
                    <br />
                    <br />
                    <button> Verifier</button>
                    <br />
                    <br />
                    <a href="/login">Entrer mot de passe</a>
                </form>
        </fieldset>
    </div>

    </>
  )
}

export default Connect