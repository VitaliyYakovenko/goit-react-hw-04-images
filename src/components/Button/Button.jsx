import {useState} from "react";
import PropTypes from 'prop-types';
import css from "./Button.module.css"

export default function Button ({onSubmit})  {
    const [page, setPage] = useState(0);

    const onAddPage = (e) => {
        setPage((prev) => prev + 1);
        onSubmit(page);
    }
    
    return (<><button className={css.Button} onClick={onAddPage}>Load more</button></>)
} 

Button.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

