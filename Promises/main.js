let promise = new Promise((resolve, reject) => {
  //resolve(); resolved state
  //reject(); rejected state
  setTimeout(() => {
    resolve();
  }, 3000)

  // var request = new XHTMLRequest()
  // request.onload = () => { resolve() }
});

console.log(promise);

promise
  .then(() => console.log('Finished!'))
  .then(() => console.log('Now done :D'))
  .catch(() => console.log('Error caught'))

//const url = 'https://apolluinc-176900.appspot.com/'

//fetching data from url requests
//fetch(url)
  //.then(response => response.json())
  //.then(data => console.log(data))
  //network request must completely fail(no status codes)
  //.catch(error => console.log('BAD', error))
