function renderTime(par) {
  let date = new Date(par * 1000);
  let dateHours = date.getHours();
  let dateMinutes = date.getMinutes();
  if (dateHours < 10) {
    dateHours = `0${date.getHours()}`;
  }
  if (dateMinutes < 10) {
    dateMinutes = `0${date.getMinutes()}`;
  }
  let timeStr = `${dateHours}:${dateMinutes}`;
  return timeStr;
}

function convertDate(dt_txt) {
  const day = dt_txt.slice(8, 10);
  let month = dt_txt.slice(5, 7);

  const months = {
    January: '01',
    February: '02',
    March: '03',
    April: '04',
    May: '05',
    June: '06',
    July: '07',
    August: '08',
    September: '09',
    October: '10',
    November: '11',
    December: '12',
  };

  for (const key in months) {
    if (months[key] === month) month = key;
  }

  return `${day} ${month}`;
}

function toCelcius(temperature) {
  return Math.round(temperature - 273);
}
export { toCelcius, renderTime, convertDate };
