import { GridColDef } from "@mui/x-data-grid";
import "./style.scss";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //add new item
};

const AddNewUser = (props: Props) => {
    return (
        <div className="addNewUser">
            <div className="model">
                <span className="close" onClick={() => props.setOpen(false)}>X</span>
                <h1>Add New {props.slug}</h1>
                <form onSubmit={handleSubmit}>
                {props.columns
                    .filter((item) => item.field !== "id" && item.field !== "img" && item.field !== "fullName")
                    .map((column) => (
                    <div className="item">
                        <label>{column.headerName}</label>
                        <input
                        type={column.type}
                        placeholder={column.field}
                        />
                    </div>
                    ))}
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
};

export default AddNewUser;
