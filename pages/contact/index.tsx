import Head from 'next/head'
import Container from '../../components/container'
import Intro from '../../components/intro'
import Layout from '../../components/layout'
import { CMS_NAME } from '../../lib/constants'

export default function Index({ preview }) {

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Aris Setawan Personal Blog - ${CMS_NAME}`}</title>
      </Head>
      <Container>
        <Intro />
        <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Contact
      </h2>
      </Container>
    </Layout>
  )
}

