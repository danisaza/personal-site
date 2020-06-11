import { Link } from 'gatsby'
import React from 'react'
import Footer from '../components/footer'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <>
    <Layout>
      <SEO
        title="Home"
        keywords={[`dan isaza`, `engineering`, `devops`, `leadership`]}
      />
      <p>Hi there! I'm Dan. 👋🏽</p>
      <p>I'm a bisexual Colombian American software engineer. 🏳️‍🌈🇨🇴💻</p>
      <p>
        I write full-stack software for the web. I like math, statistics, and
        devops.
      </p>
      <p>
        I'm currently the VP of Engineering at{' '}
        <a href="https://listwithclever.com/" target="_blank" rel="noopener">
          Clever Real Estate
        </a>
        . I studied Math & CS at Stanford.
      </p>
      <p>
        For more about my professional background, check me out on{' '}
        <a
          href="https://www.linkedin.com/in/danisaza/"
          target="_blank"
          rel="noopener"
        >
          LinkedIn
        </a>
        .
      </p>
      <br />
      <h3>Stuff to do here</h3>
      <p>
        For now, you can keep up with <Link to="/reading">my reading list</Link>{' '}
        and <Link to="/podcasts">podcast recommendations</Link>.
      </p>
      <p>Eventually, I may publish stuff here.</p>
      <p>
        Until then, check out this{' '}
        <a
          href="https://github.com/PlotterClub/penplotPlayground"
          target="_blank"
          rel="noopener"
        >
          open-source code
        </a>{' '}
        I wrote for plotter robots!
      </p>
    </Layout>
    <Footer />
  </>
)

export default IndexPage
