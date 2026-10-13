import './index.css'

export default function App() {
  return (
    <div>
    <img
    src="https://imgs.search.brave.com/MEH_vctW0U8xm8A1SfzAp4mUI0kFy5grlixHOcqJlEo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tdmVj/dG9yL3BoeXNpY3Mt/Zm9ybXVsYXMtZGlh/Z3JhbXMtY2hhbGti/b2FyZF8xNDY3MDYt/Mzc0NC5qcGc_Z2E9/R0ExLjEuMTc4ODE1/MDUwNC4xNzkwNzYz/Njg4JnNlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MCZxPTgw"
    style = {{
      width: "200px",
      height: "200px",
      borderRadius: "100px",
      display: "block",
      margin: "0 auto"
    }}

    alt="Physics"
    />

    <h1 style={{ textAlign: "center", color:"blue" }}> Physics </h1>
    
     <h2 style={{ textAlign: "center" }}>What is Physics?</h2>
     
     
     <p style = {{ textAlign: "center" }} >Physics is the study of matter, energy, motion, forces, space, and time, and how they interact. </p>
    

    <div className="physics-layout">
      <PhysicsApplications />
      <PhysicFields />
    </div>

    <Details />
    


    </div>

    
  );
  
}   

function PhysicsApplications() {
  return(
    <div className="physicsapplication">
      <h3 style = {{ color: "green" }} > Applications of Physics: </h3>
      <ol>
        <li> Engineering. The most obvious one, Physics is used in brides, machines, buildings, and increasingly robotics </li>
        <li> Physics is used in Telecommunications -- Wifi, radio, satellites </li>
        <li> Transportaion -- Cars, Aircrafts, ships </li>
        <li> Construction -- Forces, heat and materials </li>
        <li> Manufacturing -- Materials, mechanica, heat, electricity </li>
      </ol>
    </div>
  );

}

function PhysicFields() {
  return (
    <div className = "physicsfields">
       <h2> Fields in Physics: </h2>
        <ol>
          <li> Mechanics -- motion, forces, and energy </li>
          <li> Thermodynamics -- heat, temperature and energy transfer </li>
          <li> Optics -- light, lenses and mirrors </li>
          <li> Acoustics -- sound and vibrations </li>
          <li> Biophysic -- Physics in Biological systems </li>
        </ol>
      </div>
  );  
   
}


function Details() {
  return (
    <div style={{ textAlign: "center" }}>
      <p>You can learn more at:</p>
      <a href="https://www.khanacademy.org/science/physics">
            Khan Academy
      </a>
    </div>
  );
}
