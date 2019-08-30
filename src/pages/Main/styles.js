import styled, { keyframes, css } from 'styled-components';

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
  transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  ${props =>
    props.error === 1 &&
    css`
      animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    `}
  input {
    flex: 1;
    border: 1px solid ${props => (props.error ? 'red' : '#eee')};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;
export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    //aplica a estilização em todos menos o primeiro
    & + li {
      border-top: 1px solid #eee;
    }
    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
