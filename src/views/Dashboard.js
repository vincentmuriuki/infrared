import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';
// react plugin for creating vector maps
import { VectorMap } from 'react-jvectormap';
import ReactTable from 'react-table';

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
                          <div className='photo'>
                            <img
                              alt='...'
                              src={require('assets/img/tania.jpg')}
                            />
                          </div>
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
                      <tr>
                        <td className='text-center'>
                          <div className='photo'>
                            <img
                              alt='...'
                              src={require('assets/img/robi.jpg')}
                            />
                          </div>
                        </td>
                        <td>John Doe</td>
                        <td>Design</td>
                        <td className='text-center'>2012</td>
                        <td className='text-right'>€ 89,241</td>
                        <td className='text-right'>
                          <Button
                            className='btn-link btn-icon'
                            color='success'
                            id='tooltip533157871'
                            size='sm'
                          >
                            <i className='tim-icons icon-refresh-01' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip533157871'
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                          <Button
                            className='btn-link'
                            color='danger'
                            id='tooltip423541936'
                            size='sm'
                          >
                            <i className='tim-icons icon-simple-remove' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip423541936'
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-center'>
                          <div className='photo'>
                            <img
                              alt='...'
                              src={require('assets/img/lora.jpg')}
                            />
                          </div>
                        </td>
                        <td>Alex Mike</td>
                        <td>Design</td>
                        <td className='text-center'>2010</td>
                        <td className='text-right'>€ 92,144</td>
                        <td className='text-right'>
                          <Button
                            className='btn-link btn-icon'
                            color='success'
                            id='tooltip101947879'
                            size='sm'
                          >
                            <i className='tim-icons icon-refresh-01' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip101947879'
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                          <Button
                            className='btn-link'
                            color='danger'
                            id='tooltip964133889'
                            size='sm'
                          >
                            <i className='tim-icons icon-simple-remove' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip964133889'
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-center'>
                          <div className='photo'>
                            <img
                              alt='...'
                              src={require('assets/img/jana.jpg')}
                            />
                          </div>
                        </td>
                        <td>Mike Monday</td>
                        <td>Marketing</td>
                        <td className='text-center'>2013</td>
                        <td className='text-right'>€ 49,990</td>
                        <td className='text-right'>
                          <Button
                            className='btn-link btn-icon btn-neutral'
                            color='success'
                            id='tooltip932549650'
                            size='sm'
                          >
                            <i className='tim-icons icon-refresh-01' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip932549650'
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                          <Button
                            className='btn-link btn-neutral'
                            color='danger'
                            id='tooltip696208424'
                            size='sm'
                          >
                            <i className='tim-icons icon-simple-remove' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip696208424'
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-center'>
                          <div className='photo'>
                            <img
                              alt='...'
                              src={require('assets/img/robi.jpg')}
                            />
                          </div>
                        </td>
                        <td>Paul Dickens</td>
                        <td>Communication</td>
                        <td className='text-center'>2015</td>
                        <td className='text-right'>€ 69,201</td>
                        <td className='text-right'>
                          <Button
                            className='btn-link btn-icon btn-neutral'
                            color='success'
                            id='tooltip188998609'
                            size='sm'
                          >
                            <i className='tim-icons icon-refresh-01' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip188998609'
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                          <Button
                            className='btn-link btn-neutral'
                            color='danger'
                            id='tooltip991400757'
                            size='sm'
                          >
                            <i className='tim-icons icon-simple-remove' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip991400757'
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-center'>
                          <div className='photo'>
                            <img
                              alt='...'
                              src={require('assets/img/emilyz.jpg')}
                            />
                          </div>
                        </td>
                        <td>Manuel Rico</td>
                        <td>Manager</td>
                        <td className='text-center'>2012</td>
                        <td className='text-right'>€ 99,201</td>
                        <td className='text-right'>
                          <Button
                            className='btn-link btn-icon btn-neutral'
                            color='success'
                            id='tooltip967557276'
                            size='sm'
                          >
                            <i className='tim-icons icon-refresh-01' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip967557276'
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                          <Button
                            className='btn-link btn-neutral'
                            color='danger'
                            id='tooltip467555755'
                            size='sm'
                          >
                            <i className='tim-icons icon-simple-remove' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip467555755'
                          >
                            Tooltip on top
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
                            Tooltip on top
                          </UncontrolledTooltip>
                          <Button
                            className='btn-link'
                            color='danger'
                            id='tooltip974171201'
                            size='sm'
                          >
                            <i className='tim-icons icon-simple-remove' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip974171201'
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-center'>2</td>
                        <td>John Doe</td>
                        <td>Design</td>
                        <td className='text-center'>2012</td>
                        <td className='text-right'>€ 89,241</td>
                        <td className='text-right'>
                          <Button
                            className='btn-link btn-icon'
                            color='success'
                            id='tooltip533157871'
                            size='sm'
                          >
                            <i className='tim-icons icon-refresh-01' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip533157871'
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                          <Button
                            className='btn-link'
                            color='danger'
                            id='tooltip423541936'
                            size='sm'
                          >
                            <i className='tim-icons icon-simple-remove' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip423541936'
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-center'>3</td>
                        <td>Alex Mike</td>
                        <td>Design</td>
                        <td className='text-center'>2010</td>
                        <td className='text-right'>€ 92,144</td>
                        <td className='text-right'>
                          <Button
                            className='btn-link btn-icon'
                            color='success'
                            id='tooltip101947879'
                            size='sm'
                          >
                            <i className='tim-icons icon-refresh-01' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip101947879'
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                          <Button
                            className='btn-link'
                            color='danger'
                            id='tooltip964133889'
                            size='sm'
                          >
                            <i className='tim-icons icon-simple-remove' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip964133889'
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-center'>4</td>
                        <td>Mike Monday</td>
                        <td>Marketing</td>
                        <td className='text-center'>2013</td>
                        <td className='text-right'>€ 49,990</td>
                        <td className='text-right'>
                          <Button
                            className='btn-link btn-icon btn-neutral'
                            color='success'
                            id='tooltip932549650'
                            size='sm'
                          >
                            <i className='tim-icons icon-refresh-01' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip932549650'
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                          <Button
                            className='btn-link btn-neutral'
                            color='danger'
                            id='tooltip696208424'
                            size='sm'
                          >
                            <i className='tim-icons icon-simple-remove' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip696208424'
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-center'>5</td>
                        <td>Paul Dickens</td>
                        <td>Communication</td>
                        <td className='text-center'>2015</td>
                        <td className='text-right'>€ 69,201</td>
                        <td className='text-right'>
                          <Button
                            className='btn-link btn-icon btn-neutral'
                            color='success'
                            id='tooltip188998609'
                            size='sm'
                          >
                            <i className='tim-icons icon-refresh-01' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip188998609'
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                          <Button
                            className='btn-link btn-neutral'
                            color='danger'
                            id='tooltip991400757'
                            size='sm'
                          >
                            <i className='tim-icons icon-simple-remove' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip991400757'
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-center'>6</td>
                        <td>Manuel Rico</td>
                        <td>Manager</td>
                        <td className='text-center'>2012</td>
                        <td className='text-right'>€ 99,201</td>
                        <td className='text-right'>
                          <Button
                            className='btn-link btn-icon btn-neutral'
                            color='success'
                            id='tooltip967557276'
                            size='sm'
                          >
                            <i className='tim-icons icon-refresh-01' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip967557276'
                          >
                            Tooltip on top
                          </UncontrolledTooltip>
                          <Button
                            className='btn-link btn-neutral'
                            color='danger'
                            id='tooltip467555755'
                            size='sm'
                          >
                            <i className='tim-icons icon-simple-remove' />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target='tooltip467555755'
                          >
                            Tooltip on top
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
