import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DataGridBox from '../../components/DataGridBox/DataGridBox';
import './style.scss';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { userRows } from '../../data';
import { useState } from 'react';
import AddNewUser from '../../components/AddNewUser/AddNewUser';

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "img", headerName: "Avatar", width: 100, renderCell: (params) => {
          return <img src={params.row.img || "/noavatar.png"} alt="" /> },
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 110,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 110,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      width: 200,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "string",
      width: 150,
      editable: true,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      type: "string",
      width: 120,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 150,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    { field: "verified", headerName: "Verified", width: 100, type: "boolean"},
];


const Users = () => {

  const [open, setOpen] = useState(false);

  const { isPending, data } = useQuery({
    queryKey: ['allusers'],
    queryFn: () =>
      fetch('http://localhost:8800/api/users')
      .then(
        (res) => res.json()
        ,
      ),
  })

    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button onClick={() => setOpen(true)}>Add New User</button>
            </div>
            {isPending ? "Loading ..." : <DataGridBox slug="users" columns={columns} rows={data} />}
            {open && <AddNewUser setOpen={setOpen} slug="User" columns={columns} />}
        </div>
    )
}

export default Users;