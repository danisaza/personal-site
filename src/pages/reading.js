import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Reading" keywords={[`gatsby`, `application`, `react`]} />
    <h4>Currently reading</h4>
    <ul className="reading">
      <li>
        <i>Influence</i> - Robert B. Cialdini
      </li>
    </ul>
    <h4>Next up</h4>
    <ul className="reading">
      <li>
        <i>The Goal</i> - Eliyahu M. Goldratt
      </li>
    </ul>
    <h4>Recently read</h4>
    <ul className="reading">
      <li>
        <i>The Culture Code</i> - Daniel Coyle
      </li>
      <li>
        <i>Beyond the Phoenix Project</i> - Gene Kim, John Willis
      </li>
      <li>
        <i>The DevOps Handbook</i> - Gene Kim, Patrick Debois, John Willis, Jez
        Humble
      </li>
      <li>
        <i>Blitzscaling</i> - Chris Yeh, Reid Hoffman
      </li>
      <li>
        <i>High Growth Handbook</i> - Elad Gil
      </li>
      <li>
        <i>Measure What Matters</i> - John Doerr
      </li>
      <li>
        <i>The Autobiography of Benjamin Franklin</i> - Benjamin Franklin
      </li>
      <li>
        <i>The Hard Thing About Hard Things</i> - Ben Horowitz
      </li>
      <li>
        <i>The Shock Doctrine</i> - Naomi Klein
      </li>
      <li>
        <i>Rework</i> - Jason Fried, David Heinemeier Hansson
      </li>
      <li>
        <i>The Lean Startup</i> - Eric Ries
      </li>
      <li>
        <i>Lost and Founder</i> - Rand Fishkin
      </li>
      <li>
        <i>The Phoenix Project</i> - Gene Kim, Kevin Behr, George Spafford
      </li>
      <li>
        <i>The 15 Commitments of Conscious Leadership</i> - Jim Dethmer, Diana
        Chapman, Kaley Klemp
      </li>
      <li>
        <i>The $100 Startup</i> - Chris Guillebeau
      </li>
      <li>
        <i>Who Rules the World?</i> - Noam Chomsky
      </li>
      <li>
        <i>The Bottom Billion</i> - Paul Collier
      </li>
      <li>
        <i>Why Nations Fail</i> - Darron Acemoglu, James Robinson
      </li>
      <li>
        <i>Bossypants</i> - Tina Fey
      </li>
      <li>
        <i>The New Confessions of an Economic Hitman</i> - John Perkins
      </li>
      <li>
        <i>Between the World and Me</i> - Ta-Nehisi Coates
      </li>
      <li>
        <i>Red Notice</i> - Bill Browder
      </li>
      <li>
        <i>The Signal and the Noise</i> - Nate Silver
      </li>
      <li>
        <i>The Pragmatic Programmer</i> - Andy Hunt, Dave Thomas
      </li>
    </ul>
  </Layout>
)

export default IndexPage