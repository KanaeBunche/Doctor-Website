import React from 'react';
import './homepg.css';

function App() {
  return (
    <div>
    <section id='section 1'>
      <button className="button">
        <p className='login'>Patient Login</p>
      </button>
      <button className="button btnlog">
        <p className='login'>New Patient</p>
      </button>
 
   <h1 className='BC9C22 name'>Dr. <br></br>Aduboufour</h1>
   <a href="/consulation-page" className="consulation">Consulation</a>
  
   <p className='BC9C22 private'>Private Practice</p>
   <p className='BC9C22 orthopedic'>Orthopedic</p>
   </section>
   
    
  
 
   
    </div>
  );
}

export default App;

