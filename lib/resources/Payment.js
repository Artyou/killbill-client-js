(function(exports){

    var BASE_RESOURCE, _get, _post, Account;

    if (typeof require !== 'undefined') {
        var killbill = require('../killbill');
        BASE_RESOURCE = killbill.BASE_RESOURCE;
        _get = killbill._get;
        _post = killbill._post;

        Account = require('./Account')
    }
    else {
        BASE_RESOURCE = exports.BASE_RESOURCE;
        _get = exports._get;
        _post = exports._post;

        Account = exports.Account;
    }

    var Payment = {
        PAYMENT_RESOURCE: BASE_RESOURCE + '/payments',

        getByAccountId: function(accountId, callback) {
            _get(Account.ACCOUNT_RESOURCE + '/' + accountId + '/payments', {}, {}, callback);
        },

        processPayment: function(accountId, payment, user, reason, comment, params, callback) {
            if (typeof params === 'function') {
                callback = params;
                params = {};
            }
            var options = {user: user, reason: reason, comment: comment};
            _post(Account.ACCOUNT_RESOURCE + '/' + accountId + '/payments', payment, params, options, callback);
        }
    };

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = Payment;
    }
    else {
        exports.Payment = Payment;
    }

})(typeof exports === 'undefined'? this['K'] : exports);