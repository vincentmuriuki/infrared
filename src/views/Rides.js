import React from 'react';

// reactstrap components
import {
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Pagination,
  PaginationItem,
  PaginationLink,
  Label,
  FormGroup,
  Input,
  Progress,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';
import ReactBSAlert from 'react-bootstrap-sweetalert';

import { Link } from 'react-router-dom';

class Rides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
    };
  }

  // to stop the warning of calling setState of unmounted component
  componentWillUnmount() {
    var id = window.setTimeout(null, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  }

  basicAlert = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          style={{ display: 'block', marginTop: '-100px' }}
          title="Here's a message!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle='success'
          btnSize=''
        />
      ),
    });
  };

  hideAlert = () => {
    this.setState({
      alert: null,
    });
  };

  render() {
    return (
      <>
        <div className='content'>
          <Row>
            <Col md='12'>
              <Card>
                <CardHeader>
                  <div className='tools float-right'>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        caret
                        className='btn-link btn-icon'
                        color='default'
                        data-toggle='dropdown'
                        type='button'
                      >
                        <i className='tim-icons icon-settings-gear-63' />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem onClick={this.successAlert}>
                          Filter
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <CardTitle tag='h4'>Rides</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className='text-primary'>
                      <tr>
                        <th className='text-center'>#</th>

                        <th>Driver id</th>
                        <th>Date of departure</th>
                        <th>Status</th>
                        <th>Verified.</th>
                        <th>Booked rides/available</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='text-center'>
                          <Link>1</Link>
                        </td>
                        <td>PG65F48U3V</td>
                        <td>12 June, 2021</td>
                        <td>Started</td>
                        <td>True</td>
                        <td>2/3</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Pagination className='ml-auto mr-auto'>
              <PaginationItem>
                <PaginationLink
                  aria-label='Previous'
                  href='#pablo'
                  onClick={(e) => e.preventDefault()}
                >
                  <span aria-hidden={true}>
                    <i
                      aria-hidden={true}
                      className='tim-icons icon-double-left'
                    />
                  </span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href='#pablo'
                  onClick={(e) => e.preventDefault()}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className='active'>
                <PaginationLink
                  href='#pablo'
                  onClick={(e) => e.preventDefault()}
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href='#pablo'
                  onClick={(e) => e.preventDefault()}
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  aria-label='Next'
                  href='#pablo'
                  onClick={(e) => e.preventDefault()}
                >
                  <span aria-hidden={true}>
                    <i
                      aria-hidden={true}
                      className='tim-icons icon-double-right'
                    />
                  </span>
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </Row>
        </div>
      </>
    );
  }
}

export default Rides;
