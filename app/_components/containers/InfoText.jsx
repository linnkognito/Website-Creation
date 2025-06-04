import Paragraph from '../text/Paragraph';

function InfoText({ children, icon: Icon }) {
  return (
    <div className='flex items-start w-9/10 mt-1 font-black leading-tight'>
      <Icon className='h-7 shrink-0' />
      <Paragraph>{children}</Paragraph>
    </div>
  );
}

export default InfoText;
