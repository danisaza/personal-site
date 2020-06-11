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
      <p>Keep an eye out. I'll be publishing here soon.</p>
    </Layout>
    <Footer currPage="Writing" />
  </>
)

export default WritingPage
