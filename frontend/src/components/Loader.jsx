/* import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <>
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
      }}
    ></Spinner>
    
    </>
  );
};

export default Loader; */
// importing spinner from library
import Spinner from 'react-spinner-material';


// render spinner 
export default function Loader() {

  return (
    // styling the spinner
      <div style={{textAlign:"center",
                    display:"flex", 
                    justifyContent:"space-around",
                    flexDirection:"column",
                    alignItems:"center",
                    marginTop:"15%",
                    zIndex:"999"}}>
        <div>
          {/* show spinner */}
          <Spinner radius={80} color={"blue"} stroke={2} visible={true} />
          {/* show message below the spinner */}
          <h4>Loading..</h4>
        </div>
      </div>
    )
}