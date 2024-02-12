import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import * as echarts from 'echarts';

interface Airplane {
    airplaneName: string;
    totalSoldout: number;
}

interface Airline {
    airlineName: string;
    totalSoldout: number;
    airplanes: Airplane[];
}
interface FlightSummaryChartProps {
    onTotalOrders: (total: number) => void;
}
const FlightSummaryChart: React.FC<FlightSummaryChartProps> = ({ onTotalOrders }) => {
    const [data, setData] = useState<Airline[]>([]);
    const [drilldownAirline, setDrilldownAirline] = useState<Airline | null>(null);

    const fetchData = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token not found');
            }

            const response = await axios.get<{ data: Airline[] }>('https://backend-fsw.fly.dev/api/v1/summary/trx/airlines', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        if (data.length > 0) {
            const totalOrders = data.reduce((total, airline) => total + airline.totalSoldout, 0);
            onTotalOrders(totalOrders);
        }
    }, [data, onTotalOrders]);

    const renderChart = useCallback(() => {
        const chartDom = document.getElementById('flight-summary-chart');
        if (!chartDom) return;

        let chart = echarts.getInstanceByDom(chartDom);
        if (!chart) {
            chart = echarts.init(chartDom);
        }

        const option: echarts.EChartOption = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}',
            },
            yAxis: {
                type: 'category',
                data: drilldownAirline ? drilldownAirline.airplanes.map(airplane => airplane.airplaneName) : data.map(item => item.airlineName),
                inverse: true,
                axisLabel: {
                    margin: 15,
                    rotate: 45,
                    formatter: function (value: string) {
                        return value.length > 10 ? `${value.slice(0, 10)}...` : value;
                    },
                },
            },
            xAxis: {
                type: 'value',
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '20%',
                containLabel: true,
            },
            series: [
                {
                    name: 'Total Soldout',
                    type: 'bar',
                    data: [],
                    emphasis: {
                    },
                    label: {
                        show: true,
                        position: 'inside',
                    },
                },
            ],
        };

        if (drilldownAirline) {
            option.title = { text: `Total Pesanan Berdasarkan Pesawat dari Maskapai ${drilldownAirline.airlineName}`, left: 'center' };
            option.yAxis = { type: 'category', data: drilldownAirline.airplanes.map(airplane => airplane.airplaneName), inverse: true, axisLabel: {
                    margin: 15,
                    rotate: 0,
                    formatter: function (value) {
                        return value.length > 10 ? value.slice(0, 10) + '...' : value;
                    }
                } };
            option.xAxis = { type: 'value' };
            option.series[0].data = drilldownAirline.airplanes.map(airplane => ({
                name: airplane.airplaneName,
                value: airplane.totalSoldout,
            }));
        } else {
            // Initial view showing all airlines
            option.title = { text: 'Total Pesanan Berdasarkan Maskapai', left: 'center' };
            option.yAxis = { type: 'category', data: data.map(item => item.airlineName), inverse: true, axisLabel: {
                    margin: 15,
                    rotate: 0,
                    formatter: function (value) {
                        return value.length > 10 ? value.slice(0, 10) + '...' : value;
                    }
                } };
            option.xAxis = { type: 'value' };
            option.series[0].data = data.map(item => ({
                name: item.airlineName,
                value: item.totalSoldout,
            }));
            option.legend = {
                data: ['Total Soldout'],
                orient: 'horizontal',
                left: 'center',
                bottom: 'bottom',
            };
        }

        chart.setOption(option, true);

        chart.off('click');
        chart.on('click', (params) => {
            if (!drilldownAirline) {
                const clickedAirline = data.find(airline => airline.airlineName === params.name);
                if (clickedAirline) {
                    setDrilldownAirline(clickedAirline);
                }
            }
        });
    }, [data, drilldownAirline]);



    useEffect(() => {
        renderChart();
    }, [renderChart]);

    const handleBackButtonClick = () => {
        setDrilldownAirline(null);
    };

    return (
        <div>
            {drilldownAirline && <button onClick={handleBackButtonClick}><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"/>
                <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
            </svg></button>}
            <div id="flight-summary-chart" style={{ width: 'auto', height: '450px', overflow: 'visible'}}></div>
        </div>
    );
};

export default FlightSummaryChart;
