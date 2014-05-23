(function(){

  function deepPick(object, json){
    object = _.pick(object, _.keys(json));
    _.each(_.keys(json), function(key){
      if(json[key] instanceof Object){
        object[key] = deepPick(object[key], json[key]);
      };
    });
    return object;
  }

  _.mixin({
    deepPick: deepPick
  });
})();
