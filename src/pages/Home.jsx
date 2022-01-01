import HomeContainer from "../containers/HomeContainer";
import HeaderContainer from "../containers/HeaderContainer";
import ClickCounter from "../components/ClickCounter";
import HoverCounter from "../components/HoverCounter";

function Home() {
    return (
        <div>
        <HeaderContainer />
        <HomeContainer />
        <ClickCounter />
        <HoverCounter />
        
        </div>
    )
}

export default Home
