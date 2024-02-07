import styled from 'styled-components';

export const DropDownWrapper = styled.div`
  background: #ffffff;
  box-shadow: 2px 4px 6px 2px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  position: relative;
  z-index: 5;
  top: 5px;
  width: 100%;
  overflow: scroll;
  height: 300px;
  .profile-div {
    display: flex;
    justify-content: center;
    align-items: center;
    .image-div {
      width: 40px;
      height: 40px;
      margin-right: 15px;
      img {
        width: 90%;
        height: 90%;
        background-size: cover;
      }
    }
  }
`;
