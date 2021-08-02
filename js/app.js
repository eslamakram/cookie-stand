




//object for each Location

const Seattle ={
    locationName : 'Seattle Location',
    MinPerCust : 23,
    MaxPerCust : 65,
    AvgCookiePerSale : 6.3,
    NoOfCustomersPerHour : new Array(13) ,
    hours : ['6 AM: ','7 AM: ','8 AM: ','9 AM: ','10 AM: ','11 AM: ','12 PM: ','1 PM: ','2 PM: ','3 PM: ','4 PM: ','5 PM: ','6 PM: ','7 PM: '],
    AvgCookiesPerHour : new Array(13),
    Total : 0,
   getNoOfCustomer: function() {
       let FinalResult = 0;
        for (let i=0 ; i < this.hours.length ; i++){
        this.NoOfCustomersPerHour [i] = Math.floor(Math.random() * (this.MaxPerCust - this.MinPerCust + 1) + this.MinPerCust);
        this.AvgCookiesPerHour [i] = Math.floor(this.NoOfCustomersPerHour[i] * this.AvgCookiePerSale);
        FinalResult =  FinalResult + this.AvgCookiesPerHour [i];
                }
                this.Total = FinalResult;    
    },          
   render: function () {

    let seattleSale = document.getElementById('locationSales');

    let articleElement = document.createElement('article');
    seattleSale.appendChild(articleElement);
    
    
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
        }
};

const Tokyo ={
    locationName : 'Tokyo Location',
    MinPerCust : 3,
    MaxPerCust : 24,
    AvgCookiePerSale : 1.2,
    NoOfCustomersPerHour : new Array(13) ,
    hours : ['6 AM: ','7 AM: ','8 AM: ','9 AM: ','10 AM: ','11 AM: ','12 PM: ','1 PM: ','2 PM: ','3 PM: ','4 PM: ','5 PM: ','6 PM: ','7 PM: '],
    AvgCookiesPerHour : new Array(13),
    Total : 0,
   getNoOfCustomer: function() {
       let FinalResult = 0;
        for (let i=0 ; i < this.hours.length ; i++){
        this.NoOfCustomersPerHour [i] = Math.floor(Math.random() * (this.MaxPerCust - this.MinPerCust + 1) + this.MinPerCust);
        this.AvgCookiesPerHour [i] = Math.floor(this.NoOfCustomersPerHour[i] * this.AvgCookiePerSale);
        FinalResult =  FinalResult + this.AvgCookiesPerHour [i];
                }
                this.Total = FinalResult;    
    },          
   render: function () {

    let tokyoSale = document.getElementById('locationSales');

    let articleElement = document.createElement('article');
    tokyoSale.appendChild(articleElement);
    
    
    let h2Element = document.createElement('h2');
    h2Element.textContent= this.locationName;
    articleElement.appendChild(h2Element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let x=0; x < 14; x++){
        let liElement = document.createElement('li');
        liElement.textContent = this.hours[x] + this.AvgCookiesPerHour[x]  + ' Cookies';
        ulElement.appendChild(liElement);
        console.log(liElement);
           }
    
    let pElement = document.createElement('p');
    pElement.textContent = 'The Total :' + this.Total;
    articleElement.appendChild(pElement);
        }
    
};

const Dubai ={
    locationName : 'Dubai Location',
    MinPerCust : 11,
    MaxPerCust : 38,
    AvgCookiePerSale : 3.7 ,
    NoOfCustomersPerHour : new Array(13) ,
    hours : ['6 AM: ','7 AM: ','8 AM: ','9 AM: ','10 AM: ','11 AM: ','12 PM: ','1 PM: ','2 PM: ','3 PM: ','4 PM: ','5 PM: ','6 PM: ','7 PM: '],
    AvgCookiesPerHour : new Array(13),
    Total : 0,
   getNoOfCustomer: function() {
       let FinalResult = 0;
        for (let i=0 ; i < this.hours.length ; i++){
        this.NoOfCustomersPerHour [i] = Math.floor(Math.random() * (this.MaxPerCust - this.MinPerCust + 1) + this.MinPerCust);
        this.AvgCookiesPerHour [i] = Math.floor(this.NoOfCustomersPerHour[i] * this.AvgCookiePerSale);
        FinalResult =  FinalResult + this.AvgCookiesPerHour [i];
                }
                this.Total = FinalResult;    
    },          
   render: function () {

    let dubaiSale = document.getElementById('locationSales');

    let articleElement = document.createElement('article');
    dubaiSale.appendChild(articleElement);
    
    
    let h2Element = document.createElement('h2');
    h2Element.textContent= this.locationName;
    articleElement.appendChild(h2Element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let x=0; x < 14; x++){
        let liElement = document.createElement('li');
        liElement.textContent= this.hours[x] + this.AvgCookiesPerHour[x] + ' Cookies';
        ulElement.appendChild(liElement);
            }
    let pElement = document.createElement('p');
    pElement.textContent = 'The Total :' + this.Total;
    articleElement.appendChild(pElement);
}
};

