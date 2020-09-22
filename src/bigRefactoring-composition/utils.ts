export const dateStrToDate = (dateStr: string): Date => {
  //28/10/2018
  //const dateParts = dateStr.split('/'); //['28', '10', '2018']
  //const dateParts = dateStr.split('/').map((val) => parseInt(val)); //[28, 10, 2018]
  const dateParts = dateStr
    .split('/')
    .map((val: string): number => parseInt(val)); //[28, 10, 2018]

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
