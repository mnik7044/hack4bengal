// import { getAuth } from 'firebase/auth'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// export default function Profile() {
//   const auth = getAuth()
//   const navigate = useNavigate()
//   const [formData, setFormData] = useState({
//     name: auth.currentUser.displayName,
//     email: auth.currentUser.email,
//   });
//   const {name, email} = formData;
//   function onLogout (){
//     auth.signOut()
//     navigate("../")
//   }
//   return (
//     <>
//       <section>
//         <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>
//         <div>
//           <form>
//             {/* {Name imput} */}

//             <input type="text" id="name" value={name} disabled/>

//             {/* Email Input */}

//             <input type="email" id="email" value={email} disabled/>

//             <div>
//               <p onClick={onLogout}>Sign out</p>
//             </div>

//           </form>
//         </div>
//       </section>
//     </>
//   )
// }


import { getAuth } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    if (auth.currentUser) {
      setFormData({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
      });
    }
  }, [auth.currentUser]);

  const { name, email } = formData;

  function onLogout() {
    auth.signOut();
    navigate('../');
  }

  return (
    <>
      <section>
        <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>
        <div>
          <form>
            {/* Name input */}
            <input type="text" id="name" value={name} disabled />

            {/* Email Input */}
            <input type="email" id="email" value={email} disabled />

            <div>
              <button onClick={onLogout}>Sign out</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
