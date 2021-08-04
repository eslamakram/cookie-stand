
let shop = document.getElementById('locationSales');
let headerData = ['6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM'];
let all = [];
let locForm = document.getElementById('locForm');
//console.log(locForm);

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
//CookiesArray = [];
all.push(this);

} //end of const


locationSales.prototype.getNoOfCustomer = function(){
    let FinalResult = 0;
       for (let i=0 ; i < this.hours.length ; i++){
    this.NoOfCustomersPerHour [i] = Math.floor(Math.random() * (this.MaxPerCust - this.MinPerCust + 1) + this.MinPerCust);
    this.AvgCookiesPerHour [i] = Math.floor( this.NoOfCustomersPerHour[i] * this.AvgCookiePerSale);
    //this.CookiesArray.push(this.AvgCookiesPerHour [i]);
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

let HourlyTotal =0;
    let TotalofTotal =0;
function TotalofTotalFun(){

    
    for(let i=0; i < headerData.length;i++){

        for(let j=0; j < all.length; j++){
            HourlyTotal += all[j].AvgCookiesPerHour[i];
                  
                 }
                  }
       for(let x=0; x < all.length; x++){
        TotalofTotal += all[x].Total;   
                   }


}

function tableFooter(){

    

    let footerRow = document.createElement('tr');
    

    let HData = document.createElement('th');
            HData.textContent = 'Total';
            footerRow.appendChild(HData);

    for(let i=0; i < headerData.length;i++){


        TotalofTotalFun();

           /* for(let j=0; j < all.length; j++){
                HourlyTotal += all[j].AvgCookiesPerHour[i];
                      
                     }
                    // console.log(HourlyTotal);*/
            let fData = document.createElement('th');
            fData.textContent = HourlyTotal;
            footerRow.appendChild(fData);      
           }
          /* for(let x=0; x < all.length; x++){
            TotalofTotal += all[x].Total;   
                       }*/
            let TData = document.createElement('th');
            TData.textContent = TotalofTotal;
            footerRow.appendChild(TData);

            shop.appendChild(footerRow);
    }

    locForm.addEventListener('submit', submitHandler);
    function submitHandler(event) {
      event.preventDefault(); // Stop refreshing
      let locName = event.target.locName.value;
      let minperCust = Number(event.target.minperCust.value);
      let maxperCust = Number(event.target.maxperCust.value);
      let avgCookieperSale2 = Number(event.target.avgCookieperSale2.value);
      let newLoc = new locationSales(locName, minperCust, maxperCust, avgCookieperSale2);
  newLoc.getNoOfCustomer();
  newLoc.render();
  //all.push(newLoc);
  console.log(all)
  //locForm.reset();

  let newRow = document.createElement('tr') ;
  shop.appendChild(newRow) ; 
      
  
  let newh = document.createElement('th') ; 
  newh.textContent = newLoc.locName ; 
  newRow.appendChild(newh);

  for (let j = 0; j < 14; j++) {
      let newData = document.createElement('td') ;
      newData.textContent = newLoc.AvgCookiesPerHour[j];
      newRow.appendChild(newData);
  }
  
  let lastCell = document.createElement('td') ;
  lastCell.textContent = newLoc.Total;
  newRow.appendChild(lastCell)

}



tableFooter();