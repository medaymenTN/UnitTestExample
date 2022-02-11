import React from 'react'
import {connect} from 'react-redux';
import {getRedColorItems} from '../store/dataSelector'
function ConnectedComponent(props) {
    const {data,redColors} = props;
    React.useEffect(()=>{
        console.log(data)
        console.log(redColors)
    },[])
     
  return (
    <div>ConnectedComponent</div>
  )
}


const mapStateToProps = (state)=>({
    data: state.dataReducer.data,
    redColors: getRedColorItems(state),
})
export default connect(mapStateToProps,null)(ConnectedComponent);