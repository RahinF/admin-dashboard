import { IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { productData } from "../dummyData";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";

const ProductList = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-2">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={params.row.img}
              alt={params.row.name}
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 90 },
    { field: "price", headerName: "Price", width: 90 },
    { field: "status", headerName: "Status", width: 90 },

    {
      field: "actions",
      headerName: "Actions",
      width: 90,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/products/${params.row.id}`}>
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
        rows={productData}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
