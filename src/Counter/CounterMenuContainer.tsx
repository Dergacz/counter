import React from "react";
// import {CounterMenu} from "./CounterMenu";
// import {AppStateType} from "../store/reduxStore";
// import {connect} from "react-redux";
// import {decMaxValue, decMinValue, incMaxValue, incMinValue, setCount} from "../store/counterReducer";
//
//
// class CounterMenuContainer extends React.Component<CounterMenuType, CounterMenuType> {
//     render() {
//         return (
//             <div>
//                 <CounterMenu
//                     value={this.props.value}
//                     minValue={this.props.minValue}
//                     maxValue={this.props.maxValue}
//                     incMinValue={this.props.incMinValue}
//                     decMinValue={this.props.decMinValue}
//                     incMaxValue={this.props.incMaxValue}
//                     decMaxValue={this.props.decMaxValue}
//                     setCount={this.props.setCount}
//                     />
//             </div>
//         )
//     }
// }
//
// type MapStateToPropsType = {
//     value: number
//     minValue: number
//     maxValue: number
// }
//
// type MapDispatchToPropsType = {
//     incMinValue: () => void
//     decMinValue: () => void
//     incMaxValue: () => void
//     decMaxValue: () => void
//     setCount: () => void
// }
//
// export type CounterMenuType = MapStateToPropsType & MapDispatchToPropsType
//
// const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
//     return {
//         value: state.counter.value,
//         minValue: state.counter.minValue,
//         maxValue: state.counter.maxValue
//     }
// }
//
// export default connect(mapStateToProps, {
// incMinValue,
// decMinValue,
// incMaxValue,
// decMaxValue,
// setCount,
// })(CounterMenuContainer)