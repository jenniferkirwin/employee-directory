import React, { useReducer } from 'react';
import MaterialTable from 'material-table';
import API from '../utilities/API';

const headerCells = [
  { title: 'ID', field: 'id' },
  { title: 'Name', field: 'name' },
  { title: 'E-Mail', field: 'email' },
  { title: 'Phone', field: 'phone' },
  { title: 'Website', field: 'website' },
  { title: 'Company', field: 'company.name' }
];

export default function UserTable({users}) {

  React.useEffect(() => {
    API.getEmployees()
    .then(({data}) => dispatch({type: "foundUsers", resData: data}))
    .catch(err => console.log(err));
  }, []);

  const [userData, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "foundUsers":
        return {
          ...state,
          foundUserData: action.resData
        }
      default:
        return state;
    }
  }, {foundUserData: []});

  return (
    <MaterialTable
    columns = {
      headerCells
    }
    data = {
      userData.foundUserData
    }        
    options = {{
      search: true,
      debounceInterval: 500,
      draggable: false,
      showTitle: false   
    }}
  />
  );
}
