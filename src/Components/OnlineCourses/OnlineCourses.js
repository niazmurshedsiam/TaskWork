import React from 'react';
import image1 from '../../image/image1.jpg';
import image2 from '../../image/image2.jpg';
import image3 from '../../image/image3.jpg';
const OnlineCourses = () => {
    return (
        <div style={{padding:'5px'}}>
          <h5 style={{fontWeight:'bold',marginTop:'5px'}}>Online Courses</h5>
            <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={image1} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Jone smith</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ea!</p>
        <button type="button" class="btn btn-outline-secondary" style={{marginLeft:'150px'}}>Join</button>
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={image2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Johine Adam</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ea!</p>
        <button type="button" class="btn btn-outline-secondary" style={{marginLeft:'150px'}}>Join</button>
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={image3} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Kyla Hiper</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ea!</p>
        <button type="button" class="btn btn-outline-secondary" style={{marginLeft:'150px'}}>Join</button>
      </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default OnlineCourses;