import AccountEmail from "Components/ChangeSettingModal/AccountEmail/AccountEmail";
import AccountPassword from "Components/ChangeSettingModal/AccountPassword/AccountPassword";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import formStyle from "Styles/FormControl.module.css";

const Setting = () => {
  const [passwordModalShow, setPasswordModalShow] = useState(false);
  const [emailModalShow, setEmailModalShow] = useState(false);
  return (
    <div className="app__wrapper">
      <Container fluid>
        <Row>
          <Col md={12} lg={6}>
            <Row className="gy-4">
              <Col xs={12} md={12}>
                <div className={formStyle.formGroup}>
                  <label htmlFor="" className={formStyle.labelText}>
                    Account Email
                  </label>
                  <div className="d-flex align-items-center gap-3 flex-wrap">
                    Tushar.patel@whatever.com
                    <span
                      className="text-decoration-underline text-black cursor-pointer"
                      onClick={() => setEmailModalShow(true)}
                    >
                      Change
                    </span>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={12}>
                <div className={formStyle.formGroup}>
                  <label htmlFor="" className={formStyle.labelText}>
                    Present password
                  </label>
                  <div className="d-flex align-items-center gap-3 flex-wrap">
                    ********************
                    <span
                      className="text-decoration-underline text-black cursor-pointer"
                      onClick={() => setPasswordModalShow(true)}
                    >
                      Change
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <AccountPassword show={passwordModalShow} setShow={setPasswordModalShow} />
      <AccountEmail show={emailModalShow} setShow={setEmailModalShow} />
    </div>
  );
};

export default Setting;
