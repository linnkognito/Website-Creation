function ListItem({
  listItem,
  theme = 'base',
  bullet = true,
  color = 'plum',
  icon: Icon = null,
}) {
  if (!listItem) return null;

  const { label, description, price } = listItem;

  const themes = {
    base: 'flex items-start gap-2 pb-3 border-b',
  };

  const colors = {
    lime: 'text-lime-600',
    indigo: 'text-indigo-400',
    plum: 'text-plum-400',
    slate: 'text-slate-950',
  };

  const borders = {
    lime: 'border-lime-600/35',
    indigo: 'border-indigo-200',
    plum: 'border-plum-200',
    slate: 'border-slate-950',
  };

  return (
    <li>
      <div className={`${themes[theme]} ${borders[color]}`}>
        {bullet && <span className={`mt-[1px] ${colors[color]}`}>✦</span>}

        {Icon && <Icon className={`h-6 mr-1 ${colors[color]}`} />}

        <div className='flex flex-col gap-1'>
          <p className='font-bold'>
            {label} {price && `(${price})`}
          </p>

          {description && (
            <p className='text-sm text-slate-600 leading-tight italic'>
              {description}
            </p>
          )}
        </div>
      </div>
    </li>
  );
}

export default ListItem;
