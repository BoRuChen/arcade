import {Chess} from "./chess";
import {useState} from "react";

export const Board = () => {
    let item = []
    for (let i = 0 ;i < 20 ;i++){
        item[i] = []
        for (let j = 0 ;j < 20 ;j++){
            item[i][j] = 0
        }
    }
    const [lists, setLists] = useState(item);

    const setItems = (col,raw,who) => {
        console.log('testtt')
        let newList = [...lists]
        newList[col][raw] = who
        setLists(newList)
    }

    return(
        <div className='flex-col'>
            {lists.map((row,rowIndex) => {
                return <div key={rowIndex} className={`flex ${rowIndex===0?"":"-mt-0.5"}`}>
                    {row.map((col,colIndex) => {
                        return <Chess key={rowIndex+colIndex} col={colIndex} row={rowIndex} lists={lists} setItems={setItems}/>
                    })}
                </div>
            })}
        </div>
    )
}