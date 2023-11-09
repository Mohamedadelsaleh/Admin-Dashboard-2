import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DataGridBox from '../../components/DataGridBox/DataGridBox';
import './style.scss';
import { userRows } from '../../data';

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "avatar", headerName: "Avatar", width: 100, renderCell: (params) => {
          return <img src={params.row.img || "noavatar.png"} alt="" /> },
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
    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button>Add New User</button>
            </div>
            <DataGridBox slug="users" columns={columns} rows={userRows} />
        </div>
    )
}

export default Users;