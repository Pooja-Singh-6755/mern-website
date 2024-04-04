import poojapic from "../image/poojapic.jpg"

const About=()=>{
    return(
        <>
 <div className="container-about">
 <form method="">
    <div className="row">
    <div className="col-1">
    <img src={poojapic} alt='registration pic'height={"100%"} width={"100%"}/>
    </div>
    <div className="col-2">
        <div className="profile">
            <h3>pooja singh</h3>
            <h4>web developer</h4>
            <p>Rating : 1/10</p>


            <ul className="nav"  role="tablist">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" data-toggle="tab"  href="#home" role="tab">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#profile" data-toggle="tab" role="tab">TimeLine</a>
  </li>

</ul>
        </div>
    </div>
    <div className="col-3">
        <input type="submit" className="profile-edit"  name="btnAddMore"    value="edit profile" />
    </div>

    </div>
<div className="row-2">
<div className="left-side">
<div className="profile-work">
<p>
            work link
        </p>
        <a href="https://getbootstrap.com/docs/5.0/components/navs-tabs/" target="_thapa">you tube</a>
        <a href="https://getbootstrap.com/docs/5.0/components/navs-tabs/" target="_thapa">instragram</a>
        <a href="https://getbootstrap.com/docs/5.0/components/navs-tabs/" target="_thapa">facebook</a>
        <a href="https://getbootstrap.com/docs/5.0/components/navs-tabs/" target="_thapa">figma</a>
        <a href="https://getbootstrap.com/docs/5.0/components/navs-tabs/" target="_thapa">website</a>
</div>
</div>
<div className="right-side">
<div className="profile-tab" id="mytabcontent">
<div className="tab-pane fade active" id="home" role="tabplane">
<div className="right-profile-tab active">
<div className="right-col-detail">
<label >user ID</label>    
</div>
<div className="right-col-detail">
<p>12345677</p>   
</div>
<div className="right-col-detail">
<label>name</label>    
</div>
<div className="right-col-detail">
<p>pooja singh</p>   
</div>
<div className="right-col-detail">
<label>phone number</label>    
</div>
<div className="right-col-detail">
<p>1234567790</p>   
</div>
<div className="right-col-detail">
<label>address</label>    
</div>
<div className="right-col-detail">
<p>rajasthan</p>   
</div>

</div>

</div>

</div>
   
       
    
</div>


</div>




 </form>

 </div>
        </>
    )
}

export default About;