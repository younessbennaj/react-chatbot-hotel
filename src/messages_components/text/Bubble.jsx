import styled from 'styled-components';
import defaultTheme from '../../theme';

const Bubble = styled.div`
    border-radius: ${props => {
        const { user } = props;

        return user === 'User' ? '18px 18px 0px 18px' : '18px 18px 18px 0px';
    }};
    max-width: 50%;
    font-size: 14px;
    color: ${props => (props.user === 'User' ? props.theme.userFontColor : props.theme.botFontColor)};
    background: ${props => (props.user === 'User' ? props.theme.userBubbleColor : props.theme.botBubbleColor)};
`;

Bubble.defaultProps = {
    theme: defaultTheme
};

export default Bubble;