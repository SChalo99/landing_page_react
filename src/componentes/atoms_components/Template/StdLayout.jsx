import Topbar from "../Organisms/Topbar"
import Footer from "../Organisms/Footer"
const StdLayout = (props) => {
    const { main } = props;
    return (
        <>
            <Topbar />
            {main}
            <Footer />
        </>
    )
}

export default StdLayout;