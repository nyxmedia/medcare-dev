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
            console.log(JSON.stringify(record, function (obj, stack = []) {
                if (!obj || typeof obj !== 'object')
                    return obj;
                
                if (stack.includes(obj))
                    return null;
            
                let s = stack.concat([obj]);
            
                return Array.isArray(obj)
                    ? obj.map(x => decycle(x, s))
                    : Object.fromEntries(
                        Object.entries(obj)
                            .map(([k, v]) => [k, decycle(v, s)]));
            }));

            return record;
        }
    });
