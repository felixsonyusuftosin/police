
const E3XX = status => status > 299 && status < 400
const E4XX = status => status > 399 && status < 500

export const apiError = ({ status, url }) => {
  switch (status) {
    case 301:
      console.error(`${url} returned 301 on ${new Date().toLocaleTimeString()}`)
      return 'The requested resources have moved permanently.'
    case 400:
      console.error(`${url} returned 400 on ${new Date().toLocaleTimeString()}`)
      return 'Please provide all parameters correctly and try again.'
    case 403:
      console.error(`${url} returned 403 on ${new Date().toLocaleTimeString()}`)
      return 'You do not have permission to perform this operation.'
    case 401:
      console.error(`${url} returned 401 on ${new Date().toLocaleTimeString()}`)
      return 'This action requires you to be logged in. Please refresh your browser and try again.'
    case 404:
      console.error(`${url} returned 404 on ${new Date().toLocaleTimeString()}`)
      return 'No content was returned.'
    case 500:
      console.error(`${url} returned 500 on ${new Date().toLocaleTimeString()}`)
      return 'Sorry, something went wrong. Please contact the administrator.'
    default:
      if (E3XX(status)) {
        console.error(`${url} returned ${status} on ${new Date().toLocaleTimeString()}`)
        return 'Sorry, this resource has moved or is being redirected'
      } else if (E4XX(status)) {
        console.error(`${url} returned ${status} on ${new Date().toLocaleTimeString()}`)
        return 'Sorry, we could not understand the request you just made'
      } else {
        console.error(`${url} returned ${status} on ${new Date().toLocaleTimeString()}`)
        return 'Sorry, an error occured while executing your request'
      }
  }
}
