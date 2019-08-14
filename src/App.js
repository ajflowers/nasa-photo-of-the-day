import React from "react";
import "./App.css";

import Header from "./Header"

function App() {
  //check update time, look for UTC offset
  const today = new Date();
  console.log(today);
  const currYear = today.getFullYear();
  console.log(currYear);
  const currMonth = today.getMonth();
  console.log(currMonth);
  const currDate = today.getDate();
  console.log (currDate);

  const isoDate = () => {
    let adjustMonth = currMonth + 1;
    let txtDate = currYear + "-";
    if (adjustMonth < 10) {
      txtDate += "0";
    }
    txtDate = txtDate + (adjustMonth) + "-" + currDate;
    return txtDate;
  }

  console.log(isoDate());

  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  return (
    <div className="App">
      <Header thisMonth={monthsArray[currMonth]} thisDate={currDate} thisYear={currYear} thisISO={isoDate()}/>
    </div>
  );
}

export default App;
