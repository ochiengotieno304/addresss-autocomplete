const addressBox = document.querySelector('#address')
const addressNumber = 5
let address = ''
const options = {
  method: 'GET',
  url: 'https://spott.p.rapidapi.com/places/autocomplete',
  params: { q: 'Sea', country: 'US,CA', skip: '0', limit: '10' },
  headers: {
    'X-RapidAPI-Host': 'spott.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.RAPID_API_KEY
  }
};

addressBox.addEventListener('keypress', fetchAddress => {
  console.log('hello')

  autoCompleteListener(addressBox)

})

function autoCompleteListener (addressInput, event) {
  if (addressInput) {
    if (addressInput.value.length > 0) {
      if (address != addressInput.value) {

        axios.request(options).then(function (response) {
          addSuggestions(response.data)
          console.log(response.data)
        }).catch(function (error) {
          console.error(error)
        })
      }
    }
  }


  address = addressInput.value
}


const addSuggestions = (response) => {
  var suggestions = document.querySelector('#suggestions')
  suggestions.innerHTML = JSON.stringify(response, null, ' ')
}

