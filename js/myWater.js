var myChart = echarts.init(document.querySelector('.water'));
var option = {
	title: {
        show: true,
        text: '总和评分',
        x: '50%',
        y: '60%',
        z: 5,
        textAlign: 'center',
        textStyle: {
            color: '#ffffff',
            fontSize: 18,
			fontWeight: 500
        },
    },
    series: [{
        name: '总和评分',
        type: 'liquidFill',
		radius: '80%',
		center: ['50%', '50%'],
        data: [68/100],
        label:{
            normal:{
                textStyle:{
                    color: '#ffffff',
                    fontSize: 15,
                }
            }
        },
        color: ['rgb(132,232,187)'],
        backgroundStyle: {
            color: 'rgba(132,232,187,0)'
        },
        outline: {
            borderDistance: 0,
            itemStyle: {
                borderWidth: 5,
                borderColor: 'rgba(132,232,187,0.5)',
            }
        },
        // amplitude: 0,
    }]
};
myChart.setOption(option);

window.addEventListener('resize', function () {
    myChart.resize();
})

window.addEventListener('load', function () {
    myChart.resize();
})