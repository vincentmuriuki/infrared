import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';
// react plugin for creating vector maps
import { VectorMap } from 'react-jvectormap';
import ReactTable from 'react-table';
import { Link } from 'react-router-dom';

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Progress,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: 'data1',
    };
  }
  setBgChartData = (name) => {
    this.setState({
      bigChartData: name,
    });
  };
  render() {
    return (
      <>
        <div className='content'>
          <Row>
            <Col lg='3' md='6'>
              <Card className='card-stats'>
                <CardBody>
                  <Row>
                    <Col xs='5'>
                      <div className='info-icon text-center icon-warning'>
                        <i className='tim-icons icon-chat-33' />
                      </div>
                    </Col>
                    <Col xs='7'>
                      <div className='numbers'>
                        <p className='card-category'>Rides Today</p>
                        <CardTitle tag='h3'>123</CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className='stats'>
                    <i className='tim-icons icon-refresh-01' /> Update Now
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg='3' md='6'>
              <Card className='card-stats'>
                <CardBody>
                  <Row>
                    <Col xs='5'>
                      <div className='info-icon text-center icon-primary'>
                        <i className='tim-icons icon-shape-star' />
                      </div>
                    </Col>
                    <Col xs='7'>
                      <div className='numbers'>
                        <p className='card-category'>Subscribers</p>
                        <CardTitle tag='h3'>+45k</CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className='stats'>
                    <i className='tim-icons icon-sound-wave' /> Last Research
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg='3' md='6'>
              <Card className='card-stats'>
                <CardBody>
                  <Row>
                    <Col xs='5'>
                      <div className='info-icon text-center icon-success'>
                        <i className='tim-icons icon-single-02' />
                      </div>
                    </Col>
                    <Col xs='7'>
                      <div className='numbers'>
                        <p className='card-category'>Users</p>
                        <CardTitle tag='h3'>150,000</CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className='stats'>
                    <i className='tim-icons icon-trophy' /> Customers feedback
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg='3' md='6'>
              <Card className='card-stats'>
                <CardBody>
                  <Row>
                    <Col xs='5'>
                      <div className='info-icon text-center icon-danger'>
                        <i className='tim-icons icon-molecule-40' />
                      </div>
                    </Col>
                    <Col xs='7'>
                      <div className='numbers'>
                        <p className='card-category'>Errors</p>
                        <CardTitle tag='h3'>12</CardTitle>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className='stats'>
                    <i className='tim-icons icon-watch-time' /> In the last
                    hours
                  </div>
                </CardFooter>
              </Card>
            </Col>

            <Col lg='6'>
              <Card className='card-chart'>
                <CardHeader>
                  {/*<h5 className='card-category'>Latest Rides</h5>*/}
                  <CardTitle tag='h3'>
                    <i className='tim-icons icon-delivery-fast text-info' />{' '}
                    Latest Rides
                  </CardTitle>
                </CardHeader>
                <CardHeader>
                  <div className='tools float-right'>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        caret
                        className='btn-icon'
                        color='link'
                        data-toggle='dropdown'
                        type='button'
                      >
                        <i className='tim-icons icon-settings-gear-63' />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          href='#pablo'
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href='#pablo'
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href='#pablo'
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else
                        </DropdownItem>
                        <DropdownItem
                          className='text-danger'
                          href='#pablo'
                          onClick={(e) => e.preventDefault()}
                        >
                          Remove Data
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  {/*<CardTitle tag='h5'>Management Table</CardTitle>*/}
                </CardHeader>

                <CardBody>
                  {/*<RegularTables />*/}
                  <Table responsive>
                    <thead className='text-primary'>
                      <tr>
                        <th className='text-center'>#</th>
                        <th>Name</th>
                        <th>Job Position</th>
                        <th className='text-center'>Since</th>
                        <th className='text-right'>Salary</th>
                        <th className='text-right'>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='text-center'>
                          <Link>1</Link>
                        </td>
                        <td>Andrew Mike</td>
                        <td>Develop</td>
                        <td className='text-center'>2013</td>
                        <td className='text-right'>€ 99,225</td>
                        <td className='text-right'>
                          <Button
                            className='btn-link'
                            color='success'
                            id='tooltip974171201'
                            size='sm'
                          >
                            <i className='tim-icons icon-alert-circle-exc' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip974171201'
                          >
                            Approve
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col lg='6'>
              <Card className='card-chart'>
                <CardHeader>
                  {/*<h5 className='card-category'>Mpesa Transactions</h5>*/}
                  <CardTitle tag='h3'>
                    <i className='tim-icons icon-send text-success' /> Latest
                    Mpesa Transactions
                  </CardTitle>
                </CardHeader>
                <CardHeader>
                  <div className='tools float-right'>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        caret
                        className='btn-icon'
                        color='link'
                        data-toggle='dropdown'
                        type='button'
                      >
                        <i className='tim-icons icon-settings-gear-63' />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          href='#pablo'
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href='#pablo'
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href='#pablo'
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else
                        </DropdownItem>
                        <DropdownItem
                          className='text-danger'
                          href='#pablo'
                          onClick={(e) => e.preventDefault()}
                        >
                          Remove Data
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </CardHeader>

                <CardBody>
                  <Table responsive>
                    <thead className='text-primary'>
                      <tr>
                        <th className='text-center'>#</th>
                        <th>Name</th>
                        <th>Job Position</th>
                        <th className='text-center'>Since</th>
                        <th className='text-right'>Salary</th>
                        <th className='text-right'>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='text-center'>1</td>
                        <td>Andrew Mike</td>
                        <td>Develop</td>
                        <td className='text-center'>2013</td>
                        <td className='text-right'>€ 99,225</td>
                        <td className='text-right'>
                          <Button
                            className='btn-link btn-icon'
                            color='success'
                            id='tooltip324367706'
                            size='sm'
                          >
                            <i className='tim-icons icon-refresh-01' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip324367706'
                          >
                            Delete
                          </UncontrolledTooltip>
                          <Button
                            className='btn-link'
                            color='danger'
                            id='tooltip974171202'
                            size='sm'
                          >
                            <i className='tim-icons icon-simple-remove' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip974171202'
                          >
                            Approve
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
