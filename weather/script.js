async function fetchData() {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shimla';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e37e88ab42msh649a2953540a46bp1c4d0bjsne60be190585c',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call the async function
  fetchData();
  