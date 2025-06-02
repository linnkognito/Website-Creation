import Paragraph from '../text/Paragraph';

function InfoText({ children, icon: Icon }) {
  return (
    <Paragraph className='flex items-center gap-1 mt-1 font-black'>
      <Icon className='h-6' />
      {children}
    </Paragraph>
  );
}

export default InfoText;
