import React from 'react';
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
    .then(({data}) => console.log(data))
    .catch(err => console.log(err));
  }, []);

  return (
    <MaterialTable
    title = "Employee Directory"
    columns = {
      headerCells
    }
    data = {
      users
    }        
    options = {{
      search: true,
      debounceInterval: 500,
      draggable: false      
    }}
  />
  );
}
