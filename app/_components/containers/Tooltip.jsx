import Paragraph from '../Paragraph';

function Tooltip({ children, title = '', icon: Icon, color = 'indigo' }) {
  const colors = {
    indigo: {
      icon: 'bg-indigo-500',
      background: 'bg-indigo-500/10',
      border: 'border-indigo-500',
      shadow: 'shadow-indigo-600/50',
    },
    lime: {
      icon: 'bg-lime-500',
      background: 'bg-lime-500/10',
      border: 'border-lime-500',
      shadow: 'shadow-lime-600/50',
    },
    plum: {
      icon: 'bg-plum-500',
      background: 'bg-plum-500/10',
      border: 'border-plum-500',
      shadow: 'shadow-plum-600/50',
    },
  };

  const icon = colors[color].icon;
  const background = colors[color].background;
  const border = colors[color].border;
  const shadow = colors[color].shadow;

  return (
    <div
      className={`flex flex-col gap-2 p-div-sm border-2 rounded-2xl shadow-md ${background} ${border} ${shadow}`}
    >
      <div className={`flex items-center gap-3 font-black`}>
        {Icon && (
          <Icon
            className={`h-7 text-white rounded-full p-1 shadow-subtle ${icon}`}
          />
        )}
        <h5>{title}</h5>
      </div>

      <Paragraph className='text-base'>{children}</Paragraph>
    </div>
  );
}

export default Tooltip;
