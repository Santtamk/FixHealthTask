import { useEffect, useState } from 'react'
import axios from 'axios'
import './Form.css'


const Form = () => {
    const [ageCheck, setAgeCheck] = useState(false)
    const [data, setData] = useState(null)
    const [doctors, setDoctors] = useState([]);

    const ageCheckFunction = (e) => {
        let formAge = parseInt(e.target.value, 10)
        if(formAge < 40){
            setAgeCheck(true)
        }else{
            setAgeCheck(false)
        }
    }

    //api call using axios, it is a demo data creating using my-json-server.typicode.com
    useEffect(() => {
      const fetchData = async() => {
        try {
          const urlParams = new URLSearchParams(window.location.search);
        const cityParam = urlParams.get('city');

        let apiUrl = 'https://my-json-server.typicode.com/santtamk/my-json-server/db';

        if (cityParam) {
          apiUrl += `?city=${cityParam}`;
        }

        const response = await axios.get(apiUrl);
        setData(response.data);
        console.log('fetchData:', response.data);
        }catch(err){
          console.error('Issue fetching data check your github repo:', err)
        }
      }
      fetchData();
    }, [])
    
    const getDoctor = (e) => {
      let locations = e.target.value.toLowerCase().trim();
      const matchingDoctor = data.doctors.filter(doctor => doctor.location.toLowerCase() === locations)
        setDoctors(matchingDoctor);

        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('city', locations);
        window.history.replaceState({}, '', `${window.location.pathname}?${urlParams.toString()}`);
      }
    
      function handleSubmit() {
        // event.preventDefault(); // prevent the form from submitting
        alert("The form was submitted, we will get back to you at the earliest.");
      }

  return (  
    <>
    
<div className="form" >
      <h3 className='form_header'>Request an Appointment</h3>
      <form className="row g-3 form_start"onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label form_name">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            placeholder="Your fullName"
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Phone Number</label>
          <input
            type="tle"
            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            className="form-control"
            name="phone"
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="col-md-1">
          <label className="form-label">Age</label>
          <div className="input-group">
            <input
              type="number"
              className="form-control"
              aria-describedby="inputGroupPrepend2"
              placeholder="Your current age"
              onChange={ageCheckFunction}
              required
            />
          </div>
        </div>
        <div className="col-md-4">
          <label className="form-label">City</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="validationDefaultUsername"
              aria-describedby="inputGroupPrepend2"
              placeholder="Your current location"
              onChange={getDoctor}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
        {doctors.length > 0 ? (
                <>
                  <label>Choose a Doctor</label>
                    <select>
                    {doctors.map((doctor) => (
                      <option key={doctor.id}>
                        {doctor.name}, {doctor.qualifications}
                      </option>
                    ))}
                  </select>
                </>
              )
          : (
              <>
                <p>*Please Submit the form and we will get you connected with an available doctor.</p>
              </>
            )}
        </div>
        <div className="col-md-6">
          <label className="form-label">Company</label>
          <input
            type="text"
            className="form-control"
            placeholder="Company"
            required
          />
        </div>
        <div className="col-md-12">
          <label className="form-label">Chief complaints</label>
          <textarea
            className="form-control"
            id="validationTextarea"
            placeholder="Chief complaints"
            required
          ></textarea>
        </div>
        {!ageCheck ? <div className="col-md-12 form_start_experience">
          <label className="form-label">
            Any previous experience with physiotherapy
          </label>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label>Yes</label>
          <input type="radio" id="css" name="fav_language" value="CSS" />
          <label>No</label>
        </div> : null}
        <div className="col-12">
          <button className="btn btn-info" type="submit">
            Submit form
          </button>
        </div>
      </form>
      </div>
      </>
)
}

export default Form


