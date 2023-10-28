import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import { createProduct, reset } from "../../../../store/productReducer";

import Spinner from "../../../customer/components/Spinner/Spinner";
const AddProductsForm = () => {
  const { isLoading, error, added } = useSelector((state) => state.product);

  const [form, setForm] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    quantity: "",
    price: "",
    discountPrice: "",
    discountPercent: "",
    description: "",
    category: [],
    sizes: [],
  });
  // console.log(form);

  const [category1, setCategory1] = useState("");
  const [category2, setCategory2] = useState("");
  const [category3, setCategory3] = useState("");
  const [size1, setSize1] = useState({
    name: "",
    quantity: "",
  });
  const [size2, setSize2] = useState({
    name: "",
    quantity: "",
  });
  const [size3, setSize3] = useState({
    name: "",
    quantity: "",
  });

  //   For redux
  const dispatch = useDispatch();

  const handleChange1 = (e) => {
    setCategory1(e.target.value);
  };
  const handleChange2 = (e) => {
    setCategory2(e.target.value);
  };
  const handleChange3 = (e) => {
    setCategory3(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    form.category = [
      {
        name: category1,
        level: 1,
      },
      {
        name: category2,
        level: 2,
      },
      {
        name: category3,
        level: 3,
      },
    ];
    form.sizes = [size1, size2, size3];
    // console.log(form);

    dispatch(createProduct(form));

    setForm({
      imageUrl: "",
      brand: "",
      title: "",
      color: "",
      quantity: "",
      price: "",
      discountPrice: "",
      discountPercent: "",
      description: "",
      category: [],
      sizes: [],
    });
    setCategory1("");
    setCategory2("");
    setCategory3("");
    setSize1({
      name: "",
      quantity: "",
    });
    setSize2({
      name: "",
      quantity: "",
    });
    setSize3({
      name: "",
      quantity: "",
    });
  };

  if (error) {
    toast.error(error);
  }

  if (added) {
    // toast.success("Product Added Successfully");
    Swal.fire("Added", "Product Added Successfully", "success");
    dispatch(reset());
  }

  return (
    <div className="bg-white w-full px-4 py-5">
      <ToastContainer position="top-center" autoClose={2000} />
      <div className="flex justify-center">
        <h1 className="text-gray-900 font-bold text-3xl">Add Product</h1>
      </div>
      {/*  Form  */}
      <form className="flex flex-col gap-2 my-3" onSubmit={submitHandler}>
        <TextField
          id="outlined-basic1"
          label="Image Url"
          variant="outlined"
          value={form.imageUrl}
          onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
          required
        />
        <div className="flex gap-2 w-full ">
          <TextField
            id="outlined-basic2"
            label="Brand"
            variant="outlined"
            className="w-full"
            value={form.brand}
            onChange={(e) => setForm({ ...form, brand: e.target.value })}
          />
          <TextField
            id="outlined-title"
            label="Title"
            variant="outlined"
            className="w-full"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </div>
        <div className="flex gap-2">
          <TextField
            id="outlined-color"
            label="Color"
            variant="outlined"
            className="w-full"
            value={form.color}
            onChange={(e) => setForm({ ...form, color: e.target.value })}
            required
          />
          <TextField
            id="outlined-quantity"
            label="Quantity"
            variant="outlined"
            className="w-full"
            type="number"
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
            required
          />
        </div>
        <div className="flex gap-2">
          <TextField
            id="outlined-price"
            label="Price"
            variant="outlined"
            className="w-full"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
          />
          <TextField
            id="outlined-discount"
            label="Discount Price"
            variant="outlined"
            className="w-full"
            type="number"
            value={form.discountPrice}
            onChange={(e) =>
              setForm({ ...form, discountPrice: e.target.value })
            }
          />
          <TextField
            id="outlined-percentage"
            label="Discount Percentage"
            variant="outlined"
            className="w-full"
            type="number"
            value={form.discountPercent}
            onChange={(e) =>
              setForm({
                ...form,
                discountPercent: e.target.value,
              })
            }
          />
        </div>
        <div className="flex gap-2 mt-[5px]">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category 1</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category1}
              label="Category 1"
              onChange={handleChange1}
              required
            >
              <MenuItem value={"men"}>Men</MenuItem>
              <MenuItem value={"women"}>Women</MenuItem>
              <MenuItem value={"children"}>Children</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple1-select-label">Category 2</InputLabel>
            <Select
              labelId="demo-simple1-select-label"
              id="demo-simple1-select"
              value={category2}
              label="Category 2"
              onChange={handleChange2}
              required
            >
              <MenuItem value={"clothing"}>Clothing</MenuItem>
              <MenuItem value={"accessories"}>Accessories</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple2-select-label">Category 3</InputLabel>
            <Select
              labelId="demo-simple2-select-label"
              id="demo-simple2-select"
              value={category3}
              label="Category 3"
              onChange={handleChange3}
              required
            >
              <MenuItem value={"dresses"}>Dresses</MenuItem>
              <MenuItem value={"menKurtas"}>Men Kurtas</MenuItem>
              <MenuItem value={"watches"}>Watches</MenuItem>
            </Select>
          </FormControl>
        </div>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <div className="flex gap-2">
          <TextField
            id="outlined-size1"
            label="Size Name"
            variant="outlined"
            className="w-full"
            value={size1.name}
            onChange={(e) => {
              setSize1({ ...size1, name: e.target.value });
            }}
            required
          />
          <TextField
            id="outlined-quantity1"
            label="Quantity"
            variant="outlined"
            className="w-full"
            type="number"
            value={size1.quantity}
            onChange={(e) => {
              setSize1({ ...size1, quantity: e.target.value });
            }}
            required
          />
        </div>{" "}
        <div className="flex gap-2">
          <TextField
            helperText="Please enter size 'small','medium','large','xlarge' etc."
            id="outlined-size2"
            label="Size Name"
            variant="outlined"
            className="w-full"
            value={size2.name}
            onChange={(e) => {
              setSize2({ ...size2, name: e.target.value });
            }}
          />
          <TextField
            id="outlined-qunatity2"
            label="Quantity"
            variant="outlined"
            className="w-full"
            type="number"
            value={size2.quantity}
            onChange={(e) => {
              setSize2({ ...size2, quantity: e.target.value });
            }}
          />
        </div>{" "}
        <div className="flex gap-2">
          <TextField
            id="outlined-size3"
            label="Size Name"
            variant="outlined"
            className="w-full"
            value={size3.name}
            onChange={(e) => {
              setSize3({
                ...size3,
                name: e.target.value,
              });
            }}
          />
          <TextField
            id="outlined-quantity3"
            label="Quantity"
            variant="outlined"
            className="w-full"
            type="number"
            value={size3.quantity}
            onChange={(e) => {
              setSize3({
                ...size3,
                quantity: e.target.value,
              });
            }}
          />
        </div>
        <div className="flex justify-center mt-5">
          <Button
            variant="contained"
            type="submit"
            className="md:w-[30%] px-4 py-3"
            sx={{
              backgroundColor: "##9155FD",
              color: "#fff",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "##9155FE",
              },
            }}
          >
            {!isLoading && "Add Product"}
            {isLoading && (
              <span className="flex gap-2">
                <Spinner /> Submitting...
              </span>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddProductsForm;
