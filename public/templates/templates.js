// **Github:** https://github.com/teambition/gulp-ejs-template
//
// **License:** MIT
/* global module, define, setImmediate, window */

;(function(root, factory) {
  'use strict';

  if (typeof module === 'object' && module.exports) module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else root.templates = factory();
}(typeof window === 'object' ? window : this, function() {
  'use strict';
  var templates = {};

  templates['day-label-template']  = templates['day-label-template.ejs'] = function(it) {
    var locals = it, __output = "";
    ;__output += "<span name =\"day\"></span>\r\n";
    return __output.trim();
  };
  
  templates['day-template']  = templates['day-template.ejs'] = function(it) {
    var locals = it, __output = "";
    ;__output += "<span data-name=\"day\"></span>\r\n";
    return __output.trim();
  };
  
  templates['popup-template']  = templates['popup-template.ejs'] = function(it) {
    var locals = it, __output = "";
    ;__output += "\r\n    <div class = \"popup-front\">\r\n        <div class=\"title details-header\">\r\n            <h1> Add Purchase </h1>\r\n        </div>\r\n\r\n        <div class=\"popup-close\"></div>\r\n\r\n        <div class = \"content\" >\r\n            <div class = \"col-md-4\">\r\n                <label for = \"purchaseName\">Purchase name</label>\r\n                <input class = \"form-control\" placeholder = \"Enter purchase name\" id = \"purchaseName\" name = \"purchaseName\" />\r\n                <span class = \"warning\" data-name = \"purchaseName\">This field is required</span>\r\n            </div>\r\n\r\n            <div class = \"col-md-4\">\r\n                <label>Store name</label>\r\n                <input class = \"form-control\" placeholder = \"Enter store name\" id = \"storeName\" name = \"storeName\" />\r\n                <span class = \"warning\" data-name = \"storeName\">This field is required</span>\r\n            </div>\r\n\r\n            <div class = \"col-md-4\">\r\n                <label>Price</label>\r\n                <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\">$</span>\r\n                    <input class = \"form-control\" placeholder = \"0.00\" id = \"price\" name = \"price\" />\r\n\r\n                </div>\r\n                <span class = \"warning\" data-name = \"price\">Incorrect value</span>\r\n            </div>\r\n\r\n            <div class = \"col-md-12 description\">Description\r\n                <textarea class = \"col-md-12\" placeholder = \"Enter purchase description\" id = \"description\" name = \"description\" ></textarea>\r\n                <span class = \"warning pull-right\" data-name = \"description\">This field is required</span>\r\n            </div>\r\n        </div>\r\n        <div class = \"footer details-footer col-md-12\">\r\n            <button class = \"btn btn-primary\" id = \"add-popup\">Add</button>\r\n            <button class = \"btn btn-primary\" id = \"save-popup\">Save</button>\r\n            <button class = \"btn btn-default\" id = \"cancel-popup\">Cancel</button>\r\n            <button class = \"btn btn-warning pull-right\" id = \"remove\">Remove</button>\r\n        </div>\r\n    </div>\r\n";
    return __output.trim();
  };
  
  templates['purchase-manager-template']  = templates['purchase-manager-template.ejs'] = function(it) {
    var locals = it, __output = "";
    ;__output += "\r\n    <div class = \"col-md-12 navbar-purchase\"> Purchases </div>\r\n    <div class = \"days-container col-md-3\">\r\n        <label class = \"days-info\">Purchases by day</label>\r\n        <ul id = \"list\" class = \"list\">\r\n        </ul>\r\n    </div>\r\n    <div class = \"col-md-9 purchase-container\">\r\n        <div id = \"purchases\">\r\n            <div class = \"day-info\">\r\n                <label id = \"day-label\">\r\n\r\n                </label>\r\n                <label>Purchases\r\n                </label>\r\n                <button type = \"button\" class = \"btn btn-primary pull-right add-purchase\" id = \"popup\">Add Purchase</button>\r\n            </div>\r\n\r\n            <div class = \"table-container col-md-12\">\r\n                <table class = \"table table-striped purchases-list\">\r\n                    <thead>\r\n                    <th class = \"col-md-2\">Purchase Name</th>\r\n                    <th class = \"col-md-2\">Store Name</th>\r\n                    <th class = \"col-md-2\">Description</th>\r\n                    <th class = \"col-md-2\">Price</th>\r\n                    <th class = \"col-md-2\"></th>\r\n                    </thead>\r\n                    <tbody class = \"purchase-list\">\r\n\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n";
    return __output.trim();
  };
  
  templates['purchase-raw-template']  = templates['purchase-raw-template.ejs'] = function(it) {
    var locals = it, __output = "";
    ;__output += "\r\n    <td name=\"purchaseName\"></td><td name=\"storeName\"></td><td name=\"description\"></td><td name=\"price\"></td><td><button class = \"delete-btn\"></button></td>\r\n";
    return __output.trim();
  };

  var ejs = {
    locals: {},
    get: getTpl,
    render: render
  };
  return ejs;

  function render(tplName, data) {
    var it  = copy({}, ejs.locals);
    return getTpl(tplName)(copy(it, data));
  }

  function getTpl(tplName) {
    return templates[tplName];
  }

  function escape(markup) {
    if (!markup) return '';
    return String(markup)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/'/g, '&#39;')
      .replace(/"/g, '&quot;');
  }

  function copy(to, from) {
    from = from || {};
    for (var key in from) to[key] = from[key];
    return to;
  }
}));
