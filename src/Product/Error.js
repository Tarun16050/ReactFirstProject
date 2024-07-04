import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function Error(probs) {
    
  return (
    <div className="alert alert-danger m-5">
        <strong>Error!</strong> {probs.massage}.
    </div>
  )
}

export default Error;
