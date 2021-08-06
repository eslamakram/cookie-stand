
let shop = document.getElementById('locationSales');
let locForm = document.getElementById('locForm');
let headerData = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];
let all = [];
let total = [];

// single constructor
function locationSales(locationName, minCust, maxCust, avgCookie) {
    this.locationName = locationName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.hours = ['6:00 AM: ', '7:00 AM: ', '8:00 AM: ', '9:00 AM: ', '10:00 AM: ', '11:00 AM: ', '12:00 PM: ', '1:00 PM: ', '2:00 PM: ', '3:00 PM: ', '4:00 PM: ', '5:00 PM: ', '6:00 PM: ', '7:00 PM: '];
    this.total = 0;
    this.cookies = [];
    all.push(this);

} //end of const


locationSales.prototype.getCustomers = function () {

    this.cookies.push(Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust)));
    this.cookies = Math.floor(this.cookies * this.avgCookie);
    this.total = this.total + this.cookies;
    return this.cookies;
}

locationSales.prototype.render = function () {

    let tableRow = document.createElement('tr');
    shop.appendChild(tableRow);


    let tableHeadRow = document.createElement('th');
    tableHeadRow.textContent = this.locationName;
    tableRow.appendChild(tableHeadRow);

    for (let x = 0; x < this.hours.length; x++) {
        let dataRow = document.createElement('td');
        dataRow.textContent = this.getCustomers();
        tableRow.appendChild(dataRow);
    }

    let totalDailyCell = document.createElement('td');
    totalDailyCell.textContent = this.total;
    tableRow.appendChild(totalDailyCell);

} // end of prototype of render


//object for each Location 

let seattle = new locationSales('Seattle ', 23, 65, 6.3);
let tokyo = new locationSales('Tokyo ', 3, 24, 1.2);
let dubai = new locationSales('Dubai ', 11, 38, 3.7);
let paris = new locationSales('Paris ', 20, 38, 2.3);
let lima = new locationSales('Lima ', 2, 16, 4.6);

// invoke it 
let arr = [seattle, tokyo, dubai, paris, lima];

tableHeader();

for (let i = 0; i < arr.length; i++) {
     arr[i].getCustomers();
    arr[i].render();
}

tableFooter();




function tableHeader() {

    let headerRow = document.createElement('tr');
    shop.appendChild(headerRow);

    headerData.unshift(' ');
    headerData.push('Daily Total');
    for (let i = 0; i < headerData.length; i++) {

        let hData = document.createElement('th');
        hData.textContent = headerData[i];
        headerRow.appendChild(hData);
    }
    headerData.shift();
    headerData.pop();
}


function tableFooter() {

    let footerRow = document.createElement('tr');
    shop.appendChild(footerRow);

    for (let i = 0; i < headerData.length; i++) {
        let hourlyTotal = 0;
               for(let j=0; j < all.length; j++){
             hourlyTotal += all[j].cookies[i];
                  }
        let fData = document.createElement('th');
        fData.textContent = hourlyTotal;
        footerRow.appendChild(fData);
           }
      let totalofTotal = 0;
      for(let x=0; x < all.length; x++){
      totalofTotal += all[x].total[j];   
                
      let tData = document.createElement('th');
    tData.textContent = totalofTotal;
    footerRow.appendChild(tData);
}
    
}



locForm.addEventListener('submit', submitHandler);
function submitHandler(event) {
    // Stop refreshing
    event.preventDefault(); 
    let locName = event.target.locName.value.split(',');
    let minperCust = event.target.minperCust.value.split(',');
    let maxperCust = event.target.maxperCust.value.split(',');
    let avgCookieperSale2 = event.target.avgCookieperSale2.value.split(',');
   
    let newLoc = new locationSales(locName, minperCust, maxperCust, avgCookieperSale2);
    newLoc.getCustomers();
    newLoc.render();
       console.log(new locationSales)
    
   }



