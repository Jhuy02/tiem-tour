import {ILink} from '@/types/link.interface'
import {IMedia} from '@/types/media.interface'

export interface BannerImage {
  image_pc: IMedia
  image_mobile: IMedia
}
export interface AboutUsBanner {
  title: string
  banner_image: BannerImage[]
}

export interface AboutUsContent {
  title: string
  image: IMedia
  first_desc: string
  second_desc: string
  third_desc: string
}
export interface OurMission {
  title: string
  desc: string
  sub_title: string
  image: IMedia
  second_desc: string
  second_image: IMedia
}
export interface MeetOurTeamItem {
  image: IMedia
  name: string
  position: string
}
export interface MeetOurTeam {
  title: string
  desc: string
  button_link: ILink
  team: MeetOurTeamItem[]
}
export interface AboutUsPageACFDataResponse {
  acf: {
    compound_banner: AboutUsBanner
    about_content: AboutUsContent
    our_mission: OurMission
    meet_our_team: MeetOurTeam
  }
}
