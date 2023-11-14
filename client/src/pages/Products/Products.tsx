import { useState } from 'react';
import './style.scss'
import DataGridBox from '../../components/DataGridBox/DataGridBox';
import AddNew from '../../components/AddNewUser/AddNewUser';
import { GridColDef } from '@mui/x-data-grid';
import { products } from '../../data';

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "img",
        headerName: "Image",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />;
        },
    },
    {
        field: "title",
        type: "string",
        headerName: "Title",
        width: 250,
    },
    {
        field: "color",
        type: "string",
        headerName: "Color",
        width: 110,
    },
    {
        field: "price",
        type: "string",
        headerName: "Price",
        width: 120,
    },
    {
        field: "producer",
        headerName: "Producer",
        type: "string",
        width: 160,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 120,
        type: "string",
    },
    {
        field: "inStock",
        headerName: "In Stock",
        width: 110,
        type: "boolean",
    },
];

const Products = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="products">
            <div className="info">
                <h1>Products</h1>
                <button onClick={() => setOpen(true)}>Add New Product</button>
            </div>
            <DataGridBox slug="products" columns={columns} rows={products} />
            {open && <AddNew setOpen={setOpen} slug="Product" columns={columns} />}
        </div>
    )
}

export default Products;