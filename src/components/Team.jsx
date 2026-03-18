import TeamMemberCard from './TeamMemberCard';

export default function Team() {
  const teamMembers = [
    {
      name: 'Ahmed Mohamed',
      role: 'Marketing Director',
      description: '10 years of experience in digital marketing',
      index: 0
    },
    {
      name: 'Sara Ahmed',
      role: 'SEO Specialist',
      description: 'Specialized in search engine optimization',
      index: 1
    },
    {
      name: 'Mohamed Ali',
      role: 'Web Developer',
      description: 'Expert in web development',
      index: 2
    },
    {
      name: 'Noura Khaled',
      role: 'Graphic Designer',
      description: 'Specialized in visual identity design',
      index: 3
    }
  ];
  return (
    <section id='team' className='py-20'>
      <div className='container mx-auto px-8 text-center'>
        <h2 className='mb-4 text-4xl font-bold'>Our Creative Team</h2>
        <p className='mb-4 text-lg text-slate-500'>An elite group of the best digital marketing experts.</p>

        <div className='mt-12 flex flex-wrap justify-center gap-8'>
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
