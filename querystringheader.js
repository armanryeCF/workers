addEventListener('fetch', event => {
  event.respondWith(handle(event.request))
  event.passThroughOnException()
})
 
 
/**
 * Fetch and modify request headers
 * @param {Request} request
 */
async function handle(request) {
  let url = new URL(request.url)
  let newRequest = new Request(request)

  newRequest.headers.set('user-agent', 'Worker')
  newRequest.headers.set('QueryString', url.search)

  const response = await fetch(newRequest)
  return response
}