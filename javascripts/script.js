google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
	['mes','dispose','union star'],
	['Abril 2023',0,2460.88],
	['April 2023',2382.42,0],
	['December 2022',11004.09,0],
	['January 2023',18230.41,0],
	['March 2023',18935.46,0],
	['May 2023',0,1658.2],
	['November 2022',14637.9,0],
	['October 2022',12372.89,0]
]);
  var options = {title : 'Gasto por proveedor',vAxis: {title: 'Soles'},hAxis: {title: 'Meses'},seriesType: 'bars',series: {2: {type: 'line'}}};
  var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}