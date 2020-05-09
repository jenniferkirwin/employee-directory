import React from 'react';
import MaterialTable from 'material-table';

const headerCells = [
  { title: 'ID', field: 'id' },
  { title: 'Name', field: 'name' },
  { title: 'E-Mail', field: 'email' },
  { title: 'Phone', field: 'phone' },
  { title: 'Website', field: 'website' },
  { title: 'Company', field: 'company.name' }
];

export default function UserTable({users}) {

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
