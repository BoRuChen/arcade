

export const winJudgment = (lists,col,row,who) => {
    const role = who===1?"白棋":"黑棋"
    let count =1

    //橫豎
    for(let i = 1;i < 5;i++){
        if(lists[col+i][row] === who){
            count++
        }else {
            break
        }
    }
    for(let i = 1;i < 5;i++){
        if(lists[col-i][row] === who){
            count++
        }else {
            break
        }
    }
    if(count > 4){
        return role+"獲勝"
    }

    //直豎
    count = 1
    for(let i = 1;i < 5;i++){
        if(lists[col][row+i] === who){
            count++
        }else {
            break
        }
    }
    for(let i = 1;i < 5;i++){
        if(lists[col][row-i] === who){
            count++
        }else {
            break
        }
    }
    if(count > 4){
        return role+"獲勝"
    }

    //右上左下斜線
    count = 1
    for(let i = 1;i < 5;i++){
        if(lists[col+i][row+i] === who){
            count++
        }else {
            break
        }
    }
    for(let i = 1;i < 5;i++){
        if(lists[col-i][row-i] === who){
            count++
        }else {
            break
        }
    }
    if(count > 4){
        return role+"獲勝"
    }

    //左上右下斜線
    count = 1
    for(let i = 1;i < 5;i++){
        if(lists[col+i][row-i] === who){
            count++
        }else {
            break
        }
    }
    for(let i = 1;i < 5;i++){
        if(lists[col-i][row+i] === who){
            count++
        }else {
            break
        }
    }
    if(count > 4){
        return role+"獲勝"
    }

    return null

}