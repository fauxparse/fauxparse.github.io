import { PropsWithChildren } from 'react';

type Location = {
  maori: string;
  english: string;
};

export const LOCATIONS: Record<string, Location> = {
  CHC: { maori: 'Ōtautahi', english: 'Christchurch' },
  WLG: { maori: 'Te Whanganui-a-Tara', english: 'Wellington' },
};

type JobProps = PropsWithChildren<{
  title: string;
  company: string;
  location: keyof typeof LOCATIONS;
  dates: string;
  skills: string[];
}>;

const Job: React.FC<JobProps> = ({ title, company, location, dates, skills, children }) => (
  <article className="job">
    <h3>{title}</h3>
    <h4>
      {company}{' '}
      <small>
        <abbr title={LOCATIONS[location].english}>{LOCATIONS[location].maori}</abbr>
      </small>
    </h4>
    <div className="dates">{dates}</div>
    {children}
    <div className="skills">{skills.join(', ')}</div>
  </article>
);

export default Job;
