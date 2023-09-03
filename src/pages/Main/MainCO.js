import COHeader from '../../components/common/COHeader';
import MainCOBody from '../../components/main/MainCOBody';
import '../../resources/assets/css/MainCO.css';

const MainCO = () => {
    return (
        <>
            <div>
                <COHeader></COHeader>
            </div>
            <div id="main" style={{marginLeft: "0px"}}>
                <MainCOBody></MainCOBody>
            </div>
        </>
    );
}



export default MainCO