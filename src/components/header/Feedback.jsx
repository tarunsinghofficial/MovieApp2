import React, {useState} from 'react'
import './Feedback.css';

export const Feedback = () => {
        const [userData, setUserData] = useState({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
      
        let name, value;
        const postUserData = (event) => {
          name = event.target.name;
          value = event.target.value;
      
          setUserData({ ...userData, [name]: value });
        };
      
        // connect with firebase
        const submitData = async (event) => {
          event.preventDefault();
          const { firstName, lastName, phone, email, message } = userData;
      
          if (firstName && lastName && phone && email && message) {
            const res = fetch(
              "https://musicz-6ad0d-default-rtdb.firebaseio.com/userDataRecords.json",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  firstName,
                  lastName,
                  phone,
                  email,
                  message,
                }),
              }
            );
      
            if (res) {
              setUserData({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                message: "",
              });
              alert("Your message has been sent!");
            } else {
              alert("Please fill all data");
            }
          } else {
            alert("Please fill all data");
          }
        };

    return (

        <div className='feedback'>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Have a Query!
                  </h1>
                  <p className="main-hero-para">
                      Write us a message.
                  </p>
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="phone"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="email"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row mt-4">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          value={userData.message}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-style w-20 mt-4"
                      onClick={submitData}>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}