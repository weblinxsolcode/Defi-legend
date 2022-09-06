import { React, useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import {
  AccordionContext,
  useAccordionButton,
  Accordion,
  Card,
} from "react-bootstrap";

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button type="button" onClick={decoratedOnClick} className="acc-toggler">
      {isCurrentEventKey ? (
        <span className="bg-arrow">
          <FaAngleUp />
        </span>
      ) : (
        <span className="bg-arrow">
          <FaAngleDown />
        </span>
      )}
    </button>
  );
}

const scrollTopTop = (changeState) => {
  changeState(1);
  window.scrollTo(0, 0);
};

export default function Faqs() {
  return (
    <div>
      <div className="container mt-5">
        {/* defaultActiveKey="0" */}
        <Accordion>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center justify-content-between">
              <div className="mb-0 acc-head">What is the origin of Thor?</div>
              <ContextAwareToggle eventKey="0">+</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="">
                <div className="mt-2 text-start">
                  <p className="acc-head">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="m-0 mb-3 acc-card">
            <Card.Header className="py-3 d-flex align-items-center justify-content-between">
              <div className="mb-0 acc-head">What is the origin of Thor?</div>
              <ContextAwareToggle eventKey="1">+</ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="">
                <div className="mt-2 text-start">
                  <p className="acc-head">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
         
        </Accordion>
      </div>
    </div>
  );
}
