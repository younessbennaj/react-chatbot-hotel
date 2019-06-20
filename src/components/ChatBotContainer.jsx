import styled from 'styled-components';
import defaultTheme from '../theme';

const ChatBotContainer = styled.div`
    background: ${({ theme }) => theme.background};
    border-radius: 10px;
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);
    overflow: hidden;
    @media screen and (max-width: 568px) {
        bottom: 0 !important;
        left: initial !important;
        height: 100%;
        right: 0 !important;
        top: initial !important;
        width: 100%;
    }
`;

ChatBotContainer.defaultProps = {
    theme: defaultTheme
};

export default ChatBotContainer;