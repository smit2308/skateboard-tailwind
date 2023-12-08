import React from "react"
import {CustomerReviews, Footer, Hero, 
  PopularProducts, Services, SpecialOffer, 
  Subscribe, SuperQuality} from "../../sections"

import Nav from "../../components/Nav"
import HomeBanner from "../../sections/HomeBanner"
import HomeBanner2 from "../../sections/HomeBanner2"

// import HomeBanner from "./sections/HomeBanner"


const Home = () => {


  return (
    
    <main 
      className="relative object-cover pt-24">
 

      <section className="px-10  max-mob:hidden ">
        <HomeBanner/>
      </section>

      <section className="px-10  mob:hidden">
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

      <section className="xl-padding-5  padding-x ">
        <Services/>
      </section>

      <section className="xl-padding-5 mt-20  padding-x ">
        <SpecialOffer/>
      </section>

      <section className="xl-padding-5 mt-20  padding-x z-10 ">
        <CustomerReviews/>
      </section>

      <section className="padding-x sm:py-32 py-16 w-full z-10">
        <Subscribe/>
      </section>

      <section className="bg-gray-900 padding-x pt-[800px] pb-8 z-0 -mt-[800px] -mb-1  " >
        
      </section>


    </main>
  )
}

export default Home
