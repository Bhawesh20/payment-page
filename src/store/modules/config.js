import Vue from 'vue';

const state = {
	displayComponent:[
		{ name: "Recommanded", id: 0 },
		{ name: "Saved", id: 1 },
		{ name: "Others", id: 2 }
	],
	uiConfig:{
		iconSize:20,
		fontSize: 12,
		nameFontSize: 20,
		fontType: 'default',
		tabSize:70,
		iconType:{
			'recommanded':'circle',
			'saved': 'circle',
			'Others': 'right-arrow'
		}
	},
	recommanded:[
		'gPay'
	],
	saved:[
		'f2',
		'ptm'
	],
	paymentOptions:[
		{
			id:'g1',
			name: 'Google Pay',
			type: 'gPay',
			group: 'upi',
			icon:'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
		},
		{
			id:'f2',
			name: 'freecharge',
			type:'fcharge',
			group:'wallet',
			icon:'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
		},
		{
			id:'ptm',
			name: 'Paytm',
			type:'paytm',
			group:'wallet',
			icon:'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
		},
		{
			id:'1234-5678-1234-1235',
			name: 'HDFC BANK',
			type: 'hdfc-bank',
			group: 'card',
			icon:'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
		},
		{
			id:'1234-5678-1234-1235',
			name: 'HDFC BANK',
			type: 'hdfc-bank',
			group: 'card',
			icon:'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
		},

	]
}

const mutations = {
    setDisplayComponent(state, values){
        state.displayComponent = values;
    },
    setNameFontSize(state, value) {
        Vue.set(state.uiConfig, 'nameFontSize', value);
    },
    setLogoSize(state, value) {
        Vue.set(state.uiConfig, 'iconSize', value);
    },
    setTabSize(state, value) {
        Vue.set(state.uiConfig, 'tabSize', value);
    }
}

const getters ={
    getRecommandedOptions: (state,getters) => {
        let retList = [];
        for(let i=0; i < state.paymentOptions.length; i++){
            if(state.recommanded.indexOf(state.paymentOptions[i].type) !== -1){
                retList.push(state.paymentOptions[i]);
            }
        }
        return retList;
    },
    getSavedOptions: (state, getters) => {
        let retList = [];
        for(let i=0; i < state.paymentOptions.length; i++){
            if(state.saved.indexOf(state.paymentOptions[i].id) !== -1){
                retList.push(state.paymentOptions[i]);
            }
        }
        return retList;
    },

    getOtherOptions: (state, getters) =>{
        let retList = [];
        for(let i=0; i < state.paymentOptions.length; i++){
            if(state.recommanded.indexOf(state.paymentOptions[i].type) === -1 && state.saved.indexOf(state.paymentOptions[i].id) === -1){
                retList.push(state.paymentOptions[i]);
            }
        }
        return retList;
    }
}

export default {
  state,
  mutations,
  getters
}