import TeamMember from '../components/TeamMember';
import team from '../data/team';
import MotionHoc from './MotionHoc';

const TeamComponent = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          padding: '20px',
        }}
      >
        Team
      </h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          padding: '20px',
          gap: '10px',
        }}
      >
        {team.map((t, id) => (
          <TeamMember
            key={id}
            name={t.name}
            designation={t.designation}
            description={t.description}
            image={t.image}
            linkedin={t.linkedin}
            github={t.github}
            instagram={t.instagram}
          />
        ))}
      </div>
    </div>
  );
};

const Team = MotionHoc(TeamComponent);

export default Team;
