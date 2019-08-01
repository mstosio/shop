import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

export const StyledProduct = styled(Card)`
  ${'' /* background-color: gray; */}
  margin-bottom: 50px;
  img {
    padding-top: 25px;
    align-self: center;
    object-fit: cover;
    max-width: 150px;
    max-height: 150px;
  }

  .card-body {
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    background-color: #e6e6e6;
    min-height: 176px;
  }

  .button-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .card-text {
    justify-self: center;
  }
`;
