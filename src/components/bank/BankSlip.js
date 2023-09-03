import React, { useEffect, useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import BankSlipTable from './BankSlipTable';
import axios from 'axios';

const BankSlip = () => {

    const [activeTab, setActiveTab] = useState('home');
    const [slips, setSlips] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/slips").then((res)=>{
            setSlips(res.data);
        });
    }, []);

    const all = 10;
    const can = 2;
    const confirmed = 1;
    const except = 1;
    const remove = 1;
    
    return (
        <div>
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link 
                        eventKey="allslip"
                        id="pills-all-tab"
                        className="ms-2"
                        onClick={() => setActiveTab('allslip')}
                    >
                        전　　체
                        <div className="howmany">{all}</div>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link 
                        eventKey="canslip" 
                        id="pills-can-tab"
                        className="ms-2"
                        onClick={() => setActiveTab('canslip')}
                    >
                        확정  가능
                        <div className="howmany">{can}</div>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link 
                        eventKey="confirmslip"
                        id="pills-certain-tab"
                        className="ms-2"
                        onClick={() => setActiveTab('confirmslip')}
                    >
                        확　　정
                        <div className="howmany">{confirmed}</div>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link 
                        eventKey="exceptslip"
                        id="pills-except-tab"
                        className="ms-2"
                        onClick={() => setActiveTab('exceptslip')}
                    >
                        제　　외
                        <div className="howmany">{except}</div>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link 
                        eventKey="removeslip" 
                        id="pills-remove-tab"
                        className="ms-2"
                        onClick={() => setActiveTab('removeslip')}
                    >
                        삭　　제
                        <div className="howmany">{remove}</div>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
           
            <div className='mt-3'>
                <BankSlipTable slips={slips} activeTab={activeTab}/>
            </div>
            
        </div>
    );
}

export default BankSlip;