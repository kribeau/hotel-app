import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="豪华房间" subtitle="豪华房间￥299起">
          <Link to="/rooms" className="btn-primary">
            了解更多
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  )
}
