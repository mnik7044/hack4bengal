import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

export function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true)
        navigate("../Profile")
      }
      setCheckingStatus(false)
    })
  }, [navigate]) // Add `navigate` to the dependency array

  return { loggedIn, checkingStatus };
}
