import { Publish } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Chart from "../components/Chart";
import Dropdown from "../components/Form/Dropdown";
import Input from "../components/Form/Input/Input";
import { productStatsData, singleProduct } from "../dummyData";

const Product = () => {
  const { image, name, ...productData } = singleProduct;

  const productName = {
    id: "name",
    name: "name",
    type: "text",
    label: "name",
    errorMessage: "Please enter a valid name.",
    required: true,
  };

  const [values, setValues] = useState({
    name: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const active = [
    { value: "Yes", text: "Yes" },
    { value: "No", text: "No" },
  ];

  const stock = [
    { value: "Yes", text: "Yes" },
    { value: "No", text: "No" },
  ];

  const productDetails = (
    <div className="p-5 shadow-lg rounded-lg basis-2/6 bg-white dark:bg-gray-700 dark:text-white">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-xl">{name}</h2>
        <img
          src={image}
          alt={name}
          className="h-24 w-24 object-cover rounded-lg"
          width={96}
          height={96}
        />
      </div>

      <div>
        {Object.entries(productData).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="capitalize">{key}: </span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const productEdit = (
    <div className="basis-4/6 flex flex-col gap-3">
      <Input
        key={productName.id}
        {...productName}
        value={values[productName.name]}
        onChange={onChange}
      />

      <Dropdown id="active" name="active" label="Active" options={active} />
      <Dropdown id="stock" name="stock" label="In Stock" options={stock} />
    </div>
  );

  const imageUpload = (
    <div className="flex basis-2/6 justify-center items-center my-4">
      <label htmlFor="file">
        <div className="w-24 h-24 rounded-xl cursor-pointer border-2 border-dashed border-black dark:border-white flex items-center justify-center">
          <Publish />
        </div>
      </label>
      <input type="file" id="file" className="hidden" />
    </div>
  );

  const chart = (
    <div className="p-5 shadow-lg rounded-lg bg-white dark:bg-gray-700">
      <Chart
        title="Sales Performance"
        data={productStatsData}
        dataKey="Sales"
      />
    </div>
  );

  return (
    <div className="w-full p-5 flex flex-col gap-5 dark:text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Product</h1>

        <Link to="/products/create">
          <Button>Create</Button>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-3">
        {productDetails}
        <form className="basis-4/6 p-5 pt-8 shadow-lg rounded-lg bg-white dark:bg-gray-700">
          <div className="lg:flex justify-between">
            {productEdit}
            {imageUpload}
          </div>
          <div className="flex justify-end">
            <Button>Update</Button>
          </div>
        </form>
      </div>

      {chart}
    </div>
  );
};

export default Product;
