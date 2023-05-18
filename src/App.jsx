import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { crudCreate, crudDelete, crudEdit, crudRead } from './Functions/localStorageCrud';
import './buttons.scss';
import './App.scss';
import ListOfAccounts from './components/ListOfAccounts'
import AddNewAccount from './components/AddNewAccount';
import DeleteAccount from './components/DeleteAccount'

const KEY = 'myAccounts';


function App() {
  const [listUpdate, setListUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [deleteModalData, setDeleteModalData] = useState(null);
  const [sort, setSort] = useState('default');

  //R read
  useEffect(_ => {
    setAccounts(crudRead(KEY));
  }, [listUpdate]);


  //C create
  useEffect(_ => {
    if (null === createData) {
      return;
    }
    crudCreate(KEY, createData);
    setListUpdate(Date.now());
  }, [createData]);

  //D deleate
  useEffect(_ => {
    if (null === deleteData) {
      return;
    }
    crudDelete(KEY, deleteData.id);
    setListUpdate(Date.now());
  }, [deleteData]);
  useEffect(() => {
    if (sort === 'default') {
      setAccounts(c => [...c].sort((a, b) => a.row - b.row)); // rusiavimas
    } else if (sort === 'asc') {
      setAccounts(c => [...c].sort((a, b) => a.Surname.localeCompare(b.Surname))); // Ascending, nuo A iki Z
    } else {
      setAccounts(c => [...c].sort((b, a) => a.Surname.localeCompare(b.Surname))); // Descending, nuo Z iki A
    }

  }, [sort]);

  const doSort = _ => {
    setSort(s => {
      switch (s) {
        case 'default': return 'asc';
        case 'asc': return 'dsc';
        default: return 'default'
      }
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jurgitos Bankas</h1>
        <div className="container">
          <div className="row">

            <div className="col-8">
              <ListOfAccounts
                accounts={accounts}
                setDeleteModalData={setDeleteModalData}
                sort={sort}
                doSort={doSort}
              />
            </div>

            <div className="col-4">
              <AddNewAccount setCreateData={setCreateData} />
            </div>
          </div>
        </div>
        <DeleteAccount deleteModalData={deleteModalData}
        setDeleteModalData={setDeleteModalData}
        setDeleteData={setDeleteData}
        />
      </header>

    </div >

  );
}
 

export default App;
