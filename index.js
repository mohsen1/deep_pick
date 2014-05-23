(function(){
  _.deepPick = function(object, json){
    object = _.pick(object, Object.keys(json));
    Object.keys(json).forEach(function(key){
      if(json[key] instanceof Object){
        object[key] = _.deepPick(object[key], json[key]);
      };
    });
    return object;
  };
})();
