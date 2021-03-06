import React,{useState} from 'react'
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Popup from '../Components/popup'
import Popup1 from '../Components/popuplogin'
import Axios from 'axios';

const ReachOut = () => {
  const [resmsg,setResMsg]=useState("");
  const [reachData,setReachData] = useState({
    rname:'',
    remail: '',
    rcomments: '',
    
})

let name,value;
const postReachData = (e) => {
      name = e.target.name;
      value = e.target.value;
      setReachData({...reachData,[name]:value})
}

//function to submit form details in backend
const handleReachOut = (e) => {
  e.preventDefault()
  const {rname,remail,rcomments} = reachData
  Axios.post('',
  {
    "email":remail,
    "name": rname,
    "message": rcomments
   }).then((response)=>
   {
     setResMsg(response.data.message);
  })

}
    return (
        <>
        <Popup />
        <Popup1 />
        <Header /> 

        
        <div className="container w-50 my-5" style={{boxShadow:'0 5px 8px 0 rgba(0,0,0,0.6)'}}>
            
        <div className="container mt-3 py-3" align="center">
          <h5>Reach Out to Us!! We are always there for you</h5>
        </div>
            <form>
        
        
        <fieldset className="row mb-3">
          
          <div className="col-12 col-lg-6">
          <div className="row mb-3">
          <label htmlFor="inputEmail3" 
          
          name="rname"
                        
          className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
             <input type="text" className="form-control" id="inputEmail3" 
                       name="rname"
                       value={reachData.rname}
                       onChange={postReachData}/>
          </div>
          
        </div>
            
          </div>
          <div className="col-12 col-lg-6">
          <div className="row mb-3">
          <label htmlFor="inputEmail3" 
           name="remail"
          //  value={reachData.remail}
          //  onChange={postReachData}
          className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3"
            name="remail"
            value={reachData.remail}
            onChange={postReachData} />
          </div>
        </div>
            
          </div>
        </fieldset>
        <div className="form-floating">
        <textarea className="form-control" 
         name="rcomments"
         value={reachData.rcomments}
         onChange={postReachData}
        placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}} defaultValue={""} />
        <label htmlFor="floatingTextarea2">Your Comments/Message</label>
      </div>
      <div className="container"  align="right" >
        <button type="submit"className="btn btn-primary my-2"
        onClick={(e)=>handleReachOut}
        
        >Submit</button>

      </div>
      </form>
        </div>
        <Footer/>
        </>
    )
}

export default ReachOut
