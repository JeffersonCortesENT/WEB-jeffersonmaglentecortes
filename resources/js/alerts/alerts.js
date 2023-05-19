import Swal from "sweetalert2";

export const showError = (sMessage) => {
  Swal.fire({
    icon: 'error',
    title: 'Error Occured',
    text: sMessage,
  })
}

export const confirmSchedule = async (oFunction) => {
  return await Swal.fire({
    title: 'Do you want to save the changes?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Save',
    confirmButtonColor: 'green',
  });
}

export const showSuccess = (sMessage) => {
  Swal.fire({
    icon: 'success',
    title: 'Appointment Scheduled!',
    text: 'Your appointment have been scheduled!',
  })
}