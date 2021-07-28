import React from "react";
import {Counter} from "./Counter";
import {connect} from "react-redux";
import {AppStateType} from "../../store/reduxStore";
import {incValue, resetValue} from "../../store/counterReducer";

class CounterContainer extends React.Component<CounterType, CounterType> {
    render() {
        return (
            <div>
                <Counter
                    value={this.props.value}
                    minValue={this.props.minValue}
                    maxValue={this.props.maxValue}
                    disableBtnInc={this.props.disableBtnInc}
                    disableBtnRes={this.props.disableBtnRes}
                    error={this.props.error}
                    errorMessage={this.props.errorMessage}
                    message={this.props.message}
                    incValue={this.props.incValue}
                    resetValue={this.props.resetValue}
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
    error: boolean
    errorMessage: string
    message: string
}

type MapDispatchToPropsType = {
    incValue: () => void
    resetValue: () => void
}

export type CounterType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    value: state.counter.value,
    minValue: state.counter.minValue,
    maxValue: state.counter.maxValue,
    disableBtnInc: state.counter.disableBtnInc,
    disableBtnRes: state.counter.disableBtnRes,
    error: state.counter.error,
    errorMessage: state.counter.errorMessage,
    message: state.counter.message
})

export default connect(mapStateToProps, {
    incValue,
    resetValue
})(Counter)