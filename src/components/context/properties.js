// ####### Notification #######
import { toast } from 'react-toastify';

export let successNotify = text =>
  toast.success(text, {
    position: toast.POSITION.BOTTOM_RIGHT
  });

export const errorNotify = () =>
  toast.error('Something went wrong !', {
    position: toast.POSITION.BOTTOM_RIGHT
  });
// ####### end of Notification #######
