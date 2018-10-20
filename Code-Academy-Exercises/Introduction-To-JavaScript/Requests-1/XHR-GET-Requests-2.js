const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
};
xhr.open('GET', url);
xhr.send();
I learned to write a boilerplate code for an AJAX GET request using an XMLHttpRequest object
