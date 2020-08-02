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
      <p>Hi there! I'm Dan. <span role="img" aria-label="waving hand skin tone 4">👋🏽</span></p>
      <p>
        I'm an engineering leader who writes full-stack software for the web.
      </p>
      <p>I like reading, skiing, and noodling on my modular synthesizer. <span role="img" aria-label="smile">😄</span></p>
      <p>
        I'm currently the VP of Engineering at{' '}
        <a href="https://listwithclever.com/" target="_blank" rel="noopener noreferrer">
          Clever Real Estate
        </a>
        . I studied Math & CS at Stanford.
      </p>
      <p>I'm the proud bisexual son of Colombian immigrants. <span role="img" aria-label="pride flag">🏳️‍🌈</span> <span role="img" aria-label="Colombian flag">🇨🇴</span></p>
      <br />
      <h3>Stuff to do here</h3>
      <p>
        For now, you can keep up with <Link to="/reading">my reading list</Link>{' '}
        and <Link to="/podcasts">podcast recommendations</Link>.
      </p>
      <p>Eventually, I may publish writings here.</p>
      <p>
        Until then, check out this{' '}
        <a
          href="https://github.com/PlotterClub/penplotPlayground"
          target="_blank"
          rel="noopener noreferrer"
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
