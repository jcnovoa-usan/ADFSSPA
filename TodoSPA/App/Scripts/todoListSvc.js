'use strict';
angular.module('todoApp')
.factory('todoListSvc', ['$http', function ($http) {
    return {
        getItems : function(){
            return $http.get('ADFSSPA/api/TodoList');
        },
        getItem : function(id){
            return $http.get('ADFSSPA/api/TodoList/' + id);
        },
        postItem : function(item){
            return $http.post('ADFSSPA/api/TodoList/',item);
        },
        putItem : function(item){
            return $http.put('ADFSSPA/api/TodoList/', item);
        },
        deleteItem : function(id){
            return $http({
                method: 'DELETE',
                url: 'ADFSSPA/api/TodoList/' + id
            });
        }
    };
}]);