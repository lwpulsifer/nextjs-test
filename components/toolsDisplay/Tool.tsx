import Image from 'next/image';
import useHoverState from '../../hooks/useHoverState';

export type tool = {
  name: string,
  description: string,
  href: string,
  imageSrc?: string,
};

const Tool: React.FC<tool> = ({
  name,
  description,
  href,
  imageSrc = null,
}) => {

  const { isHovered, eventListeners } = useHoverState();

  const hoverText = isHovered ? description : name; 

  return (
    <a 
      href={href}
      className="bg-background border border-header flex justify-center items-center rounded-xl m-3 w-64 h-32 min-h-[8rem] hover:h-auto box-border text-highlight hover:p-3"
      {...eventListeners}
    >
      <div 
        className="grid w-full h-full rounded-xl grid-rows-1 grid-cols-1 place-items-center place-content-center overflow-hidden" 
        style={{ gridTemplateAreas: '"gridContainer"' }}
      >
        {imageSrc && !isHovered 
          ? (
            <div 
              className="relative w-full h-full min-w-full min-h-full max-w-full z-0"
              style={{ gridArea: 'gridContainer' }} 
            >
              <Image src={imageSrc} layout={'fill'} objectFit={'cover'} alt={''} /> 
            </div>
          )
          : null
        }
        <div 
          className="w-full h-full max-w-full flex justify-center items-center z-10 text-center"
          style={{ gridArea: 'gridContainer' }} 
        >
          {hoverText}
        </div>
      </div>
    </a>
  )
}

export default Tool;