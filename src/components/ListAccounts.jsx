import { useState } from "react"

export default function ListAccounts() {
    
    return (
        <>
            <h2>Saskaitu sarasas</h2>

            <ul className="no-bullets">
                <li>
                    <div>
                        <div className="accountsList">
                            <p>Vardas</p>
                            <p>Pavardė</p>
                            <p>Balansas</p>
                            <form>
                                <fieldset className="fieldset">
                                    <input type="number" className="fieldset-input" />
                                    <div className="fieldset-buttons">
                                        <button className="button">Prideti lesas</button>
                                        <button className="button">Nuskaiciuoti lesas</button>
                                    </div>
                                </fieldset>
                            </form>
                            <button className="button-del">Istrinti saskaita</button>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}