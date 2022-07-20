import module from "./FormsControls.module.css"

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={module.formsControls + " " + (hasError ? module.error : "")}>
            <div><textarea {...input} {...props}/></div>
            {hasError && <span>Error</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={module.formsControls + " " + (hasError ? module.error : "")}>
            <div><input {...input} {...props}/></div>
            {hasError && <span>Error</span>}
        </div>
    )
}