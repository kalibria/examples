import style from './MySelector.module.css'
import {MouseEventHandler, useState} from "react";

type CityDataType = {
    id: number
    name: string
    isSelected: boolean
}

export const MySelectorWrapper = () => {

    const cities: CityDataType[] = [
        {id: 1, name: 'Moscow', isSelected: true},
        {id: 2, name: 'Minsk', isSelected: false},
        {id: 3, name: 'Warsaw', isSelected: false},
        {id: 4, name: 'Kyiv', isSelected: false},
    ];

    const [items, setItems] = useState<CityDataType[]>(cities);
    const [isOpen, setIsOpen] = useState(false);


    const openSelect = () => {
        setIsOpen(!isOpen)
    }

    const selectItem = (id: number) => {
        // setItems([...items, items.filter(i => i.id === id).])
    }

    return (
        <div className={style.wrapper} onClick={openSelect}>
            {isOpen ? (
                    <div>{items.map((i, index) => <div key={index} className={style.listItem} onClick={selectItem(i.id)}>{i.name}</div>)}</div>)
                :
                <div className={style.listItem}>{items[0].name}</div>}
        </div>
    )
}