/*#U1 Bankas REACT
  REACT banko aplikacijos versija
Banką sudaro puslapis, kuriame yra:
 1.Sąskaitų sąrašas su Vardu, Pavarde, Sąskaitos suma, Mygtuku “ištrinti”,
  laukeliu vertei įrašyti ir dviem mygtukais tam laukeliui: “pridėti lėšų” ir “nuskaičiuoti lėšas”;
 2.Naujos sąskaitos sukūrimas (įvedami duomenys: vardas ir pavardė.
Paaiškinimai ir reikalavimai.
1.Nauja sąskaita sukuriama su pradine 0 suma,
 o lėšos pridedamos/nuimamos sąraše įvedant sumą ir spaudžiant atitinkamą mygtuką.
2.Sąskaitos, kurioje yra lėšų ištrinti neturi būti galima.
3.Sąskaitoje likusi suma negali būti minusinė. 
4.Sąskaitas saraše rūšiuoti pagal savininko pavardę.
5.Duomenų bazė - LocalStorage.
*/


import { useState, useRef, useEffect } from "react"

export default function AddNewAccount({ setCreateData }) {

    const nameRef = useRef(null);
    const surnameRef = useRef(null);

    const save = _ => {

        const vardas = nameRef.current.value;
        const pavarde = surnameRef.current.value;

        setCreateData({
            Vardas: vardas,
            Pavarde: pavarde,
            Balance: 0
        });
    };

    return (
        <>
            <div className="card m-5">
                <h2 className="card-header">Nauja saskaita</h2>
                <div className="m-3">
                    <form>
                        <fieldset className="fieldset-add-new">
                            <input className="fieldset-input" type="text" id="name" ref={nameRef} placeholder="Vardas" required />
                            <input className="fieldset-input" type="text" id="surname" ref={surnameRef} placeholder="Pavarde" required />
                        </fieldset>
                    </form>
                    <button className="button-add" onClick={save}>prideti</button>
                </div>
            </div>
        </>
    )
}