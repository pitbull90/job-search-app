// Input section variables
let company = document.getElementById('company');
let phone = document.getElementById('phone');
let address = document.getElementById('address');
let date = document.getElementById('date');
let pay = document.getElementById('pay');
let button = document.getElementById('submit');
let colResults = document.getElementById('col-results');

// All information Array
let companyInfo = [];

    var companyObj = new Object();
    companyObj.companyArr = {'company': [{'companyName': company.value}, {'phone': phone.value}, {'address': address.value}, {'date': date.value}, {'pay': pay.value}]}

companyInfo.push(companyObj); 

// Submit button click EventListener
button.addEventListener('click', (e) => {
    e.preventDefault();

    companyMaker();
    company.value = '';
    pay.value = '';
})


// CompanyMaker function that runs to creates the company section results
let companyMaker = () => {

    

    // Creates company section that shows all the results.
    let companySection = document.createElement('div');

    // Create company name and pay results elements
    let companyName = document.createElement('h2');
    let companyPay = document.createElement('span');
    // Gives pay span the class of pay
    companyPay.classList.add('pay');
    // Add content to name and pay
    companyName.textContent = company.value;
    companyPay.textContent = pay.value;

    // Create the two rows that have the remaining info
    if ( phone.value > 0 ) {
        var fourColumns = document.createElement('div');
        fourColumns.setAttribute('class', 'col-md-4');

        // Creates the phone results
        let resultSec = document.createElement('div');
        resultSec.setAttribute('class', 'result-sec');
        fourColumns.appendChild(resultSec);
        let phoneLabel = document.createElement('p');
        resultSec.appendChild(phoneLabel);
        phoneLabel.textContent = 'Phone:';

        let phoneSpan = document.createElement('span');
        phoneSpan.setAttribute('id', 'phone');
        resultSec.appendChild(phoneSpan);
        phoneSpan.textContent = phone.value;

        
    };

    let infoRow1 = document.createElement('div');
    infoRow1.appendChild(fourColumns);
    infoRow1.classList.add('row');
    
    
    // Set Attribute to companySection and append the company name and pay
    companySection.setAttribute('id', 'company-sec');
    colResults.appendChild(companySection);
    companySection.append(companyName, companyPay, infoRow1);
}