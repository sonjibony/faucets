import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Banner = () => {
  return (
    <div>
<div className=' text-center text-light   fw-semibold ' style={{backgroundColor:"#9b1fe9", marginBottom:"-25px"}}>
            <p className='py-4 my-auto'>Notice here</p>
            </div> 
    <div className="mx-5 ">
        
      <div>
        <h1 className="my-4 pt-4 " style={{ color: "#9b1fe9" }}>
          Request testnet LINK
        </h1>
        <p>
          Get testnet LINK for an account on one of the supported blockchain
          testnets so you can create and test your own oracle and Chainlinked
          smart contract
        </p>
      </div>
      
      <div>
        <Form className="bg-light p-5" style={{ backgroundColor: "white" }}>
        <div  style={{backgroundColor:"#EEF2FE"}}>
            <p className="p-3 my-auto">Your wallet is connected to <strong>Ethereum Kovan</strong> , so you are requesting  <strong>Ethereum Kovan</strong> Link/ETH.</p>
        </div>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold mt-2" style={{ color: "#9b1fe9" }}>
              Wallet Address
            </Form.Label>
            <Form.Control className="w-50" type="email" placeholder="Wallet Address..." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Request Type</Form.Label>
            <div className="d-flex gap-2 w-50">
            <Form.Control className="w-50" type="text" placeholder="20 Test Link" disabled/>
            <Form.Control className="w-50" type="text" placeholder="0.5 ETH" disabled />
            </div>
           
          </Form.Group>
          <Form.Group className="mb-3 p-4 w-50"  style={{border:"1px solid grey", backgroundColor:"#F9F9F9", borderRadius:"3px"}} controlId="formBasicCheckbox">
            <Form.Check  type="checkbox" label="I am not robot" />
          </Form.Group>
          <Button style={{backgroundColor:"#A633E9", border:"0px"}}  type="submit">
            Send Request
          </Button>
        </Form>
        
      </div>
    </div>
    </div>
  );
};

export default Banner;
