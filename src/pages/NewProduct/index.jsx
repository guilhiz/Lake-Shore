import { useState } from "react";
import * as S from './styles'
import BoxCategorys from "./BoxCategorys";
import FillForm from "./FIllForm";


function NewProduct() {
    const [category, setCategory] = useState("");

    return (
        <S.Container>
            {category === "" ? <BoxCategorys setCategory={setCategory} /> : <FillForm category={category} />}
        </S.Container>
    )
};
export default NewProduct