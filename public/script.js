var evtSource = new EventSource('sse'),
  list = document.getElementById('sselist')

evtSource.onmessage = function(e) {
  
  console.log(e.data)
}