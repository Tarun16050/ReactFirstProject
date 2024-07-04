import React from 'react'

function Success(probs) {
  return (
    <div className="alert alert-success m-5">
        <strong>Success!</strong> {probs.massage}.
    </div>
  )
}

export default Success;
