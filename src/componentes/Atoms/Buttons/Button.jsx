import { Button } from "react-bootstrap"
const MyButton = (props) => {
    const { label, action, className } = props

    return (
        <Button className={className} onClick={() => { action() }}>{label}</Button>
    )
}


export default MyButton;