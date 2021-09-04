import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Li = styled.li`
  flex: 0 0 30vmin;
  height: 50vmin;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  
  * {
    transition: 1s;
  }

  
  
  svg {
    width: 100%!important;
  }
  
  ${ ({hover, highlight})=>{
    switch (hover){
      case "glow":
          return `
              :hover {
                svg {
                  filter: drop-shadow(0 20px 50px ${highlight});
                  path {
                    fill: ${highlight};
                  }
                }
              }
          `
      case "background":
          return `
            :hover {
                svg {
                    background-color:${highlight}
                }
            }
          `
      default:
          return ""
    }
  } }
  
  ${({legend}) => {
      return legend ? `
          :hover:after {
            display: block;
            width: auto;
            content: "${legend}";
            flex-grow: 0;
          }      
      ` : ""
  }}
  
`

export default (props) => (
    <Li {...props}>
        <FontAwesomeIcon icon={props.icon}/>
    </Li>
)