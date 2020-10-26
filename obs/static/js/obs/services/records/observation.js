//
// This is our General Note model for use on the front end.
//
angular.module('opal.records').factory('Observation', function(){
        return function(record){
            if(!record.id){
                if(!record.datetime){
                    record.datetime = moment();
                }
            }
            console.log("observation.js included");
            console.log(JSON.stringify(record));

            return record;
        }
    });
