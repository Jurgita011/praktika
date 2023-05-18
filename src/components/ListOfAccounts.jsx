export default function ListOfAccounts({ accounts, setDeleteModalData, doSort, sort }) {

    
    const destroy = c => setDeleteModalData(c);

    return (
        <>
            <div className="card m-5">
                <h2 className="card-header list-header">Saskaitu sarasas</h2>
                <div className="card-body">
                    <p className="sort">Sort by Surname<span className={'sort-button ' + sort} onClick={doSort}></span></p>
                    
                    <ul className="no-bullets list-group list-group-flush">
                        {
                            accounts
                                ? accounts.length
                                    ? accounts.map(c => (
                                        <li key={c.id}>
                                            <div className="accounts-list">
                                                <div className="account-name">
                                                    <p>{c.Vardas}</p>
                                                    <p>{c.Pavarde}</p>
                                                    <p>{c.Balance}<span>€</span></p>
                                                </div>
                                                <form>
                                                    <fieldset className="fieldset">
                                                        <input type="number" className="fieldset-input" />
                                                        <div className="fieldset-buttons">
                                                            <button className="button">Prideti lesas</button>
                                                            <button className="button">Nuskaiciuoti lesas</button>
                                                        </div>
                                                    </fieldset>
                                                </form>
                                                <button className="button-del" onClick={_ => destroy(c)}>Istrinti</button>
                                            </div>
                                        </li>))
                                    : 'No accounts yet'
                                : '...loading'
                        }

                    </ul>
                </div>
            </div>
        </>
    )
}