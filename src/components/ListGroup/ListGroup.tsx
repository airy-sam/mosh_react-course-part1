import React, { useEffect } from "react";
import styled from 'styled-components'

const List = styled.ul`
    list-style: none;
    padding: 0;
`;


interface ListItemProps {
    active: boolean;
}
const ListItem = styled.li<ListItemProps>`
    padding: 5px 0;
    background: ${props => props.active ? "blue" : "none"}
`

interface Props {
    items: String[];
    heading: String;
    onSelectItem: (item: String) => void; // onClickItem
}


function ListGroup(props: Props) {

    const [pickItemIndex, setPickItemIndex] = React.useState<Number>(0)
    let { items, heading, onSelectItem } = props

    useEffect(() => {
        // console.log("Clicked", items.at(pickItemIndex as number))
    }, [pickItemIndex])


    const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, item: String, index: Number) => {
        // console.log(event)
        setPickItemIndex(index)
        onSelectItem(item)
    }

    const message = <p>No item found</p>

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && message}
            <List>
                {items.map((item, index) => (
                    <ListItem
                        active={index === pickItemIndex}
                        key={index}
                        onClick={(event) => handleClick(event, item, index)}>{item}</ListItem>
                ))}
            </List>
        </>
    );
}

export default ListGroup;