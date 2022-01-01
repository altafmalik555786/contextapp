import { useState } from 'react';
import { TableStyled } from '../styles/Table.styled'

const DogImage = (props) => {
    const [isLg, setIsLg] = useState(false);
    return (
        <TableStyled>
            <img src={props.item} alt="Dog Iamges" onClick={()=>setIsLg(!isLg)} className={`${ isLg ? 'lg-img' : '' }`}/>
            <button className="delete-btn" onClick={props.removeDog}>Delete</button>
        </TableStyled>
    )
}

export default DogImage
