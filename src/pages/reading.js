import { Link } from 'gatsby'
import React from 'react'
import Footer from '../components/footer'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ReadingPage = () => (
  <>
    <Layout>
      <SEO
        title="Reading"
        keywords={[`reading`, `audiobooks`, `engineering`, `leadership`]}
      />
      <h2>Reading</h2>
      <p>
        I love reading, especially audiobooks. I also{' '}
        <Link to="/podcasts">love podcasts</Link>.
      </p>
      <p>
        I'm open to not finishing books, which I represent with a{' '}
        <s>strikethrough</s> in the list below.
      </p>
      <p>
        I'm also open to slowly picking at books or using them as reference
        manuals, which I represent with an asterisk (*).
      </p>
      <i className="yearLabel">2021</i>
      <hr />
      <h4 className="mb-2 text-black">Currently Reading</h4>
      <ul className="reading pb-1">
        <li>
          <i>Salt Fat Acid Heat</i> - Samin Nosrat
        </li>
      </ul>
      <h4 className="mb-2 text-black">Recently Read</h4>
      <ul className="reading">
        <li>
          <i>Dear Girls</i> - Ali Wong
        </li>
        <i className="yearLabel">2020</i>
        <hr />
        <li>
          <i>Winners Take All: The Elite Charade of Changing the World</i> -
          Anand Giridharadas
        </li>
        <li>
          <i>The System: Who Rigged It, How We Fix It</i> - Robert B. Reich
        </li>
        <li>
          <i>Worked Over</i> - Jamie K McCallum
        </li>
        <li>
          <i>So You Want to Talk About Race</i> - Ijeoma Oluo
        </li>
        <li>
          <i>Doughnut Economics</i> - Kate Raworth
        </li>
        <li>
          <i>A Philosophy of Software Design</i> - John Ousterhout
        </li>
        <li>
          <i>A Very Punchable Face</i> - Colin Jost
        </li>
        <li>
          <i>The Year Without Pants</i> - Scott Berkun
        </li>
        <li>
          <i>A People's History of the United States</i> - Howard Zinn*
        </li>
        <li>
          <i>Patterns of Enterprise Application Architecture</i> - Martin
          Fowler*
        </li>
        <li>
          <i>An African American and Latinx History of the United States</i> -
          Paul Ortiz
        </li>
        <li>
          <i>How to be an Anti-Racist</i> - Ibram X. Kendi
        </li>
        <li>
          <i>The Fire Next Time</i> - James Baldwin
        </li>
        <li>
          <i>The Poet X</i> - Elizabeth Acevedo
        </li>
        <li>
          <i>The Undocumented Americans</i> - Karla Cornejo Villavicencio
        </li>
        <li>
          <i>The Dichotomy of Leadership</i> - Jocko Willink, Leif Babin
        </li>
        <li>
          <i>Extreme Ownership</i> - Jocko Willink, Leif Babin
        </li>
        <li>
          <i>
            That Will Never Work: The Birth of Netflix and the Amazing Life of
            an Idea
          </i>{' '}
          - Marc Randolph
        </li>
        <li>
          <i>Start Small, Stay Small</i> - Rob Walling
        </li>
        <li>
          <i>The Unicorn Project</i> - Gene Kim
        </li>
        <li>
          <i>Who: The A method for hiring</i> - Geoff Smart and Randy Street
        </li>
        <li>
          <i>The First 90 Days</i> - Michael Watkins
        </li>
        <li>
          <i>Obey the Testing Goat</i> - Harry J.W. Percival*
        </li>
        <li>
          <i>Letters from a Stoic</i> - Lucius Seneca*
        </li>
        <li>
          <i>The Effective Executive</i> - Peter Drucker
        </li>
        <li>
          <i>Objections</i> - Jeb Blount
        </li>
        <li>
          <i>Sales EQ</i> - Jeb Blount
        </li>
        <i className="yearLabel">2019</i>
        <hr />
        <li>
          <i>Debt</i> - David Graeber*
        </li>
        <li>
          <i>Little Weirds</i> - Jenny Slate
        </li>
        <li>
          <i>The Monk and the Riddle</i> - Randy Komisar
        </li>
        <li>
          <i>Straight Talk for Startups</i> - Randy Komisar and Jantoon
          Reigersman
        </li>
        <li>
          <i>The Messy Middle</i> - Scott Belsky
        </li>
        <li>
          <i>Ultralearning</i> - Scott Young
        </li>
        <li>
          <i>What You Do Is Who You Are</i> - Ben Horowitz
        </li>
        <li>
          <i>Empire of Cotton</i> - Sven Beckert*
        </li>
        <li>
          <i>Good to Great</i> - Jim Collins
        </li>
        <li>
          <i>The Goal</i> - Eliyahu M. Goldratt
        </li>
        <li>
          <i>Python Tricks</i> - Dan Bader*
        </li>
        <li>
          <i>High Output Management</i> - Andy Grove
        </li>
        <li>
          <i>Trillion Dollar Coach</i> - Eric Schmidt, Jonathan Rosenberg, Alan
          Eagle
        </li>
        <li>
          <i>Essentialism</i> - Greg McKeown
        </li>
        <li>
          <i>Toyota Kata</i> - Mike Rother
        </li>
        <li>
          <i>Making Websites Win</i> - Ben Jesson, Karl Blanks
        </li>
        <li>
          <i>Radical Candor</i> - Kim Scott
        </li>
        <li>
          <i>Finite and Infinite Games</i> - James P. Carse
        </li>
        <li>
          <i>The Five Dysfunctions of a Team</i> - Patrick Lencioni
        </li>
        <li>
          <i>Getting Things Done</i> - David Allen
        </li>
        <li>
          <i>I Will Teach You to Be Rich</i> - Ramit Sethi
        </li>
        <li>
          <i>The War of Art</i> - Steven Pressfield
        </li>
        <li>
          <i>No is Not Enough</i> - Naomi Klein
        </li>
        <li>
          <i>The Checklist Manifesto</i> - Atul Gawande
        </li>
        <li>
          <i>Atomic Habits</i> - James Clear
        </li>
        <li>
          <i>Managing Oneself</i> - Peter F. Drucker
        </li>
        <li>
          <i>We Were Eight Years in Power</i> - Ta-Nehisi Coates
        </li>
        <li>
          <i>The Manager's Path</i> - Camille Fournier
        </li>
        <li>
          <i>The Last Black Unicorn</i> - Tiffany Haddish
        </li>
        <li>
          <i>Company of One</i> - Paul Jarvis
        </li>
        <li>
          <s>
            <i>Influence</i> - Robert B. Cialdini
          </s>
          {` `}(wasn't captivating)
        </li>
        <li>
          <i>The Culture Code</i> - Daniel Coyle
        </li>
        <li>
          <i>Beyond the Phoenix Project</i> - Gene Kim, John Willis
        </li>
        <li>
          <i>The DevOps Handbook</i> - Gene Kim, Patrick Debois, John Willis,
          Jez Humble
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
        <i className="yearLabel">2018</i>
        <hr />
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
          <i>Four Futures</i> - Peter Frase
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
        <li>
          <i>The Communist Hypothesis</i> - Alain Badiou
        </li>
      </ul>
    </Layout>
    <Footer currPage="Reading" />
  </>
)

export default ReadingPage
