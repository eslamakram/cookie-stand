
let shopTable = document.getElementById('infoSales');
let getNewOrder = document.getElementById('locForm');
getNewOrder.addEventListener('submit', submitHandler);
let hours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];
let shops = [];


// CONSTRACTOR 
function cookiesShop(shopName, minCust, maxCust, avgCust) {
    this.shopName = shopName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCust = avgCust;
    this.cookie = 0;
    this.cookies = [];
    this.dailyTotal = 0;
    shops.push(this);


}


cookiesShop.prototype.getRndCustomers = function () {


    let rndCust = Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
    this.cookie = Math.floor(rndCust * this.avgCust);
    this.cookies.push(this.cookie);
    return this.cookie;

}


cookiesShop.prototype.render = function () {

    let tableRow = document.createElement('tr');
    shopTable.appendChild(tableRow);

    let headRow = document.createElement('th');
    tableRow.appendChild(headRow);
    headRow.textContent = this.shopName;

    for (let i = 0; i < hours.length; i++) {

        let rowData = document.createElement('td');
        tableRow.appendChild(rowData);
        let x = this.getRndCustomers();

        rowData.textContent = x;
        this.dailyTotal = this.dailyTotal + x;

    }
    let tailRow = document.createElement('td');
    tableRow.appendChild(tailRow);
    tailRow.textContent = this.dailyTotal;

}


function headerTable() {

    let headerRow = document.createElement('tr');
    shopTable.appendChild(headerRow);

    hours.unshift(' ');
    hours.push('Daily Total');

    for (let i = 0; i < hours.length; i++) {

        let headerData = document.createElement('th');
        headerRow.appendChild(headerData);
        headerData.textContent = hours[i];
    }
    hours.shift();
    hours.pop();

}


function footerTable() {

    let footerRow = document.createElement('tr');
    shopTable.appendChild(footerRow);

    footerHead = document.createElement('th');
    footerRow.appendChild(footerHead);
    footerHead.textContent = 'Total';

  

    for (let i = 0; i < hours.length; i++) {
        let hourlyTotal = 0;

        for (let j = 0; j < shops.length; j++) {
            hourlyTotal += shops[j].cookies[i];
        }
        let footerData = document.createElement('th');
        footerRow.appendChild(footerData);
        footerData.textContent = hourlyTotal;
    }

     hourlyTotal =0;

    let totalOfTotal = 0;
    for (let k = 0; k < shops.length; k++) {
        totalOfTotal += shops[k].dailyTotal;
    }


    footerTail = document.createElement('th');
    footerRow.appendChild(footerTail);
    footerTail.textContent = totalOfTotal;

}


let seattle = new cookiesShop('Seattle', 23, 65, 6.3);
let tokyo = new cookiesShop('Tokyo ', 3, 24, 1.2);
let dubai = new cookiesShop('Dubai ', 11, 38, 3.7);
let paris = new cookiesShop('Paris ', 20, 38, 2.3);
let lima = new cookiesShop('Lima ', 2, 16, 4.6);




headerTable();

for (let i = 0; i < shops.length; i++) {
    shops[i].render();
}

console.log(shops)

footerTable();


function submitHandler(event) {

    event.preventDefault();

    let shopName = event.target.locName.value;
    let minCust = parseInt(event.target.minCust.value);
    let maxCust = parseInt(event.target.maxCust.value);
    let avgCust = parseInt(event.target.avgCust.value);

    let newShop = new cookiesShop(shopName, minCust, maxCust, avgCust);

    shopTable.deleteRow(-1);
    newShop.render();
        footerTable();

}


