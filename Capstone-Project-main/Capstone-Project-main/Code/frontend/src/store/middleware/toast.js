import Swal from "sweetalert";

const toast = store => next => action => {
    if (action.type === "error" ||action.type==="api/callFailed" || action.type === "auth/onAuthError") {
      Swal.fire("Failed", action.payload, "error");
    }
    else return next(action);
  };
  
  export default toast;
  