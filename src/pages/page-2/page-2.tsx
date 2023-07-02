import { ReactElement } from 'react';
import MobileTemplate from '../../widgets/home/mobile-template';

export default function Page2(): ReactElement {
    return (
        <MobileTemplate>
            <div>2페이지입니다</div>
            <a href="/">홈페이지 바로가기</a>
            <br />
            <a href="/page1">1페이지 바로가기</a>
        </MobileTemplate>
    )
}