import module from "./Paginator.module.css"
import { useState } from "react";
import cn from 'classnames'

export const Paginator = (props, {portionSize = 10}) => {
    let pagesCount = Math.ceil(props.totalItemsCount/props.pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    // let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    // let rightPortionPageNumber = portionNumber * portionSize
    let leftPortionPageNumber = portionNumber
    let rightPortionPageNumber = portionNumber + portionSize
    //выше две переменные для параметров пагинации, сейчас оно на кнопку некст двигает вперед на одну, надо как-нибудь доделать

    return <div className={module.paginator}>
        { portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}

        {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber - 1)
        .map((p) => {
            return <span className={cn({[module.selectedPage]: props.currentPage === p}, module.pageNumber)}
            key={p}
            onClick = { (e) => props.onChangePage(p)}>{p}</span>
        })}
        {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
    </div>
}

export default Paginator