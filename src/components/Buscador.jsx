import { Button, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from "react";

const Buscador = ({ filter, setFilter }) => {
    const [text, setText] = useState(filter.text);
    
    const onFilterChange = (e) => {
        setFilter({ ...filter, ...{
            [e.target.name] : e.target.value,
            "text"          : text
        }});
    };
    
    const onInput = (e) => {
        setText(e.target.value);
    };

    const Search = (e) => {
        e.preventDefault();
        setFilter({ ...filter, "text" : text });
    };

    const searchBoxRef = useRef(null);

    useEffect(() => {
        searchBoxRef.current.focus();
    }, []);

    return (
        <Form onSubmit={Search}>
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
                <Form.Group className="me-2 d-none d-sm-block text-center">
                    <Form.Label>Order</Form.Label>
                    <Form.Select name="order" onChange={onFilterChange} value={filter.order}>
                        <option value="name_asc">Name A-Z</option>
                        <option value="id_asc">Number ASC</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="me-2 text-center">
                    <Form.Label>Color</Form.Label>
                    <Form.Select name="color" onChange={onFilterChange} value={filter.color}>
                        <option value="">All</option>
                        <option value="black">black</option>
                        <option value="blue">blue</option>
                        <option value="brown">brown</option>
                        <option value="gray">gray</option>
                        <option value="green">green</option>
                        <option value="pink">pink</option>
                        <option value="purple">purple</option>
                        <option value="red">red</option>
                        <option value="white">white</option>
                        <option value="yellow">yellow</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="me-2 text-center">
                    <Form.Label>Type</Form.Label>
                    <Form.Select name="type" onChange={onFilterChange} value={filter.type}>
                        <option value="">All</option>
                        <option value="bug">bug</option>
                        <option value="dark">dark</option>
                        <option value="dragon">dragon</option>
                        <option value="electric">electric</option>
                        <option value="fairy">fairy</option>
                        <option value="fighting">fighting</option>
                        <option value="fire">fire</option>
                        <option value="flying">flying</option>
                        <option value="ghost">ghost</option>
                        <option value="grass">grass</option>
                        <option value="ground">ground</option>
                        <option value="ice">ice</option>
                        <option value="normal">normal</option>
                        <option value="poison">poison</option>
                        <option value="psychic">psychic</option>
                        <option value="rock">rock</option>
                        <option value="shadow">shadow</option>
                        <option value="steel">steel</option>
                        <option value="unknown">unknown</option>
                        <option value="water">water</option>
                    </Form.Select>
                </Form.Group>
                
                <Form.Group className="me-2 text-center">
                    <Form.Label>&nbsp;</Form.Label>
                    <InputGroup>
                        <Form.Control name="text" type="text" ref={searchBoxRef} onInput={onInput} value={text} placeholder="Number or Name" />
                        <Button type="submit" variant="light">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Button>
                    </InputGroup>
                </Form.Group>
            </div>
        </Form>
    );
};

export default Buscador;