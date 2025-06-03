function QuickInfo({ children, icon: Icon = null }) {
  return (
    <div className='flex items-center gap-3 pl-2 mb-5 text-lg'>
      {Icon && <Icon className='w-7' />}
      {children}
    </div>
  );
}

export default QuickInfo;
