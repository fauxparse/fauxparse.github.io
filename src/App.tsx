import { useState } from 'react';

import './App.css';
import Header from './Header';
import Intro from './Intro';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app" itemScope itemType="https://schema.org/Person">
      <Header />
      <main>
        <Intro />
        <section className="employment">
          <article className="job">
            <h3>Senior Platform Developer</h3>
            <h4>
              Optimal Workshop <small>Te Whanganui-a-Tara</small>
            </h4>
            <div className="dates">2018–present</div>
            <ul>
              <li>
                Leading front-end development initiatives and conversion of legacy interfaces into
                React.
              </li>
              <li>Developing a performant GraphQL API.</li>
              <li>Creating and maintaining a front-end component library in React.</li>
              <li>Driving testing best practices in JavaScript and Ruby.</li>
            </ul>
            <div className="skills">
              Ruby on Rails, JavaScript (React), CSS, GraphQL, MySQL, AWS
            </div>
          </article>

          <article className="job">
            <h3>Associate Director</h3>
            <h4>
              New Zealand Improv Festival <small>Te Whanganui-a-Tara</small>
            </h4>
            <div className="dates">2015–present</div>
            <ul>
              <li>
                Developing and maintaining a registration and scheduling system for 100+
                participants and international guests.
              </li>
              <li>Integrating with third-party systems for online payments and notifications.</li>
              <li>Assisting with the artistic administration of the Festival.</li>
            </ul>
            <div className="skills">Ruby on Rails, JavaScript (React), CSS, Heroku</div>
          </article>

          <article className="job">
            <h3>Senior Developer</h3>
            <h4>
              Flick Electric Co <small>Te Whanganui-a-Tara</small>
            </h4>
            <div className="dates">2018</div>
            <ul>
              <li>Development and maintenance of Ruby on Rails applications.</li>
              <li>Implementation of new website component library in HTML/CSS.</li>
              <li>Maintenance of Flick’s iOS app.</li>
            </ul>
            <div className="skills">Ruby on Rails, JavaScript (React), CSS, Swift</div>
          </article>

          <article className="job">
            <h3>Senior Developer / Functional Lead</h3>
            <h4>
              Flux Federation (Powershop) <small>Te Whanganui-a-Tara</small>
            </h4>
            <div className="dates">2015–2018</div>
            <ul>
              <li>Spearheading market integration implementation in two energy markets.</li>
              <li>Recruitment, screening, and mentoring of new developers.</li>
              <li>Development of in-house tools and productivity applications.</li>
            </ul>
            <div className="skills">Ruby on Rails, JavaScript, CSS</div>
          </article>

          <article className="job">
            <h3>Front-end Developer</h3>
            <h4>
              SLI Systems <small>Ōtautahi</small>
            </h4>
            <div className="dates">2011–2015</div>
            <ul>
              <li>Design and implementation of client-facing merchandising console.</li>
              <li>Full-stack web application development.</li>
              <li>Development of in-page plugins for use on client websites.</li>
            </ul>
            <div className="skills">JavaScript, CSS, PHP, Java, MongoDB</div>
          </article>

          <article className="job">
            <h3>Designer / Developer</h3>
            <h4>
              LeftClick <small>Ōtautahi</small>
            </h4>
            <div className="dates">2006–2011</div>
            <ul>
              <li>User experience design for e-commerce websites.</li>
              <li>Implementation of designs in both new and existing websites.</li>
              <li>Full-stack development and maintenance of in-house software.</li>
            </ul>
            <div className="skills">Ruby on Rails, JavaScript, CSS, Adobe CS</div>
          </article>

          <article className="job">
            <h3>Designer / Developer</h3>
            <h4>
              Avatar <small>Ōtautahi</small>
            </h4>
            <div className="dates">2003–2006</div>
            <ul>
              <li>Design and development of e-commerce and brochure websites.</li>
              <li>Development of in-house software.</li>
              <li>Search engine optimisation and marketing.</li>
            </ul>
            <div className="skills">HTML, JavaScript, CSS, Ruby on Rails, PHP, Perl, Adobe CS</div>
          </article>
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

        <footer>
          <p>Last updated 27 January 2022.</p>
          <p>References available on request.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
