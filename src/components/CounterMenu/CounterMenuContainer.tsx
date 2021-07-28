import React from "react";
import {CounterMenu} from "./CounterMenu";
import {AppStateType} from "../../store/reduxStore";
import {connect} from "react-redux";
import {setMaxValue, setMinValue, setMinValueToCounter} from "../../store/counterReducer";


class CounterMenuContainer extends React.Component<CounterMenuType, CounterMenuType> {
    render () {
        return (
            <div>
                <CounterMenu
                    value={this.props.value}
                    minValue={this.props.minValue}
                    maxValue={this.props.maxValue}
                    disableBtnInc={this.props.disableBtnInc}
                    disableBtnRes={this.props.disableBtnRes}
                    disableBtnSet={this.props.disableBtnSet}
                    setMinValue={this.props.setMinValue}
                    setMaxValue={this.props.setMaxValue}
                    setMinValueToCounter={this.props.setMinValueToCounter}
                />
            </div>
        )
    }
}

type MapStateToPropsType = {
    value: number
    minValue: number
    maxValue: number
    disableBtnInc: boolean
    disableBtnRes: boolean
    disableBtnSet: boolean
}

type MapDispatchToProps = {
    setMinValue: (minValue: number, disableBtnInc: boolean, disableBtnRes: boolean, disableBtnSet: boolean) => void
    setMaxValue: (maxValue: number, disableBtnInc: boolean, disableBtnRes: boolean, disableBtnSet: boolean) => void
    setMinValueToCounter: (minValue: number, disableBtnInc: boolean, disableBtnRes: boolean, disableBtnSet: boolean) => void
}

export type CounterMenuType = MapDispatchToProps & MapStateToPropsType;


export const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    value: state.counter.value,
    minValue: state.counter.minValue,
    maxValue: state.counter.maxValue,
    disableBtnInc: state.counter.disableBtnInc,
    disableBtnRes: state.counter.disableBtnRes,
    disableBtnSet: state.counter.disableBtnSet
});


export default connect(mapStateToProps, {
    setMinValue,
    setMaxValue,
    setMinValueToCounter
})(CounterMenu)