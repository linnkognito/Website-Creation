import DividerHorizontal from '../DividerHorizontal';

function Description({ children, color = 'dark', invert = false }) {
  const colors = {
    dark: 'text-indigo-950',
    light: 'text-violet-50',
  };

  return (
    <div
      className={`flex-col-gap ${colors[color]} ${
        invert ? 'flex flex-col gap-3 lg:items-end' : ''
      }`}
    >
      {children}

      <DividerHorizontal color={color} className='lg:w-8/10 mt-5' />
    </div>
  );
}

export default Description;
