import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
export default function Home() {
  const [auth, setAuth] = useState(false)
  const googleLogin = () => {
    let googleAuth = window.localStorage.getItem("auth")
    if (googleAuth) {
      setAuth(true)
    }
  }
  const uploadToDocs = () => {
    console.log("Hello :)")
  }

  return (
    <div className={styles.container}>
      {auth ? (
        <button className={styles.btn1} onClick={uploadToDocs}>
          upload to Google Docs
        </button>
      ) : (
        <button className={styles.btn1} onClick={googleLogin}>
          Google SignIn
        </button>
      )
      }


    </div>
  )
}
