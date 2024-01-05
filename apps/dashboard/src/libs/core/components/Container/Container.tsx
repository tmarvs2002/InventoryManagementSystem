'use client'

import styled from "styled-components"
import ContainerProps, { horizontalAlign, verticalAlign, width } from "./ContainerProps"

interface AlignmentProps {
    direction: 'row' | 'column';
    h?: horizontalAlign;
    v?: verticalAlign;
}

function getAlignment({ direction, h='center', v='top' }: AlignmentProps) {
    return direction === 'column' ? {
        alignItems: h === 'left' ? 'flex-start' : h === 'center' ? 'center' : 'flex-end',
        justifyContent: v === 'top' ? 'flex-start' : v === 'center' ? 'center' : 'flex-end',
    } : {
        alignItems: v === 'top' ? 'flex-start' : v === 'center' ? 'center' : 'flex-end',
        justifyContent: h === 'left' ? 'flex-start' : h === 'center' ? 'center' : 'flex-end',
    }
}

function getWidth(width?: width) {
    switch (width) {
        case 'full': return { width: '100%' };
        case 'half': return { width: '50%' };
        case undefined: return {};
        default: return { width: width };
    }
} 


const Container = styled('div')<ContainerProps>(({ width, direction='row', gap, horizontal, vertical }) => ({
    ...getAlignment({direction, h: horizontal, v: vertical}),
    ...getWidth(width),
    display: 'flex',
    flexDirection: direction,
    gap: gap || '12px',
    padding: '0',
}))

export default Container;







// const ContainerComponent = styled('div')<ContainerBaseProps>(({ width, direction='row', gap, horizontal, vertical }) => ({
//     ...getAlignment({direction, h: horizontal, v: vertical}),
//     ...getWidth(width),
//     display: 'flex',
//     flexDirection: direction,
//     gap: gap || '12px',
//     padding: '0',
// }))

// const Container: React.FC<ContainerProps> = ({ handleHover, ...props }) => {

//     const [defaultProps, setDefaultProps] = useState<ContainerBaseProps>(props);

//     const updateProps = (newProps: Partial<ContainerBaseProps>) => {
//         const fullProps = {...newProps};
//         if (Object.keys(fullProps).includes('style')) {
//             Object.assign(fullProps, {style: {...props.style, ...fullProps.style}})
//         }
//         setDefaultProps({...defaultProps, ...fullProps});
//     }

//     function handleMouseEnter(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//         const target = event.target as HTMLDivElement;
//         handleHover(updateProps);
//         target.addEventListener('mouseleave', handleMouseLeave)
//     }

//     function handleMouseLeave(event: MouseEvent) {
//         const target = event.target as HTMLDivElement;
//         setDefaultProps(props);
//         target.removeEventListener('mouseleave', handleMouseLeave)
//     }

//     function ContainerRoot({ children }: {children: React.ReactNode}){
//         return handleHover ? (
//             <div style={{ display: 'contents' }} onMouseEnter={handleMouseEnter}>
//                 {children}
//             </div>
//         ) : (
//             <React.Fragment>
//                 {children}
//             </React.Fragment>
//         )
//     }

//     return (
//         <ContainerRoot>
//             <ContainerComponent {...defaultProps} />
//         </ContainerRoot>
//     )
// }