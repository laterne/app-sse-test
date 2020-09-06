var evtSource = new EventSource('sse'),
  list = document.getElementById('sselist')

evtSource.onmessage = function(e) {
  var date = new Date(),
    time = date.toLocaleTimeString();

  console.log(e.data, time)
}