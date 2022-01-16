export const nextSlidesIndex = (n, indexObj, arrSize) => {
  let end_index = indexObj.start_index + indexObj.slide_size;
  if (end_index >= arrSize) {
    return 0;
  } else {
    return indexObj.start_index + n;
  }
};

export const prevSlidesIndex = (n, indexObj, arrSize) => {
  let start_index = indexObj.start_index - n;
  if (start_index <= 0) {
    return 0;
  } else {
    return indexObj.start_index - n;
  }
};
