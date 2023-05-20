export default function DeleteAccount({ deleteModalData, setDeleteModalData, setDeleteData }) {
    const destroy = _ => {
        setDeleteData(deleteModalData);
        setDeleteModalData(null);
    }

    if (null === deleteModalData) {
        return null;
    }

    if (deleteModalData.Balance !== 0) {
        return (
            <div className="modal">
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Negalima istrinti saskaitos</h5>
                            <button type="button" className="btn btn-close" onClick={_ => setDeleteModalData(null)}></button>
                        </div>
                        <div className="modal-body">
                            <p>Negalima istrinti saskaitos, nes yra lesu</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="button" onClick={_ => setDeleteModalData(null)}>OK</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="modal">
            <div className="modal-dialog  modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">istrinti saskaita</h5>
                        <button type="button" className="btn btn-close" onClick={_ => setDeleteModalData(null)}></button>
                    </div>
                    <div className="modal-body">
                        <p>Ar tikrai nori istrinti?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="button-del" onClick={_ => setDeleteModalData(null)}>atsaukti</button>
                        <button type="button" className="button" onClick={destroy}>istrinti</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
