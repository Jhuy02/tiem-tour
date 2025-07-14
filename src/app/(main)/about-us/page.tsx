import AboutUs from '@/app/(main)/about-us/_components/about-us'
import OurMission from '@/app/(main)/about-us/_components/our-mission'
import OurTeam from '@/app/(main)/about-us/_components/our-team'
import BannerV2 from '@/app/_components/banner-v2'
import fetchData from '@/fetches/fetchData'
import {AboutUsPageACFDataResponse} from '@/types/about-us.interface'
import React from 'react'

export default async function AboutUsPage() {
  const [aboutUsPageACFDataResponse]: [AboutUsPageACFDataResponse] =
    await Promise.all([
      fetchData({api: `wp/v2/pages/21?_fields=acf&acf_format=standard`}),
    ])
  console.log(aboutUsPageACFDataResponse)
  return (
    <main className='xsm:pb-[4.87rem] relative overflow-hidden bg-[#F9F4EB] bg-[url("/common/common-background-pc.webp")] bg-cover bg-center bg-no-repeat pb-[12rem]'>
      <BannerV2 data={aboutUsPageACFDataResponse?.acf?.compound_banner} />
      <AboutUs data={aboutUsPageACFDataResponse?.acf?.about_content} />
      <OurMission data={aboutUsPageACFDataResponse?.acf?.our_mission} />
      <OurTeam data={aboutUsPageACFDataResponse?.acf?.meet_our_team} />
    </main>
  )
}
