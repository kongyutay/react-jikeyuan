//柱状图组件
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

//功能代码
//可变的部分抽象成参数

const BarChart = ({title}) => {
    const chartRef = useRef(null);
    //为了保证dom节点完成准备而使用useEffect方法
    useEffect(()=>{
        //获取要渲染图表的节点
        const chartDom = chartRef.current;
        //初始化生成实例
        const myChart = echarts.init(chartDom);
        //准备参数
        const option = {
            title: {
                text: title
            },
            xAxis: {
                type: 'category',
                data: ['Vue', 'Angular', 'React']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                data: [10, 40, 70],
                type: 'bar'
                }
            ]
        };
        //如果参数存在就调用setOption方法
        option && myChart.setOption(option);
    },[])

    return <div ref={chartRef} id='main' style={{width: '500px', height: '400px'}}></div>
}

export default BarChart