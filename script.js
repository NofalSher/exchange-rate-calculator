// First we have to use an API . That we will connect our web with database of exchange rate.

// API are of two types. Rest and GraphQL 

// in js we use function fetch to send http request to send data to any external database and get data
//go to exchange rate api

// Lets make a item.json file
//json is basically file where we can store value inside keys inside curly brackets

/* 
{
{
    "id":1,
    "text":"item1"   //This is a json object . We can also make json array by
}  
*/



/* 

[
    "id":1,
    "text":"item1"   //This is a json object . We can also make json array by
}  
{
    "id":2,
    "text":"item1"   //This is a json object . We can also make json array by
} 
{
    "id":3,
    "text":"item1"   //This is a json object . We can also make json array by
} 
{
    "id":4,
    "text":"item1"   //This is a json object . We can also make json array by
} 
]

// This is atually a json array

 */


function calculation(){
    // This fetch function runs asynchronously. Means this function will run in background means js will send fetch request to this function and will then forget and when response gets back js will again awake and take response. 
    fetch('items.json')
    .then(res=>res.json()) //then function will tell that what will js do when e get back request from fetch function. for ES6 we donot have to make fuinction and if we are making single line code we donot need curly brackets.
    .then(data=>document.body.innerHTML=data[0].text); // Every fetch command actually makes a promise that it will send data. We write then so that what to do if we actually get data bac. This line will give values from json() function of previous line 
    // document.body.innerHTML=data[0].text    THis will actually replace our whole page UI by first data text   
    
    
    // Now in console or output we get status value of 200(this means we are only getting data). If we also send data then in status we will get 201 means we are adding something to server. satatus text (ok) means fetching is successfull. 
    //if status value is in 300,s it means to redirect to different pages. 400,s status value means we have user errors.500,s value of error means server errors.


}
calculation();

