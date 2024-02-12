import { useEffect, useState } from 'react';
import * as echarts from 'echarts';

interface Transaction {
    id: number;
    first_name: string;
    last_name: string;
    departure_code: string;
    arrival_code: string;
    transaction_time: string;
    airline: string;
    total_price: number;
    transaction_status: string;
}

const TransactionPieChart: React.FC = () => {
    const [transactionData, setTransactionData] = useState<Transaction[]>([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            fetch('https://backend-fsw.fly.dev/api/v1/transactions/report', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch transaction data');
                    }
                    return response.json();
                })
                .then(data => {
                    if (Array.isArray(data.data)) {
                        setTransactionData(data.data);
                    } else {
                        console.error('Transaction data is not an array:', data.data);
                    }
                })
                .catch(error => {
                    console.error('Error fetching transaction data:', error);
                });
        } else {
            console.error('Token not found in local storage');
        }
    }, []);

    useEffect(() => {
        if (!Array.isArray(transactionData) || transactionData.length === 0) {
            return;
        }

        const statusCount: { [key: string]: number } = {};
        transactionData.forEach(transaction => {
            statusCount[transaction.transaction_status] =
                (statusCount[transaction.transaction_status] || 0) + 1;
        });

        const chartData = Object.keys(statusCount).map(status => ({
            name: status,
            value: statusCount[status],
        }));

        const chartDom = document.getElementById('transactionPieChart');
        if (chartDom) {
            const myChart = echarts.init(chartDom);
            const option: echarts.EChartOption = {
                title: {
                    text: 'Persentase Status Transaksi Tiket',
                    left: 'center',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                series: [
                    {
                        name: 'Transaction Status',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: chartData,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                            },
                        },
                    },
                ],
            };

            myChart.setOption(option);
        }
    }, [transactionData]);

    return <div id="transactionPieChart" style={{ width: '100%', minWidth: '350px', height: '300px' }} />;
};

export default TransactionPieChart;
