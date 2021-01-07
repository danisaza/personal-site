import React from 'react'
import Footer from '../components/footer'
import Layout from '../components/layout'
import SEO from '../components/seo'

const WritingPage = () => (
  <>
    <Layout>
      <SEO
        title="Writing"
        keywords={[`writing`, `musings`, `thoughts`, `leadership`]}
      />
      <div className="max-w-xl">
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
      </div>
    </Layout>
    <Footer currPage="Writing" />
  </>
)

export default WritingPage
