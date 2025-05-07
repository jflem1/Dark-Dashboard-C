import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';


// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);


const Dashboard = ({ metric }) => {
  const [data, setData] = useState({
    sales: [65, 59, 80, 81, 56, 55, 40],
    users: [28, 48, 40, 19, 86, 27, 90],
    revenue: [12000, 19000, 3000, 5000, 2000, 3000, 7000],
  });


  useEffect(() => {
    // Simulate real-time data update based on metric
    const interval = setInterval(() => {
      setData((prevData) => ({
        sales: prevData.sales.map((val) => val + Math.floor(Math.random() * 10) - 5),
        users: prevData.users.map((val) => val + Math.floor(Math.random() * 10) - 5),
        revenue: prevData.revenue.map((val) => val + Math.floor(Math.random() * 1000) - 500),
      }));
    }, 2000); // Update every 2 seconds
    return () => clearInterval(interval);
  }, []);


  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#ffffff' } },
      title: { display: true, text: `Current Metric: ${metric}`, color: '#ffffff' },
    },
    scales: {
      x: { ticks: { color: '#ffffff' } },
      y: { ticks: { color: '#ffffff' } },
    },
  };


  const lineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: metric,
        data: data[metric.toLowerCase()],
        borderColor: '#007bff',
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        tension: 0.3,
      },
    ],
  };


  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: metric,
        data: data[metric.toLowerCase()],
        backgroundColor: '#28a745',
      },
    ],
  };


  const pieData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: metric,
        data: data[metric.toLowerCase()],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40', '#c9cbcf'],
      },
    ],
  };


  return (
    <div className="container">
      <h1 className="mb-4">Dashboard</h1>
      <div className="row">
        <div className="col-md-6">
          <Card>
            <Line data={lineData} options={chartOptions} />
          </Card>
        </div>
        <div className="col-md-6">
          <Card>
            <Bar data={barData} options={chartOptions} />
          </Card>
        </div>
        <div className="col-md-6">
          <Card>
            <Pie data={pieData} options={chartOptions} />
          </Card>
        </div>
        <div className="col-md-6">
          <Card>
            <h3>Summary</h3>
            <p>{metric}: {data[metric.toLowerCase()].reduce((a, b) => a + b, 0)}</p>
          </Card>
        </div>
      </div>
    </div>
  );
};


export default Dashboard;