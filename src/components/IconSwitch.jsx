import viewList from '../assets/view_list.svg'
import viewModule from '../assets/view_module.svg'

import PropTypes from 'prop-types'

const IconSwicth = (props) => {
    const { icon, onSwitch } = props;

    return (
        <div className="button-wrapper">
            <button className='button' onClick={() => onSwitch(icon.iconView === 'view_module' ? 'view_list' : 'view_module')}> 
                <img className='button-icon' src={icon.iconView === 'view_module' ? viewList : viewModule}/> 
            </button>
        </div>
       
    )

}

IconSwicth.propTypes = {
    icon: PropTypes.object,
    onSwitch: PropTypes.func
}

export default IconSwicth;