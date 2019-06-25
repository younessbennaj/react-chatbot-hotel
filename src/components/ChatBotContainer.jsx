import styled from 'styled-components';
import defaultTheme from '../theme';

const ChatBotContainer = styled.div`
    background: ${({ theme }) => theme.background};
    border-radius: 10px;
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);
    width: ${({ width }) => width};
    height: ${({ height }) => height};
`;

ChatBotContainer.defaultProps = {
    theme: defaultTheme
};

export default ChatBotContainer;