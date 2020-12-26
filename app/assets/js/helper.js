Number.prototype.formatCurrency = function () {
    return this.toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," );
};

String.prototype.littleText = function (len = 20) {
    return (this.length > len) ? this.substr(0, len) + '...' : this;
}