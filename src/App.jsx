import React from "react"
import {Routes, Route} from "react-router-dom"
import {Home} from "./root/pages"
// import SigninForm from "./auth/forms/SigninForm"
// import SignupForm from "./auth/forms/SignupForm"
// import AuthLayout  from "./auth/AuthLayout"
import RootLayout  from "./root/RootLayout"

// import HomeBanner from "./sections/HomeBanner"


const App = () => {


  return (
      <main className="flex h-screen relative object-cover">
        <Routes>


          {/* <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SigninForm />} />
            <Route path="/sign-up" element={<SignupForm />} />
          </Route> */}


  
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>

        </Routes>
      
      </main>
        
  )
}

export default App
