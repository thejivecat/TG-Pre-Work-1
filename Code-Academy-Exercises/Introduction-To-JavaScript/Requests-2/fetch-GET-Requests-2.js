fetch('https://api-to-call.com/endpoint').then(response => {
  if(response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  return jsonResponse;
});
 I learned to create the boilerplate code used to create a GET request using the fetch() function
