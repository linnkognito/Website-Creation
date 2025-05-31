function InfoStrip({ children, className = '' }) {
  return (
    <div
      className={`flex-center text-center p-div-sm min-h-[50px] border-5 border-white rounded-2xl ${className}`}
    >
      <div className='text-lg font-bold'>{children}</div>
    </div>
  );
}

export default InfoStrip;
