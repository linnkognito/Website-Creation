import DividerHorizontal from '../DividerHorizontal';

function TextContent({ children, title, className = '' }) {
  return (
    <div className={`rounded-xl ${className}`}>
      <div>
        <h2
          id='purpose-heading'
          className={`flex gap-2 p-heading text-violet-50 ${title.color}`}
        >
          {title.heading}
        </h2>
        <DividerHorizontal className='lg:w-8/10' />
      </div>

      <div className='flex flex-col gap-1'>
        {children}
        <DividerHorizontal className='lg:w-8/10' />
      </div>
    </div>
  );
}

export default TextContent;
