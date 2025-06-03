function ListItem({ listItem, color = 'plum' }) {
  if (!listItem) return null;

  const { label, description, price } = listItem;

  const colors = {
    lime: 'text-lime-600',
    indigo: 'text-indigo-400',
    plum: 'text-plum-400',
  };

  const borders = {
    lime: 'border-lime-600',
    indigo: 'border-indigo-200',
    plum: 'border-plum-200',
  };

  return (
    <li>
      <div className={`flex gap-2 pb-3 border-b ${borders[color]}`}>
        <span className={colors[color]}>✦</span>

        <div>
          <p>
            {label} {price && `(${price})`}
          </p>
          {description && (
            <span className='text-base text-slate-600 italic'>
              {description}
            </span>
          )}
        </div>
      </div>
    </li>
  );
}

export default ListItem;
