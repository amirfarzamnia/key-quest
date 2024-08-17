import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Chart from 'react-apexcharts';
import React from 'react';

function Statics() {
    const [activePage, setActivePage] = React.useState('overview');
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    const priceChartOptions = {
        chart: {
            type: 'area',
            height: 300,
            toolbar: {
                show: false
            },
            fontFamily: 'Chakra Petch, monospace',
            zoom: {
                enabled: false
            }
        },
        series: [
            {
                name: 'Passive Price',
                data: [
                    [1327359600000, 0.001],
                    [1327446000000, 0.001]
                ]
            }
        ],
        dataLabels: {
            enabled: false
        },
        xaxis: {
            type: 'datetime',
            min: new Date('01 Mar 2012').getTime(),
            title: {
                text: 'Date UTC',
                offsetY: 6,
                offsetX: -20,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#ffffff'
                }
            }
        },
        yaxis: {
            title: {
                text: 'Price USD',
                style: {
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#ffffff'
                }
            }
        },
        title: {
            text: 'Passive Price',
            align: 'center',
            margin: 10,
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#ffffff'
            }
        },
        tooltip: {
            y: {
                formatter: (i) => `${i} USD`
            }
        },
        grid: {
            borderColor: '#9b9b9b25'
        }
    };

    const burnedChartOptions = {
        chart: {
            type: 'area',
            stacked: false,
            height: 300,
            toolbar: {
                show: false
            },
            fontFamily: 'Chakra Petch, monospace',
            zoom: {
                enabled: false
            }
        },
        series: [
            {
                name: 'Total Burned',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        ],
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            title: {
                text: 'Days Since Launch',
                offsetY: 6,
                offsetX: -20,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#ffffff'
                }
            }
        },
        yaxis: {
            title: {
                text: 'MILLION',
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#ffffff'
                }
            }
        },
        title: {
            text: 'Total Passive Burned',
            align: 'center',
            margin: 10,
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#ffffff'
            }
        },
        tooltip: {
            y: {
                formatter: (i) => `${i} Million`
            }
        },
        grid: {
            borderColor: '#9b9b9b25'
        }
    };

    const treasuryChartOptions = {
        chart: {
            type: 'bar',
            height: 300,
            toolbar: {
                show: false
            },
            fontFamily: 'Chakra Petch, monospace',
            foreColor: '#C0C0C0'
        },
        dataLabels: {
            enabled: false
        },
        series: [
            {
                name: 'TX Fees',
                data: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: 'Treasury Value',
                data: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: 'Total Withdraw',
                data: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            }
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15']
        },
        yaxis: {
            title: {
                text: 'Value (ETH)',
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#ffffff'
                }
            }
        },
        title: {
            text: 'Treasury Income/Outcome Overview',
            align: 'center',
            margin: 10,
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#ffffff'
            }
        },
        tooltip: {
            y: {
                formatter: (i) => `${i} ETH`
            }
        },
        grid: {
            borderColor: '#9b9b9b25'
        }
    };

    const tabs = {
        overview: (
            <div className="grid grid-cols-2 gap-6">
                <Chart options={priceChartOptions} series={priceChartOptions.series} type="area" height="300" />
                <Chart options={burnedChartOptions} series={burnedChartOptions.series} type="area" height="300" />
                <Chart options={treasuryChartOptions} series={treasuryChartOptions.series} type="bar" height="300" className="col-span-2" />
            </div>
        ),
        details: <div className="text-white">Details Page Content</div>,
        datatable: <div className="text-white">Data Table Page Content</div>
    };

    React.useEffect(() => {
        const tab = new URLSearchParams(location.search).get('tab');

        if (!Object.keys(tabs).includes(tab)) return navigate('?tab=overview', { replace: true });

        setActivePage(tab);
    }, [location]);

    return (
        <div className="flex">
            <div className={`text-white p-4 ${sidebarOpen ? 'w-64' : 'w-16'} transition-width duration-200`}>
                <div className="flex items-center justify-between">
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="focus:outline-none">
                        <FaBars />
                    </button>
                </div>
                <div className="mt-8">
                    {sidebarOpen &&
                        Object.keys(tabs).map((key) => (
                            <button
                                key={key}
                                onClick={() => {
                                    setActivePage(key);

                                    navigate('?tab=' + key);
                                }}
                                className={`w-full border border-white text-left py-2 px-4 ${activePage === key ? 'bg-white text-black' : 'hover:bg-zinc-900'}`}>
                                {key}
                            </button>
                        ))}
                </div>
            </div>
            <div className="flex-1 p-6">{tabs[activePage]}</div>
        </div>
    );
}

export default Statics;
