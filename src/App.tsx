import MobileTemplate from "./widgets/home/mobile-template";
import "./common/common.scss";
import "./common/buttons.scss";
import "./widgets/home/mobile-home.scss";

const App: React.FC = () => {
  return (
    <MobileTemplate>
      <div id="home-menu">
        <div>Tags</div>
        <div>Guest</div>
        <div>Search</div>
      </div>
{/* 
      <a href="/page1">1페이지 바로가기</a>
      <br />
      <a href="/page2">2페이지 바로가기</a>
       */}
    </MobileTemplate>
  )
}

export default App