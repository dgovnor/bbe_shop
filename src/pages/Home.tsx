import React from 'react'
import { Footer } from '../components/Footer'
import { Form } from '../components/Form'

export const Home = () => {
  return (
    <main className="mx-28">
      <div className="flex content-center justify-center">
        <h1
          className=" w-96 mt-40 text-center text-6xl font-bold"
          style={{ lineHeight: '72px' }}
        >
          Grow above and beyond
        </h1>
      </div>
      <div className="flex content-center justify-center">
        <h1
          className="capitalize w-80 text-left text-lg mt-5"
          style={{ lineHeight: '24px' }}
        >
          one platform to manage records, pay , Access grants, and run your
          business.
        </h1>
      </div>
      <div className=" mt-28">
        <img src={'/Collage.jpg'} alt="homePicture" />
      </div>

      <h3 className="text-lg mt-24 font-bold uppercase ">
        financials for businesses small & large
      </h3>
      <h1
        className="text-6xl font-bold lowercase mt-3"
        style={{ color: '#2B2929' }}
      >
        freedom begins here!
      </h1>
      <div className="flex content-center justify-center mt-5">
        <img src={'/people.jpg'} alt="people" />
      </div>
      <h1
        className=" text-4xl text-center mx-auto mt-9"
        style={{ lineHeight: '41px', width: '32.438rem' }}
      >
        Be amongst the first to get the news when we Launch! 🎉
      </h1>
      <Form />
      <Footer />
    </main>
  )
}
