import { Card, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faWallet, faShoppingBag, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import React, { Component ,useEffect }  from 'react';
import Axios from 'axios';

const generateTopWidget = (icon, title, text) => {
  return (
    <Container fluid className="col-6 col-lg-3 p-3 mt-3" key={text}>
      <Card style={{ background: '#EDF2F7', borderRadius: '0' }}>
        <Card.Body>
          <Row>
            <Container className="col-12 col-lg-3 d-flex justify-content-center text-center mb-3 mb-lg-0">
              <Container className="my-auto align-middle">
                <FontAwesomeIcon icon={icon} className="fa-2x" />
              </Container>
            </Container>
            <Container className="col-12 col-lg-9 text-center">
              <h4>{typeof text !== 'number' ? text : <CountUp end={text} duration={4} />}</h4>
              <small className="text-uppercase text-muted">{title}</small>
            </Container>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

const Admin = ({ user }) => {
  const [dashdata, setDashdata] = React.useState([]); 
  const data = {
    labels: dashdata.o_dates,
    datasets: [
      {
        label: 'Orders',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dashdata.total_orders_by_date,
      },
    ],
  };

  const data_2 = {
    datasets: [
      {
        data: [dashdata.enabled_products, dashdata.unenabled_products, dashdata.featured_products],
        backgroundColor: ['#17aa30', 'red', 'blue'],
      },
    ],
    labels: ['Enabled', 'Disabled', 'Featured'],
  };

  const data_3 = {
    datasets: [
      {
        data: [dashdata.pending_orders, dashdata.completed_orders, dashdata.processing_orders],
        backgroundColor: ['red', '#17aa30', 'yellow'],
      },
    ],
    labels: ['Pending', 'Completed', 'Processing'],
  };
  useEffect(()=>{
    Axios.post('/api/get_admin_dash_data').then(res=>{
      console.log(res);
      setDashdata(res.data)
    })
  })
  return (
    <Container fluid>
      <Row>
        {[
          { i: faUser, t: 'Users', s: dashdata.users },
          { i: faShoppingBag, t: 'Distributors', s: dashdata.distributors },
          { i: faShoppingBag, t: 'Customer Orders', s: dashdata.orders },
          { i: faWallet, t: 'Distributor Orders', s: dashdata.dis_orders },
          { i: faWarehouse, t: 'Products', s: dashdata.products },
          { i: faWarehouse, t: 'Customer Sales', s: dashdata.cus_sales },
          { i: faWarehouse, t: 'Distributor Sales', s: dashdata.dis_sales },
          { i: faWarehouse, t: 'Total Sales', s: dashdata.cus_sales + dashdata.dis_sales  },
        ].map((w) => generateTopWidget(w.i, w.t, w.s))}
      </Row>

      {/* <Container fluid style={{ background: '#EDF2F7', borderRadius: '0' }}>
        <Bar data={data} width={100} height={50} options={{ maintainAspectRatio: false }} />
      </Container> */}
      <Row>
        <Container fluid className="col-12 col-lg-8 p-3">
          <Container fluid className="p-3" style={{ background: '#EDF2F7', border: '1px solid rgba(0,0,0,.125)' }}>
            <small className="text-uppercase text-muted mb-3">Orders</small>
            <Container>
              <Line data={data} />
            </Container>
          </Container>
        </Container>
        <Container fluid className="col-12 col-lg-4 p-3">
          <Container fluid className="p-3" style={{ background: '#EDF2F7', border: '1px solid rgba(0,0,0,.125)' }}>
            <small className="text-uppercase text-muted mb-3">Products</small>
            <Container>
              <Doughnut
                data={data_2}
                options={{
                  legend: {
                    display: true,
                    position: 'bottom',
                  },
                }}
              />
            </Container>
            <hr />
            <small className="text-uppercase text-muted mb-3">Orders</small>
            <Container>
              <Doughnut
                data={data_3}
                options={{
                  legend: {
                    display: true,
                    position: 'bottom',
                  },
                }}
              />
            </Container>
          </Container>
        </Container>
      </Row>
    </Container>
  );
};

export default Admin;
