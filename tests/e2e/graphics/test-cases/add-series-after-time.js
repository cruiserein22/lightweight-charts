function generateData() {
	const res = [];
	const time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
	for (let i = 0; i < 1000; ++i) {
		res.push({
			time: time.getTime() / 1000,
			value: i,
		});

		time.setUTCDate(time.getUTCDate() + 1);
	}
	return res;
}

let chart;
function getChartInstance() {
	return chart;
}

function runTestCase(container) {
	chart = LightweightCharts.createChart(container, {
		height: 500, width: 600,
	});

	return new Promise(resolve => {
		setTimeout(() => {
			const mainSeries = chart.addLineSeries();
			mainSeries.setData(generateData());

			resolve();
		}, 1000);
	});
}
