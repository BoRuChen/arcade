

export const winJudgment = (lists,col,row,who) => {
    const role = who===1?"白棋":"黑棋"
    const string = "獲勝"
    let count =1

    //橫豎
    for(let i = 1;i < 5;i++){
        if(col+i <= 19){
            if(lists[col+i][row] === who){
                count++
            }else {
                break
            }
        }else {
            break
        }

    }
    for(let i = 1;i < 5;i++){
        if(col - i >= 0){
            if (lists[col - i][row] === who) {
                count++
            } else {
                break
            }
        }else {
            break
        }
    }
    if(count > 4){
        return role+string
    }

    //直豎
    count = 1
    for(let i = 1;i < 5;i++){
        if(row + i <= 19){
            if (lists[col][row + i] === who) {
                count++
            } else {
                break
            }
        }else {
            break
        }
    }
    for(let i = 1;i < 5;i++){
        if(row - i >= 0){
            if (lists[col][row - i] === who) {
                count++
            } else {
                break
            }
        }else {
            break
        }
    }
    if(count > 4){
        return role+string
    }

    //右上左下斜線
    count = 1
    for(let i = 1;i < 5;i++){
        if(col + i <= 19 && row + i <= 19){
            if (lists[col + i][row + i] === who) {
                count++
            } else {
                break
            }
        }else {
            break
        }
    }
    for(let i = 1;i < 5;i++){
        if(col - i >= 0 && row - i >= 0){
            if (lists[col - i][row - i] === who) {
                count++
            } else {
                break
            }
        }else {
            break
        }
    }
    if(count > 4){
        return role+string
    }

    //左上右下斜線
    count = 1
    for(let i = 1;i < 5;i++){
        if(col + i <= 19 && row - i >= 0){
            if (lists[col + i][row - i] === who) {
                count++
            } else {
                break
            }
        }else {
            break
        }
    }
    for(let i = 1;i < 5;i++){
        if(col - i >= 0 && row + i <= 19){
            if (lists[col - i][row + i] === who) {
                count++
            } else {
                break
            }
        }else {
            break
        }
    }
    if(count > 4){
        return role+string
    }

    return null

}