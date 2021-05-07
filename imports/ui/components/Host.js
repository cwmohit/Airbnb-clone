import React,{useState} from 'react';

export default function Host() {
  const [hostValues,setHostValues]=useState({
    file: "",descripton: "", address: "", mobile: ""
  })
  const uploadFile = (e) => {
    setHostValues({...hostValues, file: e.target.value})
  }
  const hostSubmit=(e)=>{
    console.log(hostValues)
  }

  return (
    <div className="mt-5" style={{ minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <form onSubmit={hostSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">Room Image</label>
          <input onChange={(e)=>uploadFile(e)} type="file" className="form-control-file" id="exampleFormControlFile1" />
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <input value={hostValues.descripton} onChange={(e)=>setHostValues({...hostValues, descripton: e.target.value})} type="text" className="form-control" id="description" placeholder="City" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input value={hostValues.address}  onChange={(e)=>setHostValues({...hostValues, address: e.target.value})} type="text" className="form-control" id="address" placeholder="City" />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input value={hostValues.mobile}  type="number" onChange={(e)=>setHostValues({...hostValues, mobile: e.target.value})} className="form-control" id="mobile" placeholder="Mobile Number" />
          </div>
          
          <button type="submit" className="btn btn-primary">Add Request</button>
      </form>

      <p className="text-danger mt-5">Page is Under Development</p>
    </div>
  )
}
