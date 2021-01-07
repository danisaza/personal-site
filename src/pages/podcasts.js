import React from 'react'
import Footer from '../components/footer'
import Layout from '../components/layout'
import SEO from '../components/seo'

const PodcastsPage = () => (
  <>
    <Layout>
      <SEO
        title="Podcasts"
        keywords={[`podcasts`, `engineering`, `leadership`, `indie hacker`]}
      />
      <div className="mb-10 rounded">
        <h2>Update: I record a podcast now!</h2>
        <p>
          It's called{' '}
          <b>
            <a
              href="https://anchor.fm/decoders"
              target="_blank"
              rel="noopener noreferrer"
            >
              The (De)Coders
            </a>
          </b>
          , and I record it with my friend Robbe Simon.
        </p>
      </div>
      <h2>Podcasts I Recommend</h2>
      <p>I love listening to podcasts. Here are a few that I recommend.</p>
      <hr />
      <h3>The Indie Hackers Podcast (w/ Courtland Allen)</h3>
      <p>
        The{' '}
        <a
          href="https://www.indiehackers.com/podcast"
          target="_blank"
          rel="noopener noreferrer"
        >
          Indie Hackers podcast
        </a>{' '}
        is an interview series that features some of the most notable names in
        the indie software community.
      </p>
      <p>
        Guests discuss their profitable online businesses and provide actionable
        tips for current and aspiring internet entrepreneurs.
      </p>
      <p>
        If you're interested in online businesses, this podcast is a
        must-listen.
      </p>
      <h3>Software Engineering Daily (w/ Jeff Meyerson)</h3>
      <p>
        Jeff Meyerson is a Software Engineer turned podcast host. He brings
        technical folks onto{' '}
        <a
          href="https://softwareengineeringdaily.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          the podcast
        </a>{' '}
        to discuss their areas of expertise in depth.
      </p>
      <p>
        This podcast is not for the faint of heart. You will learn a lot about
        technical topics, and I recommend listening in an environment where
        you'll be able to focus.
      </p>
      <p>
        Of course, you won't walk away an expert from having listened to a
        podcast episode about something, but it's a great way to get a thorough
        overview of a specific topic.
      </p>
      <h3>The Secure Developer (w/ Guy Podjarny)</h3>
      <p>
        On{' '}
        <a
          href="https://www.mydevsecops.io/the-secure-developer-podcast"
          target="_blank"
          rel="noopener noreferrer"
        >
          this podcast
        </a>
        , Guy Podjarny - the CEO of Snyk - hosts various security experts to
        talk about tooling and best practices for promoting security within your
        organization.
      </p>
      <p>
        I've learned about security topics and about fostering a culture of
        collective ownership over security. (Plus, the concepts are often
        applicable to other facets of software engineering – like testing.)
      </p>
      <p>
        Even if you don't work in Security, I highly recommend this podcast,
        especially if you work in engineering leadership.
      </p>
    </Layout>
    <Footer currPage="Podcasts" />
  </>
)

export default PodcastsPage
