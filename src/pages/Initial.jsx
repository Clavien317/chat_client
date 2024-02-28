import React, { useState } from 'react'
import "../style.css"
import Header from '../component/Header'
import axios from "axios"
import {useNavigate} from "react-router-dom"

function Initial() {

    const [input,setInput] = useState([])
    const [txte,setTxte] = useState(true)
    const [type,setType] = useState(false)
    const naviagate = useNavigate()

    const change=(e)=>
    {
        const name = e.target.name;
        const value = e.target.value
        setInput(values=>({...values,[name]:value}))
    }

    const submit = async (e) => {
        e.preventDefault();
        try {
            console.log(input);
            const response = await axios.post("http://localhost:4000/initialisation", input);
            console.log(response);
            naviagate("/login")
        } catch (error) {
            console.log("Erreur lors de la connexion", error);
        }
    }


    const txt=()=>
    {
        setTxte(!txte)
        setType(!type)
    }
  return (
    <>
    <Header />
    <div className='inscrir'>
        <br />
        <h2>Veillez reinitialiser votre mot de passe</h2>
        <fieldset>
            <legend>reinitialisation</legend>
                <form action="" onSubmit={submit}>
                    <br />
                    <br />

                    <label htmlFor="">Email</label>
                    <br />
                    <input type="text" name='email' onChange={change}/>
                    <br />
                    <br />

                    <label htmlFor="">Code de recuperation</label>
                    <br />
                    <input type="text" name='code' onChange={change}/>
                    <br />
                    <br />

                    <label htmlFor="">Nouveau mot de passse</label>
                    <br />
                    <input type={type?"text":"password"} name='password' onChange={change}/> <span onClick={txt}>{(txte?"Show":"Hide")}</span>
                    <br />
                    <br />
                    <br />
                    <button> Connect</button>
                    <br />
                    <br />
                    <a href="/reinitile_mdp">Mot de passe oublier</a>
                </form>
        </fieldset>
    </div>

    </>
  )
}

export default Initial