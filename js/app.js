
let shop = document.getElementById('locationSales');
let headerData = ['6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'];
let all = [];
// single constructor
   function locationSales( locationName, MinPerCust, MaxPerCust, AvgCookiePerSale ){
this.locationName = locationName;
this.MinPerCust = MinPerCust;
this.MaxPerCust = MaxPerCust;
this.AvgCookiePerSale = AvgCookiePerSale;
//this.NoOfCustomersPerHour = NoOfCustomersPerHour;
this.hours = ['6:00 AM: ','7:00 AM: ','8:00 AM: ','9:00 AM: ','10:00 AM: ','11:00 AM: ','12:00 PM: ','1:00 PM: ','2:00 PM: ','3:00 PM: ','4:00 PM: ','5:00 PM: ','6:00 PM: ','7:00 PM: '];
//this.AvgCookiesPerHour = AvgCookiesPerHour;
this.Total= 0;
this.NoOfCustomersPerHour = new Array(13);
this.AvgCookiesPerHour = new Array(13);
all.push(this);

} //end of const


locationSales.prototype.getNoOfCustomer = function(){
    let FinalResult = 0;
       for (let i=0 ; i < this.hours.length ; i++){
    this.NoOfCustomersPerHour [i] = Math.floor(Math.random() * (this.MaxPerCust - this.MinPerCust + 1) + this.MinPerCust);
    this.AvgCookiesPerHour [i] = Math.floor( this.NoOfCustomersPerHour[i] * this.AvgCookiePerSale);
    FinalResult =  FinalResult + this.AvgCookiesPerHour [i];
            }
            this.Total = FinalResult; 

} // end of prototype of getNoofCustomer()


locationSales.prototype.render = function(){

    let tableRow = document.createElement('tr');
    shop.appendChild(tableRow);
    
    
    let tableHeadRow = document.createElement('th');
    tableHeadRow.textContent= this.locationName;
    tableRow.appendChild(tableHeadRow);

        for (let x=0; x < 14; x++){
        let dataRow = document.createElement('td');
        dataRow.textContent = this.AvgCookiesPerHour[x] ;
        tableRow.appendChild(dataRow);
           }
    
    let totalDailyCell = document.createElement('td');
    totalDailyCell.textContent =  this.Total;
    tableRow.appendChild(totalDailyCell);

} // end of prototype of render


// defined the const proporties

//object for each Location 

let Seattle = new locationSales('Seattle ', 23, 65, 6.3);
let Tokyo = new locationSales('Tokyo ', 3, 24, 1.2);
let Dubai = new locationSales('Dubai ', 11, 38, 3.7);
let Paris = new locationSales('Paris ', 20, 38, 2.3);
let Lima = new locationSales('Lima ', 2, 16, 4.6);
 
// invoke it 

let arr = [Seattle, Tokyo, Dubai, Paris, Lima];

tableHeader();

for(let i = 0; i < arr.length; i++) {
  arr[i].getNoOfCustomer();
  arr[i].render();
    }

console.log(all[0].AvgCookiesPerHour);

//tableFooter();


function tableHeader(){

    let headerRow = document.createElement('tr');
    shop.appendChild(headerRow);

headerData.unshift(' ');
headerData.push('Daily Total');
    for  (let i=0; i < headerData.length; i++){

        let hData = document.createElement('td');
            hData.textContent = headerData[i];
            headerRow.appendChild(hData);
                }
headerData.shift();
headerData.pop();
}

function tableFooter(){

    let HourlyTotal =0;
    let TotalofTotal =0;
    let footerRow = document.createElement('tr');
    shop.appendChild(footerRow);

    for(let i=0; i < headerData.length;i++){

            for(let j=0; j < all.length; j++){
                let fData = document.createElement('td');
                array.push
            HourlyTotal[i] += all[2].AvgCookiesPerHour;
            fData.textContent = HourlyTotal[i];
            footerRow.appendChild(fData);
          
       }

    
       }

    }

