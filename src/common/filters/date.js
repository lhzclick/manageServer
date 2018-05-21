'use strict';

import Vue from 'vue';
/**
 * 格式化时间 
 * @param {string} date  
 * @param {string} pattern  
 * @return {string}         
 */
Vue.filter('date', function(date, pattern) {
	if (!date) {
		return '';
	}
	var time = date;
	if (date instanceof Date) {
		time = date.getTime();
	}
 	return Date.format(new Date(time), pattern);

});