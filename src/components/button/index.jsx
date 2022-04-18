
import * as styles from './index.styled';

const Button = props => {

    return (
        <styles.Button {...props}>
            {props.children}
        </styles.Button>
    )
}

export default Button;