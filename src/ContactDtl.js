import React from 'react'

function ContactDtl() {
  return (
    <div>
        <h1 className='cnt'>My Contact Details</h1>
        <form className='dtl'>
            <div className='secdiv'>
            <label>
                Name:
            </label>
            <input type='text'></input><br></br>
            <label>
                Class:
            </label>
            <input type='text'></input><br></br>
            <label>
                Enrollment No.:
            </label>
            <input type='text'></input><br></br>
            <label>
                Father's Name:
            </label>
            <input type='text'></input><br></br>
            <label>
                Mother's Name:
            </label>
            <input type='text'></input><br></br>
            </div>
            <div className='secdiv'>
            <label>
                Phone Number:
            </label>
            <input type='text'></input><br></br>
            <label>
                College Name:
            </label>
            <input type='text'></input><br></br>
            <label>
                University Name:
            </label>
            <input type='text'></input><br></br>
            <label>
                Address:
            </label>
            <input type='text'></input><br></br>
            <label>Email</label>
            <input type="email"></input><br></br>
            <button >Submit</button>
            </div>
        </form>
    </div>
  )
}

export default ContactDtl