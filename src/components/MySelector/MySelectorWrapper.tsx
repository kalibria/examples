import {useState} from "react";
import style from './MySelector.module.css'

export type CityDataType = {
    id: number
    name: string
}

export const MySelectorWrapper = () => {

    const cities: CityDataType[] = [
        {id: 1, name: 'Moscow'},
        {id: 2, name: 'Minsk'},
        {id: 3, name: 'Warsaw'},
        {id: 4, name: 'Kyiv'},
    ];

    const [items, setItems] = useState<CityDataType[]>(cities);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<CityDataType>(items[0])


    const openSelect = () => {
        setIsOpen(!isOpen)
    }
    const onClickHandler = (id: number) => {
        const selectedItem = items.find(i => i.id === id)
        if (selectedItem) {
            setSelectedItem(selectedItem)
        }
    }

    const handleBlur = () => {
        console.log("on blur")
    }


    return (
        <div className={style.wrapper} onClick={openSelect} >
            <div className={style.listItem}>{selectedItem.name}</div>
            {isOpen && (
                <div className={style.list} onBlur={handleBlur}>{items.map((i, index) => <div key={index} className={style.listItem} onClick={() => onClickHandler(i.id)}>{i.name}</div>)}</div>)
            }
        </div>
    )
}