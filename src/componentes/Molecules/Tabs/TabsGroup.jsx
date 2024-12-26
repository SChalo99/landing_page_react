import MyTab from '../../Atoms/Tab';
import { Nav } from "react-bootstrap";

const TabsGroup = (props) => {
    const { tabs } = props;
    return (
        <Nav className="me-auto navigations nav-elements" id='navigations'>
            {tabs.map((tab) => {
                return (
                    <MyTab label={tab.label} url={tab.url}></MyTab>
                )
            })}
        </Nav>
    )
}

export default TabsGroup;