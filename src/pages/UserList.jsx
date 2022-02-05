import { IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { userData } from "../dummyData";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";

const UserList = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-2">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={params.row.avatar}
              alt={`${params.row.avatar}'s avatar`}
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 190 },
    { field: "status", headerName: "Status", width: 90 },
    { field: "transaction", headerName: "Transaction", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/users/${params.row.id}`}>
              <IconButton>
                <EditOutlined className="text-green-400" titleAccess="Edit"/>
              </IconButton>
            </Link>
            <IconButton>
              <DeleteOutline className="text-red-400" titleAccess="Delete"/>
            </IconButton>
          </>
        );
      },
    },
  ];

  return (
    <div className="h-[calc(100vh_-_5.5rem)]">
      <DataGrid
        className="dark:text-white"
        rows={userData}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
