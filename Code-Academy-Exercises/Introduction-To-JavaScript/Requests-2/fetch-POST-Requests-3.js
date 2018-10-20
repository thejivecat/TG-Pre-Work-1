Introduction To JavaScript



1
// Information to reach API
2
const apiKey = '<Your API Key>';
3
const url = 'https://api.rebrandly.com/v1/links';
4
​
5
// Some page elements
6
const inputField = document.querySelector('#input');
7
const shortenButton = document.querySelector('#shorten');
8
const responseField = document.querySelector('#responseField');
9
​
10
// AJAX functions
11
const shortenUrl = () => {
12
  const urlToShorten = inputField.value;
13
  const data = JSON.stringify({destination: urlToShorten})
14

15
  fetch(url, {
16
    method: 'POST',
17
    headers: {
18
      'Content-type': 'application/json',
19
      'apikey': apiKey
20
    },
21
    body: data
22
  })
23
}
24
​
25
// Clear page and call AJAX functions
26
const displayShortUrl = (event) => {
27
  event.preventDefault();
28
  while(responseField.firstChild){
29
    responseField.removeChild(responseField.firstChild)
30
  }
31
  shortenUrl();
32
}
33
​
34
shortenButton.addEventListener('click', displayShortUrl);
35
​

I learned to shorten a URL using the Rebrandly URL shortener API with the boilerplate code for POST requests
