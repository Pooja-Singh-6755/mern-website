

const Contact=()=>{
    return(
        <>
 <div className="grid-container">
  <div className="item1"> 
 <div> <h5>phone</h5> <h4>123456789</h4></div>
 <div><h5>email</h5> <h4>poojasingh@gmail</h4></div>
 <div><h5>address</h5> <h4>j.k circle</h4></div>
  
  </div>
 
  <div className="item2">
  <input type="text" placeholder="your name" />
  <input type="email" placeholder="your email"  />
  <input type="number" placeholder="your address" />

    <textarea rows={5} cols={30} >Massage</textarea>
  </div>
 
  <div className="item3">
    <input type="submit"/>
  </div>  
 
</div>
        </>
    )
}

export default Contact;