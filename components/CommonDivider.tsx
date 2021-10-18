type commonDividerProps = {
  color?: string,
};

const CommonDivider = ({ color = 'gray-500'} : commonDividerProps) => {
  return (
    <div className={`h-0.5 w-1/2 sm:w-1/3 bg-${color} rounded-full`} />
  )
}

export default CommonDivider;