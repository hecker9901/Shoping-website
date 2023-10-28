import { useEffect } from "react";
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

import DeleteIcon from "@mui/icons-material/Delete";

import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
import { Box, Button, AvatarGroup } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";

import { getAllOrders } from "../../../../store/orderReducer";
import { getUser } from "../../../../store/authReducer";
//  for getting data

import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { deleteOrder, reset } from "./../../../../store/orderReducer";
const Orders = () => {
  const dispatch = useDispatch();
  const { isLoading, error, orders, deleted } = useSelector(
    (state) => state.order
  );

  useEffect(() => {
    if (deleted) {
      console.log("Deleted from effect", deleted);
      Swal.fire("Success", "Order Deleted Successfully", "success");
      dispatch(reset());
    }

    dispatch(getAllOrders());
  }, [dispatch, deleted]);
  // console.log(orders);

  if (error) {
    toast.error(error);
  }
  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder(id));
  };
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
              Orders List
            </Typography>

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
                    Status
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
                {orders.map((row, id) => {
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
                        <AvatarGroup
                          max={3}
                          sx={{
                            display: "flex",
                            justifyContent: "start",
                          }}
                        >
                          {row.orderItems.map((item) => (
                            <Avatar
                              key={item._id}
                              alt="Image"
                              src={item.product[0].imageUrl}
                            />
                          ))}
                        </AvatarGroup>
                      </TableCell>

                      <TableCell
                        align={"left"}
                        sx={{
                          minWidth: {
                            md: "200px",
                          },
                        }}
                      >
                        {row.orderItems.map((item) => {
                          return item.product[0].title + " , ";
                        })}
                      </TableCell>
                      <TableCell
                        align={"left"}
                        sx={{
                          minWidth: {
                            md: "200px",
                          },
                        }}
                      >
                        {row.totalPrice}
                      </TableCell>
                      <TableCell
                        align={"left"}
                        sx={{
                          minWidth: {
                            md: "200px",
                          },
                        }}
                      >
                        <span
                          className={`${
                            row.orderStatus === "Pending"
                              ? "bg-red-500"
                              : "bg-green-500"
                          } rounded-3xl px-5 py-3 text-white`}
                        >
                          {row.orderStatus}
                        </span>
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
                            onClick={() => {
                              deleteOrderHandler(row._id);
                            }}
                          >
                            <span>Delete</span>
                            <DeleteIcon
                              sx={{
                                fontSize: "1.2rem",
                                color: "darkred",
                                cursor: "pointer",
                              }}
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
        </Paper>
      )}
    </div>
  );
};

export default Orders;
