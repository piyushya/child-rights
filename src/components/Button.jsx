import './styles/Button.css'

export default function Button({submitType="button", type="", title="you fked up", handleClick, style="blue", disabled=false}){
    return(
        <button type={submitType} disabled={disabled} className={`button button_${style} ${type}`} onClick={handleClick}>
            {title}
        </button>
    )
}