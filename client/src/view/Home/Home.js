import React from 'react'
import './Home.css'
function Home() {



  return (
    <div>
      <div className='row'>
        <div className='col-md-12'>
          <div className='Heading'>Online Addmission System</div>
        </div>
      </div>
      <div className='row'>
        <div className='form-container'>
        <span>Personal Details :</span> <br/>
          <div className='row'>
            <div className='col-md-4 '>
              <label for="Name" className=''>First Name: &nbsp;</label>
              <input type="text" required placeholder="First Name" className='FirstName' />
              <span id='warning'></span>
            </div>
            <div className='col-md-4'>
              <label for="Name">Middle Name :&nbsp;</label>
              <input type="text" required placeholder="Middle Name" className='FirstName' />
            </div>
            <div className='col-md-4'>
              <label for="Name">Last Name :&nbsp;</label>
              <input type="text" required placeholder="Last Name" className='FirstName' />
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-md-4'>
              <label for="Phone Number">Phone Number :&nbsp;</label>
              <input type='text' id='Phone Number' placeholder='Mo.No' className='FirstName'/>
            </div>
            <div className='col-md-4'>

            </div>
            <div className='col-md-4'>
              <label for="OTP">OTP :&nbsp;</label>
              <input type='text' id='OTP' placeholder='OTP' disabled className='otp'/>
            </div>
          </div>
          <div className='row mt-4'>
          
            <div className='col-md-4 mt-3' >
            <label for="address">Permenant Address :&nbsp;</label>
            <input type='text' id='address' placeholder='Address' />
            </div>
            <br />
            <div className='col-md-4'>
            <input type='checkbox' /> Is Current Address Is Same As Permanent Address?
            </div>
            
            <div className='col-md-4' >
            <label for="address">Current Address :&nbsp;</label>
            <input type='text' id='address' placeholder='Address' />
            </div>
          </div>
          <div>
            <button >Submit</button>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Home