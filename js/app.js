

let sales = document.getElementById('Sales');
let tableEle = document.createElement('table');
    sales.appendChild(tableEle);

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
    
    
   // tableEle.setAttribute("border", "2");

   headerRow();
   //DataRows();
   //FooterRow();
     
    
    
    
       function DataRows(){


        let tMainData = document.createElement('tbody');
         let tDataRow = document.createElement('tr');
         tableEle.appendChild(tMainData);
         tMainData.appendChild(tDataRow);

         for (let x=0; x < this.AvgCookiesPerHour.length; x++){
            let tData = document.createElement('td');
            tData.textContent[x] = this.AvgCookiesPerHour[x] ;
            tDataRow.appendChild(tData);
                           }

               }

       function FooterRow(){

        let tMainFooter = document.createElement('tfoot')   
        let tFooterRow = document.createElement('tr');
        tableEle.appendChild(tMainFooter);
        tMainFooter.appendChild(tFooterRow);

      
        for (let x=0; x < 14; x++){
            let tFooter = document.createElement('td');
            tFooter.textContent = this.hours ;
            tFooterRow.appendChild(tFooter);
            console.log(tHeaderRow);
               }


       }
    
    
    
    }
    
     
    function headerRow(){

        let tMainHeader = document.createElement('thead');
        let tHeaderRow = document.createElement('tr');
        tableEle.appendChild(tMainHeader);
        tMainHeader.appendChild(tHeaderRow);

        for (let x=0; x < 14; x++){
            let theader = document.createElement('th');
            theader.textContent = this.hours[x] ;
            tHeaderRow.appendChild(theader);
              }

        let cellTotal = document.createElement('td');
        cellTotal.textContent = locationSales.Total;
        tHeaderRow.appendChild(cellTotal);
        console.log(tHeaderRow);
    }

    

// defined the const proporties

//object for each Location 

let Seattle = new locationSales('Seattle Location', 23, 65, 6.3);
let Tokyo = new locationSales('Tokyo Location', 3, 24, 1.2);
let Dubai = new locationSales('Dubai Location', 11, 38, 3.7);
let Paris = new locationSales('Paris Location', 20, 38, 2.3);
let Lima = new locationSales('Lima Location', 2, 16, 4.6);
 
// invoke it 

let arr = [Seattle, Tokyo, Dubai, Paris, Lima];

for(let i = 0; i < arr.length; i++) {
  arr[i].getNoOfCustomer();
  arr[i].render();
  console.log(arr[i]);
}



