const getData = async () =>{
  try {
    const response = await fetch('https://api-to-call.com/endpoint');
    if (response.ok) {
      const jsonResponse = await response.json();   return jsonResponse;
    }
  throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
};
I learned to reconstruct the boilerplate code needed to create a GET request using async and await
