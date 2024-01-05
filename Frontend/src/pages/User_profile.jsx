import React from 'react';
import Navbar from '../body/sections/Navbar';
import { useLocation } from 'react-router-dom';


const UserProfile = () => {
  // ----------getting the data from sessional storage----------------

  // const fulldata=sessionStorage.getItem('formData')
  // const alldata=JSON.parse(fulldata)
  // const {fullname,username} = alldata
  

  //--------getting data from database-------------
  const location=useLocation()
  const formData=location.state?.formData
  console.log("User Profile Data",formData);

  return (
    <div>
    <Navbar/>
    <section className="h-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card">
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: 'orange', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  
                   <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt=""
                    className="img-fluid img-thumbnail mt-4 mb-2"
                    style={{ width: '150px', zIndex: 1 }}
                    />
                  {/* <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark" style={{ zIndex: 1 }}>
                    Edit profile
                  </button> */}
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>


                  {/* getting name from sessional storage */}
                  {/* <h5>{fullname} {username}</h5> */}

                  
                  <h5>{formData.fullName} {formData.userName}</h5>

                  
                  {/* <p>New York</p> */}
                </div>
              </div>

              {/* THIS IS FOR THE FOLLWERS AND FOLLOWING SECTION  */}



              {/* <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                <div>
                <p className="mb-1 h5">253</p>
                <p className="small text-muted mb-0">Photos</p>
                </div>
                <div className="px-3">
                <p className="mb-1 h5">1026</p>
                <p className="small text-muted mb-0">Followers</p>
                </div>
                <div>
                <p className="mb-1 h5">478</p>
                <p className="small text-muted mb-0">Following</p>
                  </div>
                </div>
              </div> */}



              <div className="card-body p-4 text-black">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <p className="font-italic mb-1">Web Developer</p>
                    <p className="font-italic mb-1">Lives in New York</p>
                    <p className="font-italic mb-0">Photographer</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <p className="lead fw-normal mb-0">Recent photos</p>
                  <p className="mb-0">
                    <a href="#!" className="text-muted">
                      Show all
                    </a>
                  </p>
                </div>
                <div className="row g-2">
                  <div className="col mb-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp" alt="" className="w-100 rounded-3" />
                  </div>
                  <div className="col mb-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp" alt="" className="w-100 rounded-3" />
                  </div>
                </div>
                <div className="row g-2">
                  <div className="col">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp" alt="" className="w-100 rounded-3" />
                  </div>
                  <div className="col">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp" alt="" className="w-100 rounded-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};

export default UserProfile;
