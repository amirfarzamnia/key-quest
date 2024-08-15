import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Chart from 'react-apexcharts';
import React from 'react';

function Dapp() {
    const [activePage, setActivePage] = React.useState('overview');
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    const [priceChartOptions] = React.useState({
        chart: {
            type: 'line',
            background: '#000'
        },
        xaxis: {
            categories: ['01 Mar', '03 Mar', '05 Mar', '07 Mar', '09 Mar', '11 Mar', '14 Mar'],
            labels: { style: { colors: '#fff' } },
            axisBorder: { color: '#fff' }
        },
        yaxis: {
            labels: { style: { colors: '#fff' } }
        },
        stroke: {
            curve: 'smooth'
        },
        tooltip: {
            theme: 'dark'
        },
        grid: {
            borderColor: '#444'
        },
        colors: ['#00E396']
    });

    const [priceChartData] = React.useState([
        {
            name: 'Passive Price',
            data: [0.001, 0.001, 0.001, 0.001, 0.001, 0.001, 0.001]
        }
    ]);

    const [burnedChartOptions] = React.useState({
        chart: {
            type: 'bar',
            background: '#000'
        },
        xaxis: {
            categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            labels: { style: { colors: '#fff' } },
            axisBorder: { color: '#fff' }
        },
        yaxis: {
            labels: { style: { colors: '#fff' } }
        },
        tooltip: {
            theme: 'dark'
        },
        grid: {
            borderColor: '#444'
        },
        colors: ['#FF4560']
    });

    const [burnedChartData] = React.useState([
        {
            name: 'Total Passive Burned',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
    ]);

    const tabs = {
        overview: (
            <div className="grid grid-cols-2 gap-6">
                <Chart options={priceChartOptions} series={priceChartData} type="line" height="300" />
                <Chart options={burnedChartOptions} series={burnedChartData} type="bar" height="300" />
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
            <div className={`bg-gray-800 text-white p-4 ${sidebarOpen ? 'w-64' : 'w-16'} transition-width duration-300`}>
                <div className="flex items-center justify-between">
                    <h2 className={`text-lg font-bold ${sidebarOpen ? 'block' : 'hidden'}`}>Menu</h2>
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="focus:outline-none">
                        <FaBars />
                    </button>
                </div>
                <div className="mt-8">
                    {Object.keys(tabs).map((key) => (
                        <button
                            key={key}
                            onClick={() => {
                                setActivePage(key);

                                navigate('?tab=' + key);
                            }}
                            className={`w-full text-left py-2 px-4 rounded-lg ${activePage === key ? 'bg-gray-700' : ''}`}>
                            {sidebarOpen && key}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex-1 p-6 bg-gray-900">{tabs[activePage]}</div>
        </div>
    );
}

export default Dapp;
