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

    let limaSale = document.getElementById('locationSales');

    let articleElement = document.createElement('article');
    limaSale.appendChild(articleElement);
    
    
    let h2Element = document.createElement('h2');
    h2Element.textContent= this.locationName;
    articleElement.appendChild(h2Element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let x=0; x < 14; x++){
        let liElement = document.createElement('li');
        liElement.textContent = this.hours[x] + this.AvgCookiesPerHour[x]  + ' Cookies';
        ulElement.appendChild(liElement);
       // console.log(liElement);
           }
    
    let pElement = document.createElement('p');
    pElement.textContent = 'The Total :' + this.Total;
    articleElement.appendChild(pElement);

} // end of prototype of render


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



