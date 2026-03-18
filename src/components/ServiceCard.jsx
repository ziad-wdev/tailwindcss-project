const colorArr = ['blue', 'purple', 'green'];
const styles = {
  blue: {
    borderHover: 'hover:border-blue-500',
    text: 'text-blue-500',
    bgHover: 'bg-blue-500/25 group-hover:bg-blue-500'
  },
  purple: {
    borderHover: 'hover:border-purple-500',
    text: 'text-purple-500',
    bgHover: 'bg-purple-500/25 group-hover:bg-purple-500'
  },
  green: {
    borderHover: 'hover:border-green-500',
    text: 'text-green-500',
    bgHover: 'bg-green-500/25 group-hover:bg-green-500'
  }
};

export default function ServiceCard({ service }) {
  const { title, description, features, icon, index } = service;
  const colorStyles = styles[colorArr[index % colorArr.length]] || styles.blue;

  return (
    <div
      className={
        'group w-full grow space-y-4 rounded-2xl border border-slate-300 bg-white p-6 text-left transition-all hover:shadow-2xl sm:w-1/3 lg:w-0 ' +
        `${colorStyles.borderHover}`
      }
    >
      <div
        className={
          'flex size-16 items-center justify-center rounded-2xl text-3xl group-hover:text-white ' +
          `${colorStyles.text} ${colorStyles.bgHover}`
        }
      >
        <i className={icon}></i>
      </div>
      <h3 className='text-2xl font-bold'>{title}</h3>
      <p className='text-slate-500'>{description}</p>
      <ul className='flex flex-col gap-1'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-center gap-2'>
            <i className={`fa-solid fa-check text-green-500`}></i> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
