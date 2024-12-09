// 1 

import { createContext } from "react";
import { useState } from 'react';


export let UserContext=createContext();

// 2 Provider 

export default  function UserContextProvider({children}){
   
    let [userToken,setUserToken]=useState(null);

    return <UserContext.Provider value={{userToken,setUserToken}} >
            {children} 
    </UserContext.Provider>

} 
/*/*                <div className="col-sm-3 ">
                <div className="card ">
                  <img src="./about.jpeg" alt="" className="w-25"/>
                  <div className="card-body ">
                    <img src={ img3} alt="" className='w-75 px-3 pe-4 mb-0'/>
                        <img src={img10} alt="" style={{width:'192px',height:'208px',marginLeft:'45px',marginTop:'-60px'}}/>
                  
                  </div>
                </div>
              </div>
    <div className="container-fluid">
            <ul className="sidebar">
              <li><span class="mb-5">gggggg</span></li>
              <li><span> </span ><span className='ml-2'>Learn</span></li>
              <li><span> </span><span className='ml-5'>TO-DO</span></li>
              <li><span></span><span className='ml-5'>Profile</span></li>
              <li><span><i className="fa fa-bookmark ms-1"></i></span><span className="mb-5 me-5">Support</span></li>
              <div className="mb-3 mt-5 ms-1 py-">
                    <li><span>
                    </span><span>العربية</span></li>   
              </div>
            </ul> 
    </div>  
        <div className='container'>
          <div className="row mb-3 py-3 d-flex ">
              <div className="col-sm-7 me-5">
                  <div className="col-sm-7 d-flex gx-3">
                      <h1 className="mb-1 gx-2 text-light">Hi, Ahmed</h1>
                      <img src={img2} alt="" />
                  </div>
                        <p className='text-light'>Let’s Learn something new today!</p>
              </div>
              <div className="col-sm-4 mt-2 ms-4">
                <form className="form-inline d-flex">
                  <input className="form-control form-control-sm p-2" ype="text" type="search" placeholder="Search"/>
                  <button id="search-button" type="button" className="p-2">
                  </button>
                  
                </form>
              </div>
         </div>
         <div className="card p-5 head">
            <div className="d-flex">
                <div className="lec w-75 ">
                  <h3>Classes <span className='ms-3 text-black' >6</span></h3>
                </div>
                <div className="form-group d-flex ">
                    <option selected className="mt-2 ms-2 ">Sort by :</option>
                      <select className=' ms-2 form-select ms-2'>
                        <option >Recent</option>
                        <option className='bg'>Alphabetical Asc. (A-Z)</option>
                        <option className='bg'>Alphabetical Dec. (Z-A)</option>
                      </select>
                    <option selected className="mt-2 ms-2">Status :</option>
                      <select className="form-select ms-2" id="Default select example">
                        <option value="1" className='bg'>New</option>
                        <option value="2"className='bg'>In progress</option>
                        <option value="3" className='bg'>Completed</option>
                      </select>
                </div>
            </div>
            <div className="row list mt-4 gy-4">
          <div className="col-sm-4 ">
              <div className="card ">
                <img src="./about.jpeg" alt="" className="w-25"/>
                <div className="card-body ">
                <img src={ img3} alt="" className='w-100 px-3 pe-4'/>
                                    <h5 className="card-title mt-3">Card title</h5>
                    <h5 className="card-title">discription</h5>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>                </div>
              </div>
          </div>
          <div className="col-sm-4 ">
              <div className="card ">
                <img src="./about.jpeg" alt="" className="w-25"/>
                <div className="card-body ">
                <img src={ img3} alt="" className='w-100 px-3 pe-4'/>

                    <h5 className="card-title mt-3">Card title</h5>                    
                    <h5 className="card-title">discription</h5>
                    <div class="progress">
                       <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>                </div>
              </div>
          </div>
          <div className="col-sm-4 ">
              <div className="card ">
                <img src="./about.jpeg" alt="" className="w-25"/>
                <div className="card-body ">
                <img src={ img3} alt="" className='w-100 px-3 pe-4'/>
                    <h5 className="card-title mt-3">Card title</h5>
                    <h5 className="card-title">discription</h5>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>                </div>
              </div>
          </div>

          <div className="col-sm-4 ">
              <div className="card ">
                <img src="./about.jpeg" alt="" className="w-25"/>
                <div className="card-body ">
                <img src={ img3} alt="" className='w-100 px-3 pe-4'/>
                    <h5 className="card-title mt-3">Card title</h5>
                    <h5 className="card-title">discription</h5>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>                </div>
              </div>
          </div>
          <div className="col-sm-4 ">
              <div className="card ">
                <img src="./about.jpeg" alt="" className="w-25"/>
                <div className="card-body ">
                <img src={ img3} alt="" className='w-100 px-3 pe-4'/>
                    <h5 className="card-title mt-3">Card title</h5>
                    <h5 className="card-title">discription</h5>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>                </div>
              </div>
          </div>
          <div className="col-sm-4 ">
              <div className="card ">
                <img src="./about.jpeg" alt="" className="w-25"/>
                <div className="card-body ">
                <img src={ img3} alt="" className='w-100 px-3 pe-4'/>
                    <h5 className="card-title mt-3">Card title</h5>
                    <h5 className="card-title">discription</h5>
                    <div class="progress">
                       <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>                </div>
              </div>
          </div>
      </div>
          </div>

         
    </div>


        </>
              <div className="container-fluid">
            <ul className="sidebar">
          <li><span class="mb-5"></span></li>
          <li><span> </span ><span className='ml-2'>Learn</span></li>
          <li><span> </span><span className='ml-5'>TO-DO</span></li>
          <li><span></span><span className='ml-5'>Profile</span></li>
          <li><span><i className="fa fa-bookmark ms-1"></i></span><span className="mb-5 me-5">Support</span></li>
          <div className="mb-3 mt-5 ms-1 py-">
                <li><span>
                </span><span>العربية</span></li>   
          </div>
        </ul>     
        <div className="con ">
              <div className ="container">

                 

          </div>
              </div>
          </div>
      </div>
    </div>
</div>  
        */




