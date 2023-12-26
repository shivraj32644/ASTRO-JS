export const notify = (
    toast: any,
    message: string,
    type: 'error' | 'success'
  ) => {
    toast[type](message, {
      position: toast.POSITION.TOP_CENTER,
    });
  };