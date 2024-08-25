import React from 'react';

import { PageContainer } from '../../_components/PageContainer/PageContainer';
import { Wall } from './Wall/Wall';
import { Letter } from './Letter/Letter';
import { Progress } from './Progress/Progress';
import { Sign } from './Sign/Sign';
import { Media } from './Media/Media';
import { Header } from './Header/Header';

export default function IndexPage() {
    return (
        <PageContainer>
            <Header/>
            <Progress/>
            {/*<Sign/>*/}
            {/*<Letter/>*/}
            {/*<Wall/>*/}
            {/*<Media/>*/}
        </PageContainer>
    )
}
