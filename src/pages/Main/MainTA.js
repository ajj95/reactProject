import TAHeader from '../../components/common/TAHeader';
import MainTABody from '../../components/main/MainTABody';
import '../../resources/assets/css/MainTA.css';

const MainTA = () => {
    return (
        <>
            <div>
                <TAHeader></TAHeader>
            </div>
            <div id="main" style={{marginLeft: "0px"}}>
                <MainTABody></MainTABody>
            </div>
        </>
    );
}



export default MainTA