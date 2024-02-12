// PaymentSummaryChart.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactEcharts from 'echarts-for-react';

interface PaymentData {
    [key: string]: PaymentItem[];
}

interface PaymentItem {
    transactionStatus: string;
    transactionAmount: number;
}

interface PaymentResponse {
    data: PaymentData;
}

interface Props {
    setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
    setFailureAmount: React.Dispatch<React.SetStateAction<number>>;
}

const getStatusClassName = (status: string): string | undefined => {
    switch (status.toLowerCase()) {
        case 'settlement':
            return '#28a745';
        case 'refund':
            return '#ffc107';
        case 'failure':
            return '#dc3545';
        case 'pending':
            return '#007bff';
        case 'expire':
            return '#6c757d';
        default:
            return undefined;
    }
};

const PaymentSummaryChart: React.FC<Props> = ({ setTotalAmount, setFailureAmount }) => {
    const [data, setData] = useState<PaymentData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('Token not found');
                }

                const response = await axios.get<PaymentResponse>(
                    'https://backend-fsw.fly.dev/api/v1/summary/trx/payments',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                setData(response.data.data);

                let settlementSum = 0;
                let failureSum = 0;
                Object.values(response.data.data).forEach((items: PaymentItem[]) => {
                    items.forEach((item: PaymentItem) => {
                        if (item.transactionStatus === 'settlement') {
                            settlementSum += item.transactionAmount;
                        } else if (item.transactionStatus === 'failure') {
                            failureSum += item.transactionAmount;
                        }
                    });
                });

                setTotalAmount(settlementSum - failureSum);
                setFailureAmount(failureSum);


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [setTotalAmount, setFailureAmount]);

    const generateChartOption = (data: PaymentData): echarts.EChartsOption => {
        const months = Object.keys(data);
        const legendData: string[] = ['settlement', 'expire', 'refund', 'failure'];
        const seriesData = legendData.map((status) =>
            months.map((month) => {
                const payment = data[month].find(
                    (item: PaymentItem) => item.transactionStatus === status
                );
                return payment ? payment.transactionAmount : 0;
            })
        );

        return {
            title: {
                text: 'Total Pendapatan Transaksi Tiket Berdasarkan Status',
                left: 'center',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                },
            },
            legend: {
                data: legendData,
                top: 'bottom',
            },
            xAxis: {
                type: 'category',
                data: months,
            },
            yAxis: {
                type: 'value',
            },
            series: legendData.map((status, index) => ({
                name: status,
                type: 'bar',
                stack: 'total',
                data: seriesData[index],
                itemStyle: {
                    color: getStatusClassName(status.toLowerCase()) ?? '#000000',
                },
            })),
        };
    };

    return (
        <div>
            {data ? (
                <ReactEcharts option={generateChartOption(data)} style={{ width: '100%', height: '400px' }} />
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default PaymentSummaryChart;
