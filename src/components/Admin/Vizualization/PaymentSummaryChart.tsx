import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';

interface PaymentItem {
    transactionStatus: string;
    transactionAmount: number;
}

interface PaymentData {
    [key: string]: PaymentItem[];
}

interface PaymentResponse {
    data: PaymentData;
}

interface Props {
    setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
    setFailureAmount: React.Dispatch<React.SetStateAction<number>>;
}

const getStatusColor = (status: string): string => {
    const statusColors: { [key: string]: string } = {
        settlement: '#28a745',
        refund: '#ffc107',
        failure: '#dc3545',
        pending: '#007bff',
        expire: '#6c757d',
    };
    return statusColors[status.toLowerCase()] || '#000000';
};

const getMonthNumber = (monthName: string) => {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames.indexOf(monthName);
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

                setTotalAmount(settlementSum);
                setFailureAmount(failureSum);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [setTotalAmount, setFailureAmount]);

    const generateChartOption = (data: PaymentData): echarts.EChartsCoreOption => {
        const sortedMonths = Object.keys(data).sort(
            (a, b) => getMonthNumber(a) - getMonthNumber(b)
        );

        const legendData: string[] = ['settlement', 'expire', 'refund', 'failure'];
        const series = legendData.map((status) => {
            const color = getStatusColor(status);
            return {
                name: status,
                type: 'line',
                stack: 'total',
                data: sortedMonths.map(month => {
                    const payment = data[month]?.find(
                        item => item.transactionStatus === status
                    );
                    return {
                        value: payment ? payment.transactionAmount : 0,
                    };
                }),
                itemStyle: {
                    color: color,
                },
                emphasis: {
                    itemStyle: {
                        color: color,
                    },
                },
            };
        });


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
                data: sortedMonths,
            },
            yAxis: {
                type: 'value',
            },
            series: series,
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
