import { Button } from "react-bootstrap"
const MyButton = (props) => {
    const { label, action } = props

    return (
        <Button onClick={() => { action() }}>{label}</Button>
    )
}


export default MyButton;