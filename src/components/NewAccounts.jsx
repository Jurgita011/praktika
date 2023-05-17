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

import {useState} from "react"

export default function NewAccounts() {

  return (
    <>
      <h2>Saskaitu sarasas</h2>

      <form>
        <fieldset>
          <input type="text" placeholder="Vardas" />
          <input type="text" placeholder="Pavardė" />
          <button className="button">prideti</button>
        </fieldset>
      </form>
    </>

  )

}






