const StringUtils = {
    /**
     * Capitalize the first character of a string.
     * @param {string} str
     * @returns {string}
     */
    ucfirst: function ( str ) {
        if ( ! str ) return '';
        return str.charAt( 0 ).toUpperCase() + str.slice( 1 );
    },

    /**
     * Capitalize the first character of each word in a string.
     * @param {string} str
     * @returns {string}
     */
    ucwords: function ( str ) {
        if ( ! str ) return '';
        return str
            .toLowerCase()
            .split( ' ' )
            .map( word => word.charAt( 0 ).toUpperCase() + word.slice( 1 ) )
            .join( ' ' );
    },

    decodeEntity: function ( html ) {
        const textarea = document.createElement( 'textarea' );
        textarea.innerHTML = html;
        return textarea.value;
    },
    
    /**
     * Format a number as currency.
     * @param {number} amount
     * @param {Object} config
     * @returns {string}
     */
    formatCurrency: function ( amount, config ) {
        const {
            symbol = '$',
            symbol_position = 'left',
            decimals = 2,
            decimal_separator = '.',
            thousand_separator = ','
        } = config || {};
    
        const isNegative = amount < 0;
        const absAmount = Math.abs( amount );
    
        // Format the number
        let formatted = absAmount
            .toFixed( decimals )
            .replace( /\B(?=(\d{3})+(?!\d))/g, thousand_separator )
            .replace( '.', decimal_separator );
    
        // Decode currency symbol (in case it's encoded)
        const decodedSymbol = StringUtils.decodeEntity( symbol );
    
        switch ( symbol_position ) {
            case 'left':
                formatted = decodedSymbol + formatted;
                break;
            case 'left_space':
                formatted = decodedSymbol + ' ' + formatted;
                break;
            case 'right':
                formatted = formatted + decodedSymbol;
                break;
            case 'right_space':
                formatted = formatted + ' ' + decodedSymbol;
                break;
        }
    
        return isNegative ? '-' + formatted : formatted;
    }

};

export default StringUtils;