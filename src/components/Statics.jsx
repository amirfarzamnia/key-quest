import { useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers5/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useTable } from 'react-table';
import Chart from 'react-apexcharts';
import React from 'react';

function Statics() {
    const [activePage, setActivePage] = React.useState('overview');
    const [sidebarOpen, setSidebarOpen] = React.useState(true);

    const location = useLocation();
    const navigate = useNavigate();

    const { address, isConnected } = useWeb3ModalAccount();
    const { open } = useWeb3Modal();

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

    const radialBarOptions = {
        chart: {
            type: 'radialBar',
            height: 300,
            toolbar: {
                show: false
            },
            fontFamily: 'Font1, sans-serif',
            foreColor: '#C0C0C0'
        },
        plotOptions: {
            radialBar: {
                track: {
                    show: false
                },
                startAngle: -180,
                endAngle: 180
            }
        },
        stroke: {
            lineCap: 'round'
        },
        series: [0, 0, 0],
        labels: ['Open Positions', 'Long Positions', 'Short Positions'],
        legend: {
            show: true
        }
    };

    const barChartOptions = {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: false
            },
            fontFamily: 'Font1, sans-serif',
            foreColor: '#C0C0C0'
        },
        series: [
            {
                name: 'Passive',
                data: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: 'ETH',
                data: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: 'Stables',
                data: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: 'Other',
                data: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        ],
        plotOptions: {
            bar: {
                borderRadius: 5
            }
        },
        xaxis: {
            categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10'],
            title: {
                text: 'Days Since Launch',
                offsetY: 6,
                offsetX: -35,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#ffffff'
                }
            }
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
        legend: {
            position: 'top'
        },
        title: {
            text: 'Passive Treasury Details',
            align: 'center',
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#ffffff'
            }
        },
        grid: {
            borderColor: '#9b9b9b25'
        }
    };

    const data = React.useMemo(
        () => [
            { 'Pos': '1', 'Wallet ID': 'abc123', 'Knowledge': 'High', 'Performance': 'Good', 'Trust': 'High', 'Activity': 'Active', 'Participation': 'High', 'Incentive': 'High' },
            { 'Pos': '2', 'Wallet ID': 'def456', 'Knowledge': 'Medium', 'Performance': 'Average', 'Trust': 'Medium', 'Activity': 'Moderate', 'Participation': 'Medium', 'Incentive': 'Medium' }
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            { Header: 'Pos', accessor: 'Pos' },
            { Header: 'Wallet ID', accessor: 'Wallet ID' },
            { Header: 'Knowledge', accessor: 'Knowledge' },
            { Header: 'Performance', accessor: 'Performance' },
            { Header: 'Trust', accessor: 'Trust' },
            { Header: 'Activity', accessor: 'Activity' },
            { Header: 'Participation', accessor: 'Participation' },
            { Header: 'Incentive', accessor: 'Incentive' }
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    const tabs = {
        overview: (
            <>
                <div className="flex flex-wrap justify-between gap-2 mb-10">
                    {Object.entries({ 'Price (USD)': 0, 'Market Cap': 0, '24H Volume': 0, 'Total Burned': 0 }).map(([title, value]) => (
                        <div key={title} className="card bg-transparent p-4 rounded-md">
                            <div className="card-body">
                                <span className="card-title text-secondary font-bold text-gray-400">{title}</span>
                                <h3 className="card-text text-white font-bold">{value}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Chart className="bg-white bg-opacity-5 p-5 rounded" options={priceChartOptions} series={priceChartOptions.series} type="area" height="300" />
                    <Chart className="bg-white bg-opacity-5 p-5 rounded" options={burnedChartOptions} series={burnedChartOptions.series} type="area" height="300" />
                    <Chart className="bg-white bg-opacity-5 p-5 rounded col-span-1 md:col-span-2" options={treasuryChartOptions} series={treasuryChartOptions.series} type="bar" height="300" />
                </div>
            </>
        ),
        details: (
            <div className="md:p-6">
                <div className="flex flex-wrap justify-between gap-2 mb-10">
                    {Object.entries({ 'Treasury Value': 0, 'Total Holders': 0, 'Total Locked': 0, 'Locking APY': 0 }).map(([title, value]) => (
                        <div key={title} className="card bg-transparent p-4 rounded-md">
                            <div className="card-body">
                                <span className="card-title text-secondary font-bold text-gray-400">{title}</span>
                                <h3 className="card-text text-white font-bold">{value}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-2 md:col-span-1 bg-white bg-opacity-5 rounded p-4">
                        <h4 className="text-white text-center font-bold mb-2">Open Positions</h4>
                        <div id="chart1" className="rounded-lg p-1">
                            <Chart options={radialBarOptions} series={radialBarOptions.series} type="radialBar" height={300} />
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 bg-white bg-opacity-5 rounded p-4">
                        <h4 className="text-secondary text-center font-bold m-5 text-white">Trading Stats</h4>
                        <div className="grid grid-cols-2 gap-4 px-4">
                            {Object.entries({ 'Total Platform PNL': 0, '24hr Platform PNL': 0, 'Total Volume': 0, '24hr Volume': 0 }).map(([label, value]) => (
                                <div key={label} className="text-center">
                                    <span className="text-secondary font-bold text-sm text-gray-400">{label}</span>
                                    <h3 className="text-white font-bold">{value}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-2 mb-4">
                        <div id="chart2" className="bg-white bg-opacity-5 rounded p-4">
                            <Chart options={barChartOptions} series={barChartOptions.series} type="bar" height={350} />
                        </div>
                    </div>
                </div>
            </div>
        ),
        involvement: (
            <div className="md:p-6">
                <div className="overflow-x-auto">
                    <table {...getTableProps()} className="min-w-full bg-white bg-opacity-5 rounded">
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()} className="py-3 px-6 text-left text-gray-400 font-bold">
                                            {column.render('Header')}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map((row) => {
                                prepareRow(row);

                                return (
                                    <tr {...row.getRowProps()} className="border-b border-gray-600">
                                        {row.cells.map((cell) => (
                                            <td {...cell.getCellProps()} className="py-3 px-6 text-white">
                                                {cell.render('Cell')}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        ),
        governance: (
            <div className="md:p-6">
                <p className="mb-4">You can use this form to submit a suggestion.</p>
                {isConnected ? (
                    <form onSubmit={(e) => e.preventDefault()} className="bg-white bg-opacity-5 p-5 rounded">
                        <div className="mb-4">
                            <label className="block mb-4">Your Wallet ID:</label>
                            <input type="text" value={address} required readOnly className="w-full px-3 py-2 bg-black border border-white rounded outline-none" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-4">Description:</label>
                            <textarea name="description" required className="w-full px-3 py-2 bg-black border border-white rounded outline-none" rows="5" placeholder="Enter your suggestion here..."></textarea>
                        </div>
                        <button type="submit" className="border border-white px-4 py-2 flex gap-2 items-center justify-center rounded hover:bg-white hover:text-black duration-200">
                            Submit
                        </button>
                    </form>
                ) : (
                    <button className="border border-white px-4 py-2 flex gap-2 items-center rounded hover:bg-white hover:text-black duration-200" onClick={() => open()}>
                        Connect Wallet to Continue
                    </button>
                )}
            </div>
        )
    };

    React.useEffect(() => {
        const tab = new URLSearchParams(location.search).get('tab');

        if (!Object.keys(tabs).includes(tab)) return navigate('?tab=overview', { replace: true });

        setActivePage(tab);
    }, [location]);

    return (
        <div className="flex flex-col md:flex-row">
            <div className={`text-white p-4 ${sidebarOpen ? 'w-full md:w-64' : 'w-16'} transition-width duration-200 md:sticky top-0`}>
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
            <div className="flex-1 p-6 overflow-y-auto sidebar">{tabs[activePage]}</div>
        </div>
    );
}

export default Statics;
