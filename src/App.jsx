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
    <main className="relative object-cover">
      <Nav />

      <section className="px-10 pt-24 max-mob:hidden">
        <HomeBanner/>
      </section>

      <section className="px-10 pt-24 mob:hidden">
        <HomeBanner2/>
      </section>

      <section className="xl-padding-5 padding-b pt-24" >
        <PopularProducts/>
      </section>

      <section className="xl-padding-5 padding-b ">
        <Hero/>
        </section>

      {/* <section className="padding">
        <SuperQuality/>
      </section> */}

      <section className="xl-padding-5  padding-x p-y-10">
        <Services/>
      </section>

      <section className="xl-padding-5 mt-20  padding-x p-y-10">
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
