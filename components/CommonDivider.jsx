export default function CommonDivider({ color = 'gray-500'}) {
  return (
    <div className={`h-0.5 w-1/2 sm:w-1/3 bg-${color} rounded-full`} />
  )
}