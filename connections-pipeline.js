// This script copies your LinkedIn connections onto your clipboard 
// Use this script to add more rigor to your LinkedIn connections and tie activity to your pipeline
// https://www.linkedin.com/mynetwork/invite-connect/connections/


// Key JavaScript elements: 

// connectionName <span>
// document.getElementsByClassName("mn-connection-card__name t-16 t-black t-bold")[0].innerText

// connectionTitle <span>
// document.getElementsByClassName("mn-connection-card__occupation t-14 t-black--light t-normal")[0].innerText

// linkedInURL <a>
// document.getElementsByClassName("ember-view mn-connection-card__link")[0].href


// Define list of new connections (first page has 40)
const newConnections = document.getElementsByClassName("mn-connection-card__name t-16 t-black t-bold");

// Define variables
let connectionName = document.getElementsByClassName("mn-connection-card__name t-16 t-black t-bold");
let connectionTitle = document.getElementsByClassName("mn-connection-card__occupation t-14 t-black--light t-normal");
let linkedInURL = document.getElementsByClassName("ember-view mn-connection-card__link");

// Loop
let spreadsheet = [];
for (var i = 0; i < newConnections.length - 1; i++) { 
// length -1 because LI throws an error if you hit 40
    spreadsheet.push([ connectionName[i].innerText, connectionTitle[i].innerText, linkedInURL[i].href ] ) ;
}; 

copy(spreadsheet.join('\n'));
