type yearCardProps = {
  year: string | number,
}

const YearCard: React.FC<yearCardProps> = ({ year }) => {
  return(
    <li className={'w-full flex items-center justify-center text-2xl my-4'}>
      {year}
    </li>
  )
};

export default YearCard;