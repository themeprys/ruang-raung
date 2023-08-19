import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import HeroPost from '../../components/hero-post'
import IntroVideo from '../../components/intro-video'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import { getAllPostsForVideo } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Aris Setawan Personal Blog - ${CMS_NAME}`}</title>
      </Head>
      <Container>
        <Intro />
        <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Video
      </h2>        
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}                 
        {morePosts.length > 0 && <IntroVideo posts={morePosts} />}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForVideo(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
