import ActionTypes from '../actions/ActionTypes';

var init = {
    year: '2017',
    countryOpts: [],
    chartType: "",
    indicators: {}
}

const visualiztionReducer = (state=init, action) => {
    var nextState= {...state}
    switch (action.type) {
        case ActionTypes.GET_COUNTRIES+"_FULFILLED":
            var countries = action.payload.data.countries;
            console.log(countries)
            nextState.countryOpts = countries.map((x) => {
                return { key: x.iso3, value: x.iso3, text: x.country }
            })
            break;

        case ActionTypes.GET_INDICATORS+'_FULFILLED':
            nextState.indicators = action.payload.data;
            break;
        default:
            return nextState;
    }

    return nextState;
}

export default visualiztionReducer;