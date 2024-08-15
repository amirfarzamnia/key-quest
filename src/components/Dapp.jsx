import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Chart from 'react-apexcharts';

function Dapp() {
    const [activePage, setActivePage] = useState('overview');
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const [priceChartOptions] = useState({
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

    const [priceChartData] = useState([
        {
            name: 'Passive Price',
            data: [0.001, 0.001, 0.001, 0.001, 0.001, 0.001, 0.001]
        }
    ]);

    const [burnedChartOptions] = useState({
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

    const [burnedChartData] = useState([
        {
            name: 'Total Passive Burned',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
    ]);

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
                    <button onClick={() => setActivePage('overview')} className={`w-full text-left py-2 px-4 rounded-lg ${activePage === 'overview' ? 'bg-gray-700' : ''}`}>
                        {sidebarOpen && 'Overview'}
                    </button>
                    <button onClick={() => setActivePage('details')} className={`w-full text-left py-2 px-4 rounded-lg ${activePage === 'details' ? 'bg-gray-700' : ''}`}>
                        {sidebarOpen && 'Details'}
                    </button>
                    <button onClick={() => setActivePage('datatable')} className={`w-full text-left py-2 px-4 rounded-lg ${activePage === 'datatable' ? 'bg-gray-700' : ''}`}>
                        {sidebarOpen && 'Data Table'}
                    </button>
                </div>
            </div>
            <div className="flex-1 p-6 bg-gray-900">
                {(() => {
                    switch (activePage) {
                        case 'overview': {
                            return (
                                <div className="grid grid-cols-2 gap-6">
                                    <Chart options={priceChartOptions} series={priceChartData} type="line" height="300" />
                                    <Chart options={burnedChartOptions} series={burnedChartData} type="bar" height="300" />
                                </div>
                            );
                        }
                        case 'details': {
                            return <div className="text-white">Details Page Content</div>;
                        }
                        case 'datatable': {
                            return <div className="text-white">Data Table Page Content</div>;
                        }
                    }
                })()}
            </div>
        </div>
    );
}

export default Dapp;
