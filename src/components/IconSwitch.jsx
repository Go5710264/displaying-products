import viewList from '../assets/view_list.svg'
const IconSwicth = (props) => {
    const { icon, onSwitch } = props;
    console.log(icon)



    // return <button className='btn' onClick={() => props.onSwitch(props.icon)}> Сменить интерфейс </button>
    return (
        <div className="botton-wrapper">
            <button className='botton' onClick={() => switching(icon.iconView)}> <img src={viewList}/> </button>
        </div>
       
    )

}

const switching = (value) => {
    console.log(value);
};

export default IconSwicth;