google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
	['mes','fenix','disposed'],
	['ENERO',19672.31,0],
	['FEBRERO',20640.38,0],
	['MARZO',18422.54,0],
	['ABRIL',22140.35,0],
	['MAYO',16484.05,978.22],
	['JUNIO',17331.34,6127.74],
	['JULIO',9018.79,14282.72],
	['AGOSTO',13971.91,12959.35],
	['SEPTIEMBRE',16728.03,11821.24],
	['OCTUBRE',5707.78,13477.51],
	['NOVIEMBRE',8411.98,17195.69],
	['DICIEMBRE',6967.43,11976.41]
]);
  var options = {title : 'Gasto por proveedor',vAxis: {title: 'Soles'},hAxis: {title: 'Meses'},seriesType: 'bars',series: {2: {type: 'line'}}};
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}