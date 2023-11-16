import React from "react"
import {CustomerReviews, Footer, Hero, 
  PopularProducts, Services, SpecialOffer, 
  Subscribe, SuperQuality} from "./sections"

import Nav from "./components/Nav"
import HomeBanner from "./sections/HomeBanner"
import HomeBanner2 from "./sections/HomeBanner2"

// import HomeBanner from "./sections/HomeBanner"


const App = () => {


  return (
    <main className="relative">
      <Nav />

      {/* <section className="xl-padding-5 padding-b pt-24">
        <HomeBanner/>
      </section> */}

      <section className=" padding-b pt-24">
        <HomeBanner2/>
      </section>

      <section className="xl-padding-5 padding-b">
        <Hero/>
        </section>

      <section className="padding">
        <PopularProducts/>
      </section>

      <section className="padding">
        <SuperQuality/>
      </section>

      <section className="padding-x p-y-10">
        <Services/>
      </section>

      <section className="padding">
        <SpecialOffer/>
      </section>

      <section className="bg-pale-blue padding">
        <CustomerReviews/>
      </section>

      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>

      <section className="bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>


    </main>
  )
}

export default App
