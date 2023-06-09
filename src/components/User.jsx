import React from 'react'

 const User = ({
    data
 }) => {



  return (
    <div>

<h1>
    User Component
</h1>
<button   onClick={data}>
    Click Me
</button>

    </div>
  )
}


export default User;