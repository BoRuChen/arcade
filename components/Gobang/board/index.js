import {Chess} from "./chess";
import {useState} from "react";
import {winJudgment} from "../../../model/gobang/winJudgment";

export const Board = () => {
    let item = []
    for (let i = 0 ;i < 20 ;i++){
        item[i] = []
        for (let j = 0 ;j < 20 ;j++){
            item[i][j] = 0
        }
    }
    const [lists, setLists] = useState(item);
    const [who, setWho] = useState(1);
    const [isOver, setIsOver] = useState(false);
    const [winner, setWinner] = useState(false);

    const setItems = (col,row,who) => {
        let newList = [...lists]
        newList[col][row] = who
        setLists(newList)

        if(who === 1){
            setWho(2)
        }else {
            setWho(1)
        }
        let message = winJudgment(lists,col,row,who)

        if(message != null){
            setIsOver(true)
            setWinner(message)
        }


    }
    const onResize = () => {
        setLists(item)
        setIsOver(false)
    }

    const Massage = () => {
      return <div className={`absolute top-0 left-0 z-10 w-full h-screen bg-gray-600/50 min-w-[600px]`}>
          <div className={`flex items-center justify-center h-screen w-screen`}>
              <div className={`z-20 w-[300px] h-[200px] flex items-center justify-center bg-white rounded-2xl shadow-inner`}>
                  <div className={`flex-col items-center justify-center`}>
                      <p className={`text-center`}>{winner}</p>
                      <div className={`mt-4`}>
                          <button
                              className={`px-5 py-2 rounded-full bg-blue-500 shadow-md hover:bg-blue-700 active:bg-blue-900 active:shadow-inner duration-300` }
                              onClick={onResize}
                          >
                              再一場
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    }

    return(
        <div className='flex-col'>
            {
                isOver? <Massage /> :''
            }
            {lists.map((row,rowIndex) => {
                return <div key={rowIndex} className={`flex ${rowIndex===0?"":"-mt-0.5"}`}>
                    {row.map((col,colIndex) => {
                        return <Chess key={rowIndex+colIndex} col={colIndex} row={rowIndex} lists={lists} setItems={setItems} who={who}/>
                    })}
                </div>
            })}
            <div className={`h-3`} />
            <div>目前下棋：{who===1?"白色":"黑色"}</div>
        </div>
    )
}