import { useState } from 'react';
import Dashboard from '../components/Dashboard';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  const [currentMetric, setCurrentMetric] = useState('Sales');


  return (
    <div>
      <Dashboard metric={currentMetric} />
      <div className="container text-center">
        <h2>Change Metric</h2>
        <Button className="btn-custom" onClick={() => setCurrentMetric('Sales')}>
          Sales
        </Button>
        <Button className="btn-custom" onClick={() => setCurrentMetric('Users')}>
          Users
        </Button>
        <Button className="btn-custom" onClick={() => setCurrentMetric('Revenue')}>
          Revenue
        </Button>
      </div>
    </div>
  );
}