
export const Chess = ({row,col,lists,setItems,who}) => {
    if (col === 19){
        return ""
    }
    if (row === 19){
        return ""
    }

    const isHere = (col,row) => {
      if(lists[col][row] === 1){
          return 'bg-white rounded-full'
      }else if(lists[col][row] === 2){
          return 'bg-black rounded-full'
      }else {
          return ''
      }
    }

    const isHave = (col,row) => {
        if(lists[col][row] === 1 || lists[col][row] === 2){
            return true
        }else {
            return false
        }
    }

    return(
        <div className={`w-[30px] h-[30px] bg-yellow-700 border-2 border-black relative ${col===0?"":"-ml-0.5"}`}>
            <div className={`w-[18px] h-[18px] absolute -top-2.5 -left-2.5 ${isHere(col,row)}`} onClick={() => isHave(col,row)?null:setItems(col,row,who)} />
            {col===18?<div className={`w-[18px] h-[18px] absolute -top-2.5 -right-2.5 ${isHere(19,row)}`} onClick={() => isHave(19,row)?null:setItems(19,row,who)}/>:''}
            {row===18?<div className={`w-[18px] h-[18px] absolute -bottom-2.5 -left-2.5 ${isHere(col,19)}`} onClick={() => isHave(col,19)?null:setItems(col,19,who)}/>:''}
            {col===18 &&　row===18?<div className={`w-[18px] h-[18px] absolute -bottom-2.5 -right-2.5 ${isHere(19,19)}`} onClick={() => isHave(19,19)?null:setItems(19,19,who)}/>:''}
        </div>
    )
}