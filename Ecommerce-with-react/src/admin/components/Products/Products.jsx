import * as React from "react";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
import { Box, Button } from "@mui/material";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
//  for getting data

import { useDispatch, useSelector } from "react-redux";

import { getAllProducts } from "./../../../../store/productReducer";
import { deleteProduct, reset } from "./../../../../store/productReducer";
function Products() {
  const [category, setCategory] = useState("menKurtas");
  const dispatch = useDispatch();

  const { products, isLoading, error, deleted } = useSelector(
    (state) => state.product
  );

  // console.log(products);
  // getting data
  useEffect(() => {
    if (deleted) {
      Swal.fire("Deleted", "Item deleted Successfully", "success");
    }
    const data = {
      category: category,
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000,
      stock: [],
      sort: "price_high_to_low",
      pageNumber: 0,
      pageSize: 20,
    };

    dispatch(getAllProducts(data));
    //  OnSuccessfully Deleted

    () => {
      dispatch(reset());
    };
  }, [dispatch, category, deleted]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const deleteProductHandler = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3f51b5",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        dispatch(deleteProduct(id)); // now this will delete form firebase
      }
    });
  };

  if (error) {
    toast.error(error);
  }

  return (
    <div className="w-full">
      <ToastContainer position="top-center" autoClose={2000} />
      {isLoading && (
        <>
          <Paper
            sx={{
              width: {
                xs: "80vw",
                md: "90vw",
              },
              height: "100vh",
              overflow: "hidden",
              padding: "12px",
            }}
          >
            <Box height={20} />
            <Skeleton variant="rectangular" width="100%" height={50} />
            <Box height={20} />
            <Skeleton variant="rectangular" width="100%" height={30} />
            <Box height={20} />
            <Skeleton variant="rectangular" width="100%" height={30} />
            <Box height={20} />
            <Skeleton variant="rectangular" width="100%" height={30} />
            <Box height={20} />
            <Skeleton variant="rectangular" width="100%" height={30} />
            <Box height={20} />
            <Skeleton variant="rectangular" width="100%" height={30} />
            <Box height={20} />
            <Skeleton variant="rectangular" width="100%" height={30} />
            <Box height={20} />
            <Skeleton variant="rectangular" width="100%" height={30} />
            <Box height={20} />
            <Skeleton variant="rectangular" width="100%" height={30} />
            <Box height={20} />
            <Skeleton variant="rectangular" width="100%" height={30} />
            <Box height={20} />
            <Skeleton variant="rectangular" width="100%" height={30} />
            <Box height={20} />
            <Skeleton variant="rectangular" width="100%" height={30} />
            <Box height={20} />
            <Skeleton variant="rectangular" width="100%" height={30} />
          </Paper>
        </>
      )}

      {!isLoading && (
        <Paper
          sx={{
            maxWidth: {
              xs: "80vw",
              md: "100%",
            },
            overflow: "hidden",
            padding: "12px",
          }}
        >
          <TableContainer>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ padding: "20px" }}
            >
              Products List
            </Typography>
            <Stack direction="row" spacing={2} className="my-2 mb-2 mr-2 ">
              {/*       MENU     */}
              <FormControl className="w-[50%] md:w-[20%]">
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={handleCategoryChange}
                >
                  <MenuItem value={"menKurtas"}>Men Kurtas</MenuItem>
                  <MenuItem value={"dresses"}>Woman Dresses</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align={"left"}
                    style={{
                      minWidth: {
                        md: "200px",
                      },
                    }}
                  >
                    Image
                  </TableCell>
                  <TableCell
                    align={"left"}
                    style={{
                      minWidth: {
                        md: "200px",
                      },
                    }}
                  >
                    Title
                  </TableCell>
                  <TableCell
                    align={"left"}
                    style={{
                      minWidth: {
                        md: "200px",
                      },
                    }}
                  >
                    Category
                  </TableCell>

                  <TableCell
                    align={"left"}
                    style={{
                      minWidth: {
                        md: "200px",
                      },
                    }}
                  >
                    Price
                  </TableCell>
                  <TableCell
                    align={"left"}
                    style={{
                      minWidth: {
                        md: "200px",
                      },
                    }}
                  >
                    Delete
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products?.products?.content
                  // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, id) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={id}>
                        <TableCell
                          align={"left"}
                          sx={{
                            minWidth: {
                              md: "200px",
                            },
                          }}
                        >
                          <Avatar alt="Image" src={row.imageUrl} />
                        </TableCell>
                        <TableCell
                          align={"left"}
                          sx={{
                            minWidth: {
                              md: "200px",
                            },
                          }}
                        >
                          {row.title}
                        </TableCell>
                        <TableCell
                          align={"left"}
                          sx={{
                            minWidth: {
                              md: "200px",
                            },
                          }}
                        >
                          {row.category[2].name}
                        </TableCell>
                        <TableCell
                          align={"left"}
                          sx={{
                            minWidth: {
                              md: "200px",
                            },
                          }}
                        >
                          {row.price}
                        </TableCell>
                        <TableCell
                          align={"left"}
                          sx={{
                            minWidth: {
                              md: "200px",
                            },
                          }}
                        >
                          <Stack direction="row" spacing={2}>
                            <Button
                              className="flex gap-2 place-items-center justify-center"
                              variant="outlined"
                              sx={{
                                // backgroundColor: "red",
                                color: "red",
                                border: "1px solid red",
                                "&:hover": {
                                  backgroundColor: "red",
                                  color: "white",
                                },
                              }}
                              onClick={() => deleteProductHandler(row._id)}
                            >
                              <span>Delete</span>
                              <DeleteIcon
                                sx={{
                                  fontSize: "1.2rem",
                                  color: "darkred",
                                  cursor: "pointer",
                                }}
                                // onClick={() => {
                                //   // deleteProductHandler(row.id);
                                // }}
                              />
                            </Button>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination
            rowsPerPageOptions={[3, 5, 10]}
            component="div"
            count={products?.products?.totalPages}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
        </Paper>
      )}
    </div>
  );
}

export default React.memo(Products);
