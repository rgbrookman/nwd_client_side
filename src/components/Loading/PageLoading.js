import {
  Spinner
} from 'react-bootstrap';
import { Button, Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';

const PageLoading = () => {
  return (

    <Spinner id="page-loading" animation="grow" role="status" variant="light">
    <span className = "visually-hidden" > Loading... < /span>
    </Spinner>

  )
}

export default PageLoading;
