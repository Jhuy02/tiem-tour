/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogContent from '@/app/(main)/news/[slug]/news-content'
import RelatedNewsList from '@/app/_components/related-news'
import fetchData from '@/fetches/fetchData'

export async function generateStaticParams() {
  const posts = await fetchData({
    api: 'api/v1/slugs?post_type=post',
  })

  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{slug: string}>
}) {
  const {slug} = await params
  const [detailBlog, relatedBlog] = await Promise.all([
    fetchData({
      api: `api/v1/blog-detail/${slug}`,
      method: 'GET',
    }),
    fetchData({
      api: `api/v1/related-blogs/${slug}?limit=10`,
      method: 'GET',
    }),
  ])
  return (
    <main className="relative pb-0 sm:pb-[12rem] bg-center bg-no-repeat bg-cover bg-fixed bg-[url('/images/background-page-mobile.webp')] sm:bg-[url('/images/background-page-pc.webp')]">
      <BlogContent data={detailBlog.data} />
      <RelatedNewsList data={relatedBlog.data} />
    </main>
  )
}
