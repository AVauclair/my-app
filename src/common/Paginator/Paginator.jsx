import module from "./Paginator.module.css"

export const Paginator = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <div className={module.pages}>
        {pages.map(p => {
            return <span className={props.currentPage === p && module.currentPage}
            onClick = { (e) => props.onChangePage(p)}>{p}.</span> //tut tochka
        })}
    </div>
}

export default Paginator