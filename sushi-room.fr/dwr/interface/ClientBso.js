
if (typeof this['dwr'] == 'undefined') this.dwr = {};
if (typeof dwr['engine'] == 'undefined') dwr.engine = {};
if (typeof dwr.engine['_mappedClasses'] == 'undefined') dwr.engine._mappedClasses = {};

if (window['dojo']) dojo.provide('dwr.interface.ClientBso');

if (typeof this['ClientBso'] == 'undefined') ClientBso = {};

ClientBso._path = '/dwr';





ClientBso.insert = function(p0, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'insert', arguments);
};





ClientBso.update = function(p0, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'update', arguments);
};





ClientBso.queryById = function(p0, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'queryById', arguments);
};





ClientBso.queryByEmail = function(p0, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'queryByEmail', arguments);
};






ClientBso.login = function(p0, p1, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'login', arguments);
};





ClientBso.delClient = function(p0, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'delClient', arguments);
};





ClientBso.getSessionColumnName = function(p0, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'getSessionColumnName', arguments);
};





ClientBso.getSessionColumnValue = function(p0, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'getSessionColumnValue', arguments);
};




ClientBso.queryAll = function(callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'queryAll', arguments);
};






ClientBso.queryAll = function(p0, p1, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'queryAll', arguments);
};





ClientBso.queryWhereNameLike = function(p0, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'queryWhereNameLike', arguments);
};







ClientBso.queryWhereNameLike = function(p0, p1, p2, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'queryWhereNameLike', arguments);
};





ClientBso.queryWhereAddressLike = function(p0, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'queryWhereAddressLike', arguments);
};







ClientBso.queryWhereAddressLike = function(p0, p1, p2, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'queryWhereAddressLike', arguments);
};





ClientBso.queryWhereTelephoneLike = function(p0, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'queryWhereTelephoneLike', arguments);
};







ClientBso.queryWhereTelephoneLike = function(p0, p1, p2, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'queryWhereTelephoneLike', arguments);
};





ClientBso.queryWhereEmailLike = function(p0, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'queryWhereEmailLike', arguments);
};







ClientBso.queryWhereEmailLike = function(p0, p1, p2, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'queryWhereEmailLike', arguments);
};





ClientBso.queryWhereAreaLike = function(p0, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'queryWhereAreaLike', arguments);
};







ClientBso.queryWhereAreaLike = function(p0, p1, p2, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'queryWhereAreaLike', arguments);
};







ClientBso.updatePassword = function(p0, p1, p2, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'updatePassword', arguments);
};






ClientBso.updatePassword = function(p0, p1, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'updatePassword', arguments);
};




ClientBso.getCountOfAll = function(callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'getCountOfAll', arguments);
};





ClientBso.getCountOfAddressLike = function(p0, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'getCountOfAddressLike', arguments);
};





ClientBso.getCountOfAreaLike = function(p0, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'getCountOfAreaLike', arguments);
};





ClientBso.getCountOfEmailLike = function(p0, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'getCountOfEmailLike', arguments);
};





ClientBso.getCountOfNameLike = function(p0, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'getCountOfNameLike', arguments);
};





ClientBso.getCountOfTelephoneLike = function(p0, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'getCountOfTelephoneLike', arguments);
};





ClientBso.getSessionStart = function(p0, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'getSessionStart', arguments);
};





ClientBso.getSessionPageSize = function(p0, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'getSessionPageSize', arguments);
};





ClientBso.hasSameEmail = function(p0, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'hasSameEmail', arguments);
};





ClientBso.revertClient = function(p0, callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'revertClient', arguments);
};




ClientBso.updateRegion = function(callback) {
return dwr.engine._execute(ClientBso._path, 'ClientBso', 'updateRegion', arguments);
};


