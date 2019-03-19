import React from 'react';
import './App.css';

import { Form, Navbar, Nav, Col, Row, Container} from 'react-bootstrap';

export default class Dashboard extends React.Component{

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
    
        this.handleClick = this.handleClick.bind(this);
      }
    
        handleClick() {
            this.setState(function(prevState) {
                return {isToggleOn: !prevState.isToggleOn};
            });
        }

    render(){
        return(
            <div>
                        
                      <Navbar bg="light" variant="light">
                        <Navbar.Brand href="/">TimeOff Management</Navbar.Brand>
                        <Nav className="ml-auto">
                        <Nav.Link href="#home">Calendar</Nav.Link>
                        <Nav.Link href="/teamview">Team View</Nav.Link>
                        <Nav.Link href="/AbsenceRequest">New Absence</Nav.Link>
                        </Nav>
                    
                       </Navbar>
                       <h1 className="calendar">Employee Calendar</h1>
                       <h4>Mayowa Tudonu's Calendar for 2019</h4>         
        
                       <div><br></br>
                           <h4>Statistics</h4><hr></hr>
                           <Container>
                                <Row>
                                    <Col><h2>Days Available</h2><h2>10</h2></Col>
                                    <Col>
                                                                        
                                        <table >
                                        <tr>
                                            <th colSpan="2">Allowance breakdown</th>
                                        </tr>
                                        <tr>
                                            <td>Nominal allowance</td>
                                            <td>  15</td>
                                        </tr>
                                        <tr>
                                            <td>Carried over from 2018</td>
                                            <td>  0</td>
                                        </tr>
                                        <tr>
                                            <td>Individual adjustment</td>
                                            <td>  0</td>
                                        </tr>
                                        <tr>
                                            <td>Start/end of employment</td>
                                            <td>  0</td>
                                        </tr>
                                        <tr>
                                            <td>Used so far</td>
                                            <td>  0</td>
                                        </tr>
                                        
                                       
                                        </table>
        
                                    </Col>
                                    <Col><h2>Used so far</h2><hr></hr>No approved requests so far</Col>
                                    <Col><h2>Profile</h2><hr></hr>Name: Mayowa Tudonu<br></br>Company Name: LevelUp Academy<br></br>Department: Software/IT<br></br>Position: Senior Developer<br></br>Supervisor: Ireti</Col>
        
                                        
                                </Row>
                            </Container><br></br>
                            <h2>Upcoming Months <button class="btn btn-light toggle-button" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" id="toggle" onClick={this.handleClick}>
                            {this.state.isToggleOn ? 'Show more' : 'Less....'}
          </button></h2><br></br>
                            
                            <Container>
                            
                                <Row>
                                    <Col>
                                    <div class="month">      
                                        <ul>
                                            
                                            <li>
                                            January<br></br>
                                            <span ></span>
                                            </li>
                                        </ul>
                                    </div>
        
                                        <ul class="weekdays">
                                        <li>Mo</li>
                                        <li>Tu</li>
                                        <li>We</li>
                                        <li>Th</li>
                                        <li>Fr</li>
                                        <li>Sa</li>
                                        <li>Su</li>
                                        </ul>
        
                                        <ul class="days">  
                                        <li></li>
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                        <li><span class="active">5</span></li>
                                        <li>6</li>
                                        <li>7</li>
                                        <li>8</li>
                                        <li>9</li>
                                        <li>10</li>
                                        <li>11</li>
                                        <li>12</li>
                                        <li>13</li>
                                        <li>14</li>
                                        <li>15</li>
                                        <li>16</li>
                                        <li>17</li>
                                        <li>18</li>
                                        <li>19</li>
                                        <li>20</li>
                                        <li>21</li>
                                        <li>22</li>
                                        <li>23</li>
                                        <li>24</li>
                                        <li>25</li>
                                        <li>26</li>
                                        <li>27</li>
                                        <li>28</li>
                                        <li>29</li>
                                        <li>30</li>
                                        <li>31</li>
                    
                                        </ul>
                                                                        
                                    </Col>
                                    <Col><div class="month">      
                                        <ul>
                                           
                                            <li>
                                            February<br></br>
                                            <span ></span>
                                            </li>
                                        </ul>
                                        </div>
        
                                        <ul class="weekdays">
                                        <li>Mo</li>
                                        <li>Tu</li>
                                        <li>We</li>
                                        <li>Th</li>
                                        <li>Fr</li>
                                        <li>Sa</li>
                                        <li>Su</li>
                                        </ul>
        
                                        <ul class="days">  
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                        <li>5</li>
                                        <li><span class="active">6</span></li>
                                        <li>7</li>
                                        <li>8</li>
                                        <li>9</li>
                                        <li>10</li>
                                        <li>11</li>
                                        <li>12</li>
                                        <li>13</li>
                                        <li>14</li>
                                        <li>15</li>
                                        <li>16</li>
                                        <li>17</li>
                                        <li>18</li>
                                        <li>19</li>
                                        <li>20</li>
                                        <li>21</li>
                                        <li>22</li>
                                        <li>23</li>
                                        <li>24</li>
                                        <li>25</li>
                                        <li>26</li>
                                        <li>27</li>
                                        <li>28</li>
                                    
                                        </ul>
                                    </Col>
                                    <Col>
                                     <div class="month">      
                                        <ul>
                                            
                                            <li>
                                            March<br></br>
                                            <span ></span>
                                            </li>
                                        </ul>
                                        </div>
        
                                        <ul class="weekdays">
                                        <li>Mo</li>
                                        <li>Tu</li>
                                        <li>We</li>
                                        <li>Th</li>
                                        <li>Fr</li>
                                        <li>Sa</li>
                                        <li>Su</li>
                                        </ul>
        
                                        <ul class="days">  
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                        <li>5</li>
                                        <li>6</li>
                                        <li>7</li>
                                        <li>8</li>
                                        <li>9</li>
                                        <li>10</li>
                                        <li>11</li>
                                        <li>12</li>
                                        <li><span class="active">13</span></li>
                                        <li>14</li>
                                        <li>15</li>
                                        <li>16</li>
                                        <li>17</li>
                                        <li>18</li>
                                        <li>19</li>
                                        <li>20</li>
                                        <li>21</li>
                                        <li>22</li>
                                        <li>23</li>
                                        <li>24</li>
                                        <li>25</li>
                                        <li>26</li>
                                        <li>27</li>
                                        <li>28</li>
                                        <li>29</li>
                                        <li>30</li>
                                        <li>31</li>
                                        </ul>
                                    </Col>
                                    <Col>
                                    <div class="month">      
                                        <ul>
                                            
                                            <li>
                                            April<br></br>
                                            
                                            </li>
                                        </ul>
                                        </div>
        
                                        <ul class="weekdays">
                                        <li>Mo</li>
                                        <li>Tu</li>
                                        <li>We</li>
                                        <li>Th</li>
                                        <li>Fr</li>
                                        <li>Sa</li>
                                        <li>Su</li>
                                        </ul>
        
                                        <ul class="days">  
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                        <li>5</li>
                                        <li>6</li>
                                        <li>7</li>
                                        <li>8</li>
                                        <li>9</li>
                                        <li><span class="active">10</span></li>
                                        <li>11</li>
                                        <li>12</li>
                                        <li>13</li>
                                        <li>14</li>
                                        <li>15</li>
                                        <li>16</li>
                                        <li>17</li>
                                        <li>18</li>
                                        <li>19</li>
                                        <li>20</li>
                                        <li>21</li>
                                        <li>21</li>
                                        <li>22</li>
                                        <li>23</li>
                                        <li>24</li>
                                        <li>25</li>
                                        <li>26</li>
                                        <li>27</li>
                                        <li>28</li>
                                        <li>29</li>
                                        <li>2</li>
                                        <li>27</li>
                                        <li>28</li>
                                        <li>29</li>
                                        <li>30</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Container>
                       </div>
                       <div class="collapse" id="collapseExample">
                            <div class="card card-body">
                                
                                <Container>
                            
                                <Row>
                                    <Col>
                                    <div class="month">      
                                    <ul>
                                            
                                            <li>
                                            May<br></br>
                                            <span ></span>
                                            </li>
                                        </ul>
                                        </div>
        
                                        <ul class="weekdays">
                                        <li>Mo</li>
                                        <li>Tu</li>
                                        <li>We</li>
                                        <li>Th</li>
                                        <li>Fr</li>
                                        <li>Sa</li>
                                        <li>Su</li>
                                        </ul>
        
                                        <ul class="days">  
                                        <li></li>
                                        <li></li>
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                        <li>5</li>
                                        <li>6</li>
                                        <li>7</li>
                                        <li><span class="active">8</span></li>
                                        <li>9</li>
                                        <li>10</li>
                                        <li>11</li>
                                        <li>12</li>
                                        <li>13</li>
                                        <li>14</li>
                                        <li>15</li>
                                        <li>16</li>
                                        <li>17</li>
                                        <li>18</li>
                                        <li>19</li>
                                        <li>20</li>
                                        <li>21</li>
                                        <li>22</li>
                                        <li>23</li>
                                        <li>24</li>
                                        <li>25</li>
                                        <li>26</li>
                                        <li>27</li>
                                        <li>28</li>
                                        <li>29</li>
                                        <li>30</li>
                                        <li>31</li>
                                        </ul>
                                                                        
                                    </Col>
                                    <Col><div class="month">      
                                    <ul>
                                            
                                            <li>
                                            june<br></br>
                                            
                                            </li>
                                        </ul>
                                        </div>
        
                                        <ul class="weekdays">
                                        <li>Mo</li>
                                        <li>Tu</li>
                                        <li>We</li>
                                        <li>Th</li>
                                        <li>Fr</li>
                                        <li>Sa</li>
                                        <li>Su</li>
                                        </ul>
        
                                        <ul class="days">  
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                        <li><span class="active">5</span></li>
                                        <li>6</li>
                                        <li>7</li>
                                        <li>8</li>
                                        <li>9</li>
                                        <li>10</li>
                                        <li>11</li>
                                        <li>12</li>
                                        <li>13</li>
                                        <li>14</li>
                                        <li>15</li>
                                        <li>16</li>
                                        <li>17</li>
                                        <li>18</li>
                                        <li>19</li>
                                        <li>20</li>
                                        <li>21</li>
                                        <li>22</li>
                                        <li>23</li>
                                        <li>24</li>
                                        <li>25</li>
                                        <li>26</li>
                                        <li>27</li>
                                        <li>28</li>
                                        <li>29</li>
                                        <li>30</li>
                                        </ul>
                                    </Col>
                                    <Col>
                                     <div class="month">      
                                     <ul>
                                            
                                            <li>
                                            July<br></br>
                                            
                                            </li>
                                        </ul>
                                        </div>
        
                                        <ul class="weekdays">
                                        <li>Mo</li>
                                        <li>Tu</li>
                                        <li>We</li>
                                        <li>Th</li>
                                        <li>Fr</li>
                                        <li>Sa</li>
                                        <li>Su</li>
                                        </ul>
        
                                        <ul class="days">  
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                        <li>5</li>
                                        <li>6</li>
                                        <li>7</li>
                                        <li>8</li>
                                        <li>9</li>
                                        <li>10</li>
                                        <li>11</li>
                                        <li>12</li>
                                        <li>13</li>
                                        <li>14</li>
                                        <li>15</li>
                                        <li>16</li>
                                        <li>17</li>
                                        <li>18</li>
                                        <li>19</li>
                                        <li>20</li>
                                        <li>21</li>
                                        <li>22</li>
                                        <li>23</li>
                                        <li>24</li>
                                        <li><span class="active">25</span></li>
                                        <li>26</li>
                                        <li>27</li>
                                        <li>28</li>
                                        <li>29</li>
                                        <li>30</li>
                                        <li>31</li>
                                        
                                        </ul>
                                    </Col>
                                    <Col>
                                    <div class="month">      
                                    <ul>
                                            
                                            <li>
                                            August<br></br>
                                            
                                            </li>
                                        </ul>
                                        </div>
        
                                        <ul class="weekdays">
                                        <li>Mo</li>
                                        <li>Tu</li>
                                        <li>We</li>
                                        <li>Th</li>
                                        <li>Fr</li>
                                        <li>Sa</li>
                                        <li>Su</li>
                                        </ul>
        
                                        <ul class="days">  
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                        <li>5</li>
                                        <li>6</li>
                                        <li><span class="active">7</span></li>
                                        <li>8</li>
                                        <li>9</li>
                                        <li>10</li>
                                        <li>11</li>
                                        <li>12</li>
                                        <li>13</li>
                                        <li>14</li>
                                        <li>15</li>
                                        <li>16</li>
                                        <li>17</li>
                                        <li>18</li>
                                        <li>19</li>
                                        <li>20</li>
                                        <li>21</li>
                                        <li>22</li>
                                        <li>23</li>
                                        <li>24</li>
                                        <li>25</li>
                                        <li>26</li>
                                        <li>27</li>
                                        <li>28</li>
                                        <li>29</li>
                                        <li>30</li>
                                        <li>31</li>
                                        
                                        </ul>
                                    </Col>
                                </Row>
                            </Container><br></br>
                            <Container>
                            
                                <Row>
                                    <Col>
                                    <div class="month">      
                                    <ul>
                                            
                                            <li>
                                            september<br></br>
                                            <span ></span>
                                            </li>
                                        </ul>
                                        </div>
        
                                        <ul class="weekdays">
                                        <li>Mo</li>
                                        <li>Tu</li>
                                        <li>We</li>
                                        <li>Th</li>
                                        <li>Fr</li>
                                        <li>Sa</li>
                                        <li>Su</li>
                                        </ul>
        
                                        <ul class="days">  
                                       
                                        <li></li>
                                        <li>1</li>
                                        <li><span class="active">2</span></li>
                                        <li>3</li>
                                        <li>4</li>
                                        <li>5</li>
                                        <li>6</li>
                                        <li>7</li>
                                        <li>8</li>
                                        <li>9</li>
                                        <li>10</li>
                                        <li>11</li>
                                        <li>12</li>
                                        <li>13</li>
                                        <li>14</li>
                                        <li>15</li>
                                        <li>16</li>
                                        <li>17</li>
                                        <li>18</li>
                                        <li>19</li>
                                        <li>20</li>
                                        <li>21</li>
                                        <li>22</li>
                                        <li>23</li>
                                        <li>24</li>
                                        <li>25</li>
                                        <li>26</li>
                                        <li>27</li>
                                        <li>28</li>
                                        <li>29</li>
                                        <li>30</li>
                                        </ul>
                                                                        
                                    </Col>
                                    <Col><div class="month">      
                                    <ul>
                                            
                                            <li>
                                            October<br></br>
                                            
                                            </li>
                                        </ul>
                                        </div>
        
                                        <ul class="weekdays">
                                        <li>Mo</li>
                                        <li>Tu</li>
                                        <li>We</li>
                                        <li>Th</li>
                                        <li>Fr</li>
                                        <li>Sa</li>
                                        <li>Su</li>
                                        </ul>
        
                                        <ul class="days">  
                                        <li></li>
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                        <li>5</li>
                                        <li>6</li>
                                        <li>7</li>
                                        <li>8</li>
                                        <li><span class="active">9</span></li>
                                        <li>10</li>
                                        <li>11</li>
                                        <li>12</li>
                                        <li>13</li>
                                        <li>14</li>
                                        <li>15</li>
                                        <li>16</li>
                                        <li>17</li>
                                        <li>18</li>
                                        <li>19</li>
                                        <li>20</li>
                                        <li>21</li>
                                        <li>22</li>
                                        <li>23</li>
                                        <li>24</li>
                                        <li>25</li>
                                        <li>26</li>
                                        <li>27</li>
                                        <li>28</li>
                                        <li>29</li>
                                        <li>30</li>
                                        <li>31</li>
                                      
                                        </ul>
                                    </Col>
                                    <Col>
                                     <div class="month">      
                                     <ul>
                                           
                                           <li>
                                           november<br></br>
                                           <span ></span>
                                           </li>
                                       </ul>
                                       </div>
        
                                       <ul class="weekdays">
                                       <li>Mo</li>
                                       <li>Tu</li>
                                       <li>We</li>
                                       <li>Th</li>
                                       <li>Fr</li>
                                       <li>Sa</li>
                                       <li>Su</li>
                                       </ul>
        
                                       <ul class="days">  
                                       <li></li>
                                       <li></li>
                                       <li></li>
                                       <li></li>
                                       <li>1</li>
                                       <li>2</li>
                                       <li>3</li>
                                       <li>4</li>
                                       <li>5</li>
                                       <li><span class="active">6</span></li>
                                       <li>7</li>
                                       <li>8</li>
                                       <li>9</li>
                                       <li>10</li>
                                       <li>11</li>
                                       <li>12</li>
                                       <li>13</li>
                                       <li>14</li>
                                       <li>15</li>
                                       <li>16</li>
                                       <li>17</li>
                                       <li>18</li>
                                       <li>19</li>
                                       <li>20</li>
                                       <li>21</li>
                                       <li>22</li>
                                       <li>23</li>
                                       <li>24</li>
                                       <li>25</li>
                                       <li>26</li>
                                       <li>27</li>
                                       <li>28</li>
                                       <li>29</li>
                                       <li>30</li>
                                   
                                       </ul>
                                    </Col>
                                    <Col>
                                    <div class="month">      
                                    <ul>
                                            
                                            <li>
                                            december<br></br>
                                            <span ></span>
                                            </li>
                                        </ul>
                                        </div>
        
                                        <ul class="weekdays">
                                        <li>Mo</li>
                                        <li>Tu</li>
                                        <li>We</li>
                                        <li>Th</li>
                                        <li>Fr</li>
                                        <li>Sa</li>
                                        <li>Su</li>
                                        </ul>
        
                                        <ul class="days">  
                                       
                                        <li></li>
                                        <li>1</li>
                                        <li><span class="active">2</span></li>
                                        <li>3</li>
                                        <li>4</li>
                                        <li>5</li>
                                        <li>6</li>
                                        <li>7</li>
                                        <li>8</li>
                                        <li>9</li>
                                        <li>10</li>
                                        <li>11</li>
                                        <li>12</li>
                                        <li>13</li>
                                        <li>14</li>
                                        <li>15</li>
                                        <li>16</li>
                                        <li>17</li>
                                        <li>18</li>
                                        <li>19</li>
                                        <li>20</li>
                                        <li>21</li>
                                        <li>22</li>
                                        <li>23</li>
                                        <li>24</li>
                                        <li>25</li>
                                        <li>26</li>
                                        <li>27</li>
                                        <li>28</li>
                                        <li>29</li>
                                        <li>30</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Container>
                            </div>
                        </div><br></br>
                       
                         <h4 className="head">All my abscences in 2019</h4><br></br>
                         <Row>
                         <Col>
                         <table className="table1">
                         
                                     
                                        <tr>
                                            <td>Type</td>
                                            <td> Deducted</td>
                                            <td>Dates</td>
                                            <td>Approved by</td>
                                            <td>Status</td>
                                        </tr>
                                        <tr>
                                            <td>Holiday</td>
                                            <td>2</td>
                                            <td>From 2018-01-01 to 2018-01-03</td>
                                            <td>Ireti</td>
                                            <td>Approved</td>
        
                                        </tr>
                                        <tr>
                                            <td>Holiday</td>
                                            <td>2</td>
                                            <td>From 2018-01-15 to 2018-01-17</td>
                                            <td>Ireti</td>
                                            <td>Approved</td>
                                        </tr>
                                        <tr>
                                            <td>Sick Leave</td>
                                            <td>2</td>
                                            <td>From 2018-02-10 to 2018-02-12</td>
                                            <td>Ireti</td>
                                            <td>Approved</td>
                                        </tr>
                                        <tr>
                                            <td>Paternity leave</td>
                                            <td>14</td>
                                            <td>From 2018-02-15 to 2018-03-01</td>
                                            <td>Ireti</td>
                                            <td>Approved</td>
                                        </tr>
                                        
                                        </table>
                         
        
                       
                       <hr></hr>
                       <footer>copyright @ 2019 All right reserved</footer>
                        </Col>
                        </Row>
                    </div>
        )
    }

} 