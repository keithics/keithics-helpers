/*
 * keithics-helpers
 * http://www.freelance.ph
 *
 * Copyright (c) 2014 Keith Levi Lumanog
 * Licensed under the MIT license.
 */

'use strict';

exports.randomString = function(len, charSet) {
   charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
    	var randomPoz = Math.floor(Math.random() * charSet.length);
    	randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
};