import { toast } from 'react-toastify';

export const succesNotify = text =>
  toast.success(text, {
    position: toast.POSITION.BOTTOM_RIGHT
  });

export const errorNotify = () =>
  toast.error('Something went wrong !', {
    position: toast.POSITION.BOTTOM_RIGHT
  });
