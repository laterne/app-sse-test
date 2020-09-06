var evtSource = new EventSource('sse'),
  list = document.getElementById('sselist')

evtSource.onmessage = function(e) {
  var date = new Date();

  console.log(e.data, date.getSeconds())
}