const Paris ={
    locationName : 'Paris Location',
    MinPerCust : 20,
    MaxPerCust : 38,
    AvgCookiePerSale : 2.3 ,
    NoOfCustomersPerHour : new Array(13) ,
    hours : ['6 AM: ','7 AM: ','8 AM: ','9 AM: ','10 AM: ','11 AM: ','12 PM: ','1 PM: ','2 PM: ','3 PM: ','4 PM: ','5 PM: ','6 PM: ','7 PM: '],
    AvgCookiesPerHour : new Array(13),
    Total : 0,
   getNoOfCustomer: function() {
       let FinalResult = 0;
        for (let i=0 ; i < this.hours.length ; i++){
        this.NoOfCustomersPerHour [i] = Math.floor(Math.random() * (this.MaxPerCust - this.MinPerCust + 1) + this.MinPerCust);
        this.AvgCookiesPerHour [i] = Math.floor(this.NoOfCustomersPerHour[i] * this.AvgCookiePerSale);
        FinalResult =  FinalResult + this.AvgCookiesPerHour [i];
                }
                this.Total = FinalResult;    
    },          
   render: function () {

    let parisSale = document.getElementById('locationSales');

    let articleElement = document.createElement('article');
    parisSale.appendChild(articleElement);
    
    
    let h2Element = document.createElement('h2');
    h2Element.textContent= this.locationName;
    articleElement.appendChild(h2Element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let x=0; x < 14; x++){
        let liElement = document.createElement('li');
        liElement.textContent= this.hours[x] + this.AvgCookiesPerHour[x] + ' Cookies';
        ulElement.appendChild(liElement);
            }
    let pElement = document.createElement('p');
    pElement.textContent = 'The Total :' + this.Total;
    articleElement.appendChild(pElement);
}
};

const Lima = {
    locationName : 'Lima Location',
    MinPerCust : 2,
    MaxPerCust : 16,
    AvgCookiePerSale : 4.6,
    NoOfCustomersPerHour : new Array(13) ,
    hours : ['6 AM: ','7 AM: ','8 AM: ','9 AM: ','10 AM: ','11 AM: ','12 PM: ','1 PM: ','2 PM: ','3 PM: ','4 PM: ','5 PM: ','6 PM: ','7 PM: '],
    AvgCookiesPerHour : new Array(13),
    Total : 0,
   getNoOfCustomer: function() {
       let FinalResult = 0;
        for (let i=0 ; i < this.hours.length ; i++){
        this.NoOfCustomersPerHour [i] = Math.floor(Math.random() * (this.MaxPerCust - this.MinPerCust + 1) + this.MinPerCust);
        this.AvgCookiesPerHour [i] = Math.floor(this.NoOfCustomersPerHour[i] * this.AvgCookiePerSale);
        FinalResult =  FinalResult + this.AvgCookiesPerHour [i];
                }
                this.Total = FinalResult;    
    },          
   render: function () {

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

//console.log(h2Element) ;
//console.log(pElement);
//console.log(liElement);

}

};

// Seattle loc
Seattle.getNoOfCustomer();
Seattle.render();



// TOKYO LOC
Tokyo.getNoOfCustomer();
Tokyo.render();


// DUBAI LOC
//console.log(Dubai);
Dubai.getNoOfCustomer();
Dubai.render();

// PARIS LOC
console.log(Paris);
Paris.getNoOfCustomer();
Paris.render();

// LIMA LOC
console.log(Lima);
Lima.getNoOfCustomer();
Lima.render(); 