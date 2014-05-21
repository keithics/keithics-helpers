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

/*
	Direct port from codeigniter
*/
exports.ellipsize = function(str, max_length, position, ellipsis){
		var ellipsis = ellipsis ||  '&hellip;';
		var position = position ||  1;
		var str = str.trim();
		var end;
		// Is the string long enough to ellipsize?
		if (str.length <= max_length)
		{
			return str;
		}

		var beg = str.substr(0, Math.floor(max_length * position));

		position = (position > 1) ? 1 : position;

		if (position == 1)
		{
			end = str.substr(0, -(max_length - beg.length));
		}
		else
		{
			end = str.substr(-(max_length - beg.length));
		}

		return beg+ellipsis+end;


};

exports.addToSetUnique = function(arr,data,key,value){
        var dupe = false;
        
        for(var i = 0; i < arr.length ; i++){
            if(arr[i][key] == value){
                dupe = true;
            }
        }
        if(dupe){
            arr.push(data);
        }

        return arr;
    }
