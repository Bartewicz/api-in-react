export const fetchLogger = (response) => {
  console.log(`fetchLogger ${response.url}`, response.status)
  const json = response.json()
  
  if (response.status >= 500) {
    console.log('Coś poszło nie tak. Zgłoś się do osoby odpowiedzialnej za serwer')
  } else if (response.status >= 400 && response.status < 500) {
    console.log('Coś schrzaniłeś. Spróbuj jeszcze raz.')
  } else {
  return json.then((jsonData) => {
    console.log(`fetchLogger ${response.url}`, jsonData)
    return jsonData
  })
  }
}