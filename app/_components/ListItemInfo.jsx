function ListItemInfo({ listItem, icon: Icon = null }) {
  if (!listItem) return null;
  const { label } = listItem;

  {
    Icon && <Icon className={`h-6 mr-1`} />;
  }
  return (
    <li className='flex items-center gap-3 text-xl'>
      {Icon && <Icon className='w-7' />}
      {label}
    </li>
  );
}

export default ListItemInfo;
