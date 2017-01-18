(function(exports){

    var BASE_RESOURCE, _get, Account;

    if (typeof require !== 'undefined') {
        var killbill = require('../killbill');
        BASE_RESOURCE = killbill.BASE_RESOURCE;
        _get = killbill._get;

        Account = require('./Account')
    }
    else {
        BASE_RESOURCE = exports.BASE_RESOURCE;
        _get = exports._get;

        Account = exports.Account;
    }

    var Catalog = {
        CATALOG_RESOURCE: BASE_RESOURCE + '/catalog',

        get: function(params, callback) {
            if (typeof params === 'function') {
                callback = params;
                params = {};
            }
            _get(Catalog.CATALOG_RESOURCE, params, {}, callback);
        }
    };

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = Catalog;
    }
    else {
        exports.Catalog = Catalog;
    }

})(typeof exports === 'undefined'? this['K'] : exports);