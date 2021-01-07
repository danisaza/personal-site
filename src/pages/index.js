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
      <div className="max-w-xl">
        <p>
          Hi there! I'm Dan.{' '}
          <span role="img" aria-label="waving hand skin tone 4">
            👋🏽
          </span>
        </p>
        <p>
          I'm an engineering leader who writes full-stack software for the web.
        </p>
        <p>
          I like reading, skiing, and noodling on my modular synthesizer.{' '}
          <span role="img" aria-label="smile">
            😄
          </span>
        </p>
        <p>
          I'm currently a software engineer in the biotech space and before that
          I was the VP of Engineering at{' '}
          <a
            href="https://listwithclever.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clever Real Estate
          </a>
          . I studied Math & CS at Stanford.
        </p>
        <p>
          I'm the proud bisexual son of Colombian immigrants.{' '}
          <span role="img" aria-label="pride flag">
            🏳️‍🌈
          </span>{' '}
          <span role="img" aria-label="Colombian flag">
            🇨🇴
          </span>
        </p>
        <br />
        <h3>Let's level up together!</h3>
        <p>
          I'm creating content to help current and aspiring software engineers
          level up their careers.
        </p>
        <p>
          You can check out my writing over at{' '}
          <a
            href="https://www.danisaza.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            danisaza.com
          </a>
          .
        </p>
        <p>
          I also record a podcast with my buddy Robbe Simon. It's called{' '}
          <a
            href="https://anchor.fm/decoders"
            target="_blank"
            rel="noopener noreferrer"
          >
            The (De)Coders
          </a>
          .
        </p>
      </div>
    </Layout>
    <Footer />
  </>
)

export default IndexPage
