import './style.css';

import { Container } from '@core/components';
import Options, { optionsList } from './options';
import { Suspense as ReactSuspense } from 'react';

export type SuspenseProps = {
    children: React.ReactNode;
    className?: string;
    option: optionsList;
}

export default function Suspense({children, className='', option = 'bounce'} : SuspenseProps) {
    const Option = Options[option];
    return (
        <ReactSuspense fallback={<Container width='full' horizontal='center' vertical='center' className={className}><Option/></Container>}>
            {children}
        </ReactSuspense>
    )
}