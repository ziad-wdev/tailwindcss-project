const colorArr = ['blue', 'purple', 'teal', 'yellow'];
const styles = {
  blue: {
    bg: 'bg-linear-to-br from-blue-400 to-purple-400',
    transBg: 'bg-blue-600/50',
    text: 'text-blue-500'
  },
  purple: {
    bg: 'bg-linear-to-br from-purple-400 to-pink-400',
    transBg: 'bg-purple-600/50',
    text: 'text-purple-500'
  },
  teal: {
    bg: 'bg-linear-to-br from-teal-400 to-blue-400',
    transBg: 'bg-teal-600/50',
    text: 'text-teal-500'
  },
  yellow: {
    bg: 'bg-linear-to-br from-yellow-400 to-orange-400',
    transBg: 'bg-yellow-600/50',
    text: 'text-yellow-500'
  }
};

export default function TeamMemberCard({ member }) {
  const { name, role, description, index } = member;
  const colorStyles = styles[colorArr[index % colorArr.length]] || styles.blue;

  return (
    <div className='group w-full grow overflow-hidden rounded-3xl bg-white text-center shadow-lg transition-shadow hover:shadow-2xl sm:w-1/3 lg:w-0'>
      <div className={'relative flex h-60 items-center justify-center ' + `${colorStyles.bg}`}>
        <div
          className={
            'absolute inset-0 flex items-center justify-center gap-4 p-4 text-2xl opacity-0 transition-opacity group-hover:opacity-100 ' +
            `${colorStyles.transBg} ${colorStyles.text}`
          }
        >
          <a className='aspect-square rounded-full bg-white p-2 transition-colors hover:bg-white/75' href='#'>
            <i class='fa-brands fa-facebook-f'></i>
          </a>
          <a className='aspect-square rounded-full bg-white p-2 transition-colors hover:bg-white/75' href='#'>
            <i class='fa-brands fa-twitter'></i>
          </a>
          <a className='aspect-square rounded-full bg-white p-2 transition-colors hover:bg-white/75' href='#'>
            <i class='fa-brands fa-linkedin-in'></i>
          </a>
        </div>
        <div className='flex aspect-square items-center justify-center rounded-full bg-white/25 p-4 text-white'>
          <i className='fa-solid fa-user text-6xl'></i>
        </div>
      </div>
      <div className='space-y-2 p-6'>
        <h3 className='mb-0 text-xl font-bold'>{name}</h3>
        <p className={colorStyles.text}>{role}</p>
        <p className='text-sm text-slate-500'>{description}</p>
      </div>
    </div>
  );
}
