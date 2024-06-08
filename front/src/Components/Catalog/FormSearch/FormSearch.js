import React, { useState } from 'react'
import './FormSearch.css'
import { FaPlus, FaMinus } from "react-icons/fa6";
import axios from 'axios';

const FormSearch = () => {
    const api = axios.create({
        baseURL: "http://localhost:8000"
    });
    const [company, setCompany] = useState([]);
    const [isActiveCompany, setIsActiveCompany] = useState(false);
    const [models, setModels] = useState([]);
    const [isActiveModels, setIsActiveModels] = useState(false);
    const [styles, setStyles] = useState([]);
    const [isActiveStyle, setIsActiveStyle] = useState(false);
    const [category, setCategory] = useState([]);
    const [isActiveCategory, setIsActiveCategory] = useState(false);
    const HandleCompanyBlock = () => {
        api.get("/shoes-company")
            .then(response => setCompany(response.data))
            .catch(error => console.error(error));
        setIsActiveCompany(!isActiveCompany);

    };
    const HandleModelsBlock = () =>{
        api.get("/shoes-models")
            .then(response => setModels(response.data))
            .catch(error => console.error(error));
        setIsActiveModels(!isActiveModels);
    };
    const HandleStyleBlock = () =>{
        api.get("/shoes-style")
        .then(response => setStyles(response.data))
        .catch(error => console.error(error))
        setIsActiveStyle(!isActiveStyle);
    }
    const HandleCategoryBlock = () =>{
        api.get("/shoes-category")
        .then(response => setCategory(response.data))
        .catch(error => console.error(error))
        setIsActiveCategory(!isActiveCategory);
    }
    return (
        <div>
            <div className={`filter-by-Company${isActiveCompany? "-active" : ""}`}>
                <p onClick={() => HandleCompanyBlock()}>Company {isActiveCompany ? <FaMinus /> : <FaPlus />} </p>
                {isActiveCompany ?
                    <div>
                        {company.map((info) => (
                            <div>
                                <p>{info.company}</p>
                            </div>
                        ))}
                    </div>
                    :
                    <></>
                }
            </div>
            <div className={`filter-by-Models${isActiveModels? "-active" : ""}`}>
                <p onClick={() => HandleModelsBlock()}>Models {isActiveModels ? <FaMinus /> : <FaPlus />} </p>
                {isActiveModels ?
                    <div>
                        {models.map((info) => (
                            <div>
                                <p>{info.model}</p>
                            </div>
                        ))}
                    </div>
                    :
                    <></>
                }
            </div>
            <div className={`filter-by-Style${isActiveStyle? "-active" : ""}`}>
                <p onClick={() => HandleStyleBlock()}>Styles {isActiveStyle ? <FaMinus /> : <FaPlus />} </p>
                {isActiveModels ?
                    <div>
                        {styles.map((info) => (
                            <div>
                                <p>{info.style}</p>
                            </div>
                        ))}
                    </div>
                    :
                    <></>
                }
            </div>
            <div className={`filter-by-Category${isActiveCategory? "-active" : ""}`}>
                <p onClick={() => HandleCategoryBlock()}>Category {isActiveCategory ? <FaMinus /> : <FaPlus />} </p>
                {isActiveCategory ?
                    <div>
                        {category.map((info) => (
                            <div>
                                <p>{info.category}</p>
                            </div>
                        ))}
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    )
}

export default FormSearch