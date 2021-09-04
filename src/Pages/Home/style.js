import styled from "styled-components";

export default styled.main`
  display: flex;
  flex-direction: column;
  
  section {
    min-height: 100vh;
    padding: 5vh 0;
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;

    > * {
      width: 80vw;
    }
    
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
    
    p + * {
      padding-top: 10px;
    }
  }

  section:not(:first-child) {
    
    > *:first-child {
      user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      
      position: sticky;
      position: -webkit-sticky;
      top:6vh;
      padding-bottom: 2vh;
    }
    
    > *:first-child:after {
      content: "{";
      padding-left: 10px;
    }
    
    *:last-child{
      flex-grow: 1;
    }
    
    :after {
      content: "}";
      display: flex;
      width: 80vw;
    }
  }

  section:not(:first-child) > *:first-child,
  section:not(:first-child):after,
  strong{
    font-size: 2rem;

    background-image: linear-gradient( 112.9deg,  rgba(112,255,151,1) 6.2%, rgba(70,195,255,1) 99.7% );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    text-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px;
  }
  
  #Intro {
    ul {
      justify-content: flex-start;
      gap: 15px;
        li {
          margin: 0;
          max-height: 50px;
          max-width: 50px;
          
          svg {
            height: auto;
            width: 100%;
            padding: 10px;
            border-radius: 100px;
            border: solid 1px white;
          }
        }
    }
  }
`