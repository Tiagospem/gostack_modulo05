import styled from 'styled-components';

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }
  h1 {
    font-size: 24px;
    margin-top: 10px;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }
`;

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;
  opacity: ${props => (props.loading ? '0.1' : '1')};
  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    & + li {
      margin-top: 10px;
    }
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;
      strong {
        font-size: 16px;
        a {
          text-decoration: none;
          color: #333;
          &:hover {
            color: #7159c1;
          }
        }
        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          height: 20px;
          font-weight: 600;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }
      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const ButtonGroup = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: center;
  button {
    border: 0;
    padding: 15px;
    color: #fff;
    background: #7159c1;
    border-radius: 6px;
    margin-right: 10px;
    &:hover {
      opacity: 0.5;
      transition: 0.3s;
    }
  }
  span {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Filter = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #eee;
  padding-top: 20px;
  button {
    border: 0;
    padding: 10px;
    background: #7159c1;
    color: #fff;
    border-radius: 6px;
    margin-right: 5px;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
      transition: 0.5s;
    }
  }
`;
