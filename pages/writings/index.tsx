import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import HeroPost from '../../components/hero-post'
import IntroWritings from '../../components/intro-writings'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import { getAllPostsForWritings } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'

export default function Index({ AllPostsWriting: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Aris Setyawan Personal Blog - ${CMS_NAME}`}</title>
      </Head> 
      <Container>        
        <Intro />
        <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Writings
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
        {morePosts.length > 0 && <IntroWritings posts={morePosts} />}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const AllPostsWriting = await getAllPostsForWritings(preview)

  return {
    props: { AllPostsWriting, preview },
    revalidate: 10,
  }
}
