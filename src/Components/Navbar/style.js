import styled from "styled-components";

export default styled.header`
  position: sticky;
  position: -webkit-sticky;
  
  top: 0;
  left: 0;
  
  padding: 1vh;
  
  display: flex;
  justify-content: space-between;
  
  
  strong {
    content: "";
  }
  
  nav {
    content: "";
    
    display: flex;
    gap: 1vmin;
    
    
    > * {
      font-size: 1rem;
      display: block;
      padding: 1vmin;
      user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
    }
  }
`