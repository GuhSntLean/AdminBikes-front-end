import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successInfoToast = (info) => {
  toast.success(info, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: 1,
  });
};

export const errorInfoToast = (info) => {
  toast.error(info, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const ToastStatus = () => {
  return (
    <>
      <ToastContainer draggable={false} transition={Zoom} />
    </>
  );
};

export default ToastStatus;
