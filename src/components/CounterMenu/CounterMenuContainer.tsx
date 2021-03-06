import React from "react";
import {CounterMenu} from "./CounterMenu";
import {AppStateType} from "../../store/reduxStore";
import {connect} from "react-redux";
import {
    setDisableIncReset,
    setError,
    setErrorMessage,
    setMaxValue,
    setMessage,
    setMinValue,
    setMinValueToCounter
} from "../../store/counterReducer";


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
                    error={this.props.error}
                    errorMessage={this.props.errorMessage}
                    setMinValue={this.props.setMinValue}
                    setMaxValue={this.props.setMaxValue}
                    setMinValueToCounter={this.props.setMinValueToCounter}
                    setError={this.props.setError}
                    setErrorMessage={this.props.setErrorMessage}
                    setMessage={this.props.setMessage}
                    setDisableIncReset={this.props.setDisableIncReset}
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
    error: boolean
    errorMessage: string
}

type MapDispatchToPropsType = {
    setMinValue: (minValue: number, disableBtnInc: boolean, disableBtnRes: boolean, disableBtnSet: boolean) => void
    setMaxValue: (maxValue: number, disableBtnInc: boolean, disableBtnRes: boolean, disableBtnSet: boolean) => void
    setMinValueToCounter: (minValue: number, disableBtnInc: boolean, disableBtnRes: boolean, disableBtnSet: boolean) => void
    setError: (error: boolean, disableBtnSet: boolean) => void
    setErrorMessage: (error: boolean, errorMessage: string) => void
    setMessage: (message: string) => void
    setDisableIncReset: (disableBtnInc: boolean, disableBtnRes: boolean) => void
}

export type CounterMenuType = MapDispatchToPropsType & MapStateToPropsType;


export const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    value: state.counter.value,
    minValue: state.counter.minValue,
    maxValue: state.counter.maxValue,
    disableBtnInc: state.counter.disableBtnInc,
    disableBtnRes: state.counter.disableBtnRes,
    disableBtnSet: state.counter.disableBtnSet,
    error: state.counter.error,
    errorMessage: state.counter.errorMessage
});


export default connect(mapStateToProps, {
    setMinValue,
    setMaxValue,
    setMinValueToCounter,
    setError,
    setErrorMessage,
    setMessage,
    setDisableIncReset
})(CounterMenu)