const Title = ({text}) => {
  return (
    <div className="flex items-center gap-2 mb-14">
      <div className="text-white text-2xl ">{text}</div>
      <div className="bg-white grow h-px"></div>
    </div>
  );
}
export default Title