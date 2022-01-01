import DogImage from "./DogImage";
import { TableStyled } from "../styles/Table.styled";
import { FlexImg } from "../styles/DogApi.styled";
import { useEffect } from "react";

function DogApi(props) {
  useEffect(() => {
    
    props.fetchDog();
  }, [props]);

 
  console.log("i am an idiot", props)
  return (
    <TableStyled>
      <h1>Here You See Dog API</h1>

      <div>
        {props.data && props.data.length
          ? props.data.map((item, index) => (
              <div key={index}>
                <FlexImg>
                  <DogImage item={item} removeDog={()=>props.removeDogImage({item:item, data:props.data})}/>
                </FlexImg>
              </div>
            ))
          : ""}
      </div>
    </TableStyled>
  );
}

export default DogApi;
