import Swal from "sweetalert2";
import { calculatePrice, removeFromCart } from "../Redux/Slice/cartSlice";
import store from "../Redux/store/store";
export const removeHandler = (item, i) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        store.dispatch(removeFromCart(i));
        store.dispatch(calculatePrice());
      }
    });
  };
