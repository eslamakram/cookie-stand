




//object for each Location

const Seattle ={
    locationName : 'Seattle Location',
    MinPerCust : 23,
    MaxPerCust : 65,
    AvgCookiePerSale : 6.3
};

const Tokyo ={
    locationName : 'Tokyo Location',
    MinPerCust : 3,
    MaxPerCust : 24,
    AvgCookiePerSale : 1.2
};

const Dubai ={
    locationName : 'Dubai Location',
    MinPerCust : 11,
    MaxPerCust : 38,
    AvgCookiePerSale : 3.7
};

const Paris ={
    locationName : 'Paris Location',
    MinPerCust : 20,
    MaxPerCust : 38,
    AvgCookiePerSale : 2.3 ,
    NoOfCustomersPerHour : new Array(13) ,
    hours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    AvgCookiesPerHour : new Array(13),
    Total : 0,
   getNoOfCustomer: function() {
       let FinalResult = 0;
        for (let i=0 ; i < this.hours.length ; i++){
        this.NoOfCustomersPerHour [i] = Math.floor(Math.random() * (this.MaxPerCust - this.MinPerCust + 1) + this.MinPerCust);
        this.AvgCookiesPerHour [i] = this.NoOfCustomersPerHour[i] * this.AvgCookiePerSale;
        FinalResult =  FinalResult + this.AvgCookiesPerHour [i];
                }
                this.Total = FinalResult;    
    },          
   render: function () {

    let locationSales = document.getElementById('locationSales');

    let articleElement = document.createElement('article');
    locationSales.appendChild(articleElement);
    
    
    let h2Element = document.createElement('h2');
    h2Element.textContent= this.locationName;
    articleElement.appendChild(h2Element);

    let ulElement = document.createElement('ul');
    for (let x=0; x < 14; x++){
        let liElement = document.createElement('li');
        liElement.textContent= this.hours[x] + this.AvgCookiesPerHour[x] + 'Cookies';
        ulElement.appendChild(liElement);
        console.log(liElement);
    }
}
};

const Lima = {
    locationName : 'Lima Location',
    MinPerCust : 2,
    MaxPerCust : 16,
    AvgCookiePerSale : 4.6,
    NoOfCustomersPerHour : new Array(13) ,
    hours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    AvgCookiesPerHour : new Array(13),
    Total : 0,
   getNoOfCustomer: function() {
       let FinalResult = 0;
        for (let i=0 ; i < this.hours.length ; i++){
        this.NoOfCustomersPerHour [i] = Math.floor(Math.random() * (this.MaxPerCust - this.MinPerCust + 1) + this.MinPerCust);
        this.AvgCookiesPerHour [i] = this.NoOfCustomersPerHour[i] * this.AvgCookiePerSale;
        FinalResult =  FinalResult + this.AvgCookiesPerHour [i];
                }
                this.Total = FinalResult;    
    },          
   render: function () {

    let locationSales = document.getElementById('locationSales');

    let articleElement = document.createElement('article');
    locationSales.appendChild(articleElement);
    
    
    let h2Element = document.createElement('h2');
    h2Element.textContent= this.locationName;
    articleElement.appendChild(h2Element);

    let ulElement = document.createElement('ul');
    for (let x=0; x < 14; x++){
        let liElement = document.createElement('li');
        liElement.textContent= this.hours[x] + this.AvgCookiesPerHour[x] + 'Cookies';
        ulElement.appendChild(liElement);
        console.log(liElement);
    }
    /*
    let li2Element = document.createElement('li');
    li2Element.textContent = this.FinalResult;
    ulElement.appendChild(li2Element);
/*
console.log(h2Element) ;
console.log(li2Element);
console.log(liElement);*/

}

};
console.log(Lima);
Lima.getNoOfCustomer();
Lima.render();