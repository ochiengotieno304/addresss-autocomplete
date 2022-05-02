const address = document.querySelector('#address')
const dropDown = document.querySelector('#autocomplete')
const addressNumber = 10



address.addEventListener('keypress', fetchAddress => {
  console.log('hello')

  const options = {
    method: 'GET',
    url: 'https://spott.p.rapidapi.com/places/autocomplete',
    params: { q: 'Sea', country: 'US,CA', skip: '0', limit: '10' },
    headers: {
      'X-RapidAPI-Host': 'spott.p.rapidapi.com',
      'X-RapidAPI-Key': 'c4xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxdc'
    }
  };

  axios.request(options).then(function (response) {
    createDropdown(response.data)
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
})

const createDropdown = (address) => {
  if (address) {
    for (let i = 0; i < addressNumber; i++) {
      const optionElement = document.createElement('option')
      dropDown.appendChild(optionElement)
      optionElement.value = address
    }
  }
}

// const fetchAddress = () => {
//   const options = {
//     method: 'GET',
//     url: 'https://spott.p.rapidapi.com/places/autocomplete',
//     params: { q: 'Sea', country: 'US,CA', skip: '0', limit: '10' },
//     headers: {
//       'X-RapidAPI-Host': 'spott.p.rapidapi.com',
//       'X-RapidAPI-Key': 'c40d09ed9fmsh0ec3a6ad22e5059p138b9djsn07ebfcac6cdc'
//     }
//   };

//   axios.request(options).then(function (response) {
//     createDropdown(response.data)
//     console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });
// }

