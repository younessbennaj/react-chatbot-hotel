import styled from 'styled-components';

const Content = styled.div`
    height: ${({ height }) => height};
    overflow: hidden;
    overflow-y: scroll;
`;

export default Content;