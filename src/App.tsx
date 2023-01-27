import Header from './Header';
import Intro from './Intro';
import Job from './Job';

import './App.css';

const App: React.FC = () => (
  <div className="app" itemScope itemType="https://schema.org/Person">
    <Header />
    <main>
      <Intro />
      <div className="content">
        <section className="employment">
          <Job
            title="Senior Platform Developer"
            company="Optimal Workshop"
            location="WLG"
            dates="2018–present"
            skills={['Ruby on Rails', 'JavaScript (React)', 'CSS', 'GraphQL', 'MySQL', 'AWS']}
          >
            <ul>
              <li>
                Leading front-end development initiatives and conversion of legacy interfaces into
                React.
              </li>
              <li>Developing a performant GraphQL API.</li>
              <li>Creating and maintaining a front-end component library in React.</li>
              <li>Driving testing best practices in JavaScript and Ruby.</li>
            </ul>
          </Job>

          <Job
            title="Associate Director"
            company="New Zealand Improv Festival"
            location="WLG"
            dates="2015–present"
            skills={['Ruby on Rails', 'JavaScript (React)', 'CSS', 'Heroku']}
          >
            <ul>
              <li>
                Developing and maintaining a registration and scheduling system for 100+
                participants and international guests.
              </li>
              <li>Integrating with third-party systems for online payments and notifications.</li>
              <li>Assisting with the artistic administration of the Festival.</li>
              <li>Supporting participants and remedying registration issues.</li>
            </ul>
          </Job>

          <Job
            title="Senior Developer"
            company="Flick Electric Co"
            location="WLG"
            dates="2018"
            skills={['Ruby on Rails', 'JavaScript (React)', 'CSS', 'Swift']}
          >
            <ul>
              <li>Development and maintenance of Ruby on Rails applications.</li>
              <li>Implementation of new website component library in HTML/CSS.</li>
              <li>Maintenance of Flick’s iOS app.</li>
            </ul>
          </Job>

          <Job
            title="Senior Developer / Functional Lead"
            company="Flux Federation (Powershop)"
            location="WLG"
            dates="2015–2018"
            skills={['Ruby on Rails', 'JavaScript', 'CSS']}
          >
            <ul>
              <li>Spearheading market integration implementation in two energy markets.</li>
              <li>Recruitment, screening, and mentoring of new developers.</li>
              <li>Development of in-house tools and productivity applications.</li>
            </ul>
          </Job>

          <Job
            title="Front-end Developer"
            company="SLI Systems"
            location="CHC"
            dates="2011–2015"
            skills={['JavaScript', 'CSS', 'PHP', 'Perl', 'Java', 'MongoDB']}
          >
            <ul>
              <li>Design and implementation of client-facing merchandising console.</li>
              <li>Full-stack web application development.</li>
              <li>Development of in-page plugins for use on client websites.</li>
            </ul>
          </Job>

          <Job
            title="Designer / Developer"
            company="LeftClick"
            location="CHC"
            dates="2006–2011"
            skills={['Ruby on Rails', 'JavaScript', 'CSS', 'Adobe CS', 'UX design', 'UX research']}
          >
            <ul>
              <li>User experience design for e-commerce websites.</li>
              <li>Designing and conducting UX research and interviews.</li>
              <li>Implementation of designs in both new and existing websites.</li>
              <li>Full-stack development and maintenance of in-house software.</li>
            </ul>
          </Job>

          <Job
            title="Designer / Developer"
            company="Avatar"
            location="CHC"
            dates="2003–2006"
            skills={['HTML', 'JavaScript', 'CSS', 'Ruby on Rails', 'PHP', 'Perl', 'Adobe CS']}
          >
            <ul>
              <li>Design and development of e-commerce and brochure websites.</li>
              <li>Development of in-house software.</li>
              <li>Search engine optimisation and marketing.</li>
            </ul>
          </Job>
        </section>

        <section className="qualifications">
          <dl>
            <dt>ICAgile Certified Professional</dt>
            <dd>International Consortium for Agile, 2021</dd>
            <dt>Level 3 Certificate in Tikanga Māori</dt>
            <dd>Te Wānanga O Aotearoa, 2017</dd>
            <dt>BSc(Hons) in Computer Science</dt>
            <dd>University of Canterbury, 2001</dd>
          </dl>
        </section>

        <section className="interests">
          <ul>
            <li>
              I am a <em>skilled improvisor</em>, and have been invited to perform, direct, and
              teach around New Zealand and internationally.
            </li>
            <li>
              I speak passable <em>French</em> and <em>Spanish</em>, and am learning{' '}
              <em>Te Reo Māori</em>.
            </li>
            <li>
              I am passionate about <em>diversity</em> and <em>mental health issues</em>, especially
              in the software community.
            </li>
            <li>
              I have strong <em>presentation</em> and <em>facilitation</em> skills, and am confident
              leading discussions and presenting ideas with diverse audiences.
            </li>
          </ul>
        </section>
      </div>

      <footer>
        <p>Last updated 27 January 2022.</p>
        <p>References available on request.</p>
      </footer>
    </main>
  </div>
);

export default App;
