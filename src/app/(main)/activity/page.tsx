import BannerV2 from '@/app/_components/banner-v2'
import fetchData from '@/fetches/fetchData'
import ActivityExplore from '@/app/(main)/activity/_components/ActivityExplore'
import ActivityMedia from '@/app/(main)/activity/_components/ActivityMedia'
import Content1 from '@/app/(main)/activity/_components/Content1'
import Content2 from '@/app/(main)/activity/_components/Content2'
import Content3 from '@/app/(main)/activity/_components/Content3'
import Content4 from '@/app/(main)/activity/_components/Content4'
import Content5 from '@/app/(main)/activity/_components/Content5'
import CulinaryExperience1 from '@/app/(main)/activity/_components/CulinaryExperience1'
import CulinaryExperience2 from '@/app/(main)/activity/_components/CulinaryExperience2'
import './assets/styles.css'
import RestConserve from '@/app/(main)/activity/_components/RestConserve'

export default async function ActivityPage() {
  const [acfRes] = await Promise.all([
    fetchData({
      api: `wp/v2/pages/23?_fields=acf&acf_format=standard`,
    }),
  ])

  return (
    <main className="xsm:pb-[5rem] bg-[#F9F4EB] bg-[url('/common/common-background-pc.webp')] bg-auto bg-center bg-repeat pb-[12rem]">
      <BannerV2
        data={acfRes?.acf?.compound_banner}
        variant='primary'
      />
      <ActivityExplore data={acfRes?.acf?.activity_explore} />
      <ActivityMedia data={acfRes?.acf?.activity_media} />
      <Content1 data={acfRes?.acf?.['1st_content']} />
      <Content2 data={acfRes?.acf?.['2nd_content']} />
      <Content3 data={acfRes?.acf?.['3rd_content']} />
      <Content4 data={acfRes?.acf?.['4th_content']} />
      <Content5 data={acfRes?.acf?.['5th_content']} />
      <CulinaryExperience1 data={acfRes?.acf?.culinary_experience_1} />
      <CulinaryExperience2 data={acfRes?.acf?.culinary_experience_2} />
      <RestConserve data={acfRes?.acf?.rest_conserve} />
    </main>
  )
}
