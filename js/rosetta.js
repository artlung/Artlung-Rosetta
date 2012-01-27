var Rosetta = {
	maxIndex : 9,
	index : 0,
	increment : function(){
		this.index++;
	},
	mayIncrement : function() {
		return (this.index < this.maxIndex);
	},
	getIndex : function() {
		return this.index;
	}
};
