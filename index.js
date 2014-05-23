(function(){
  if(typeof _ === 'undefined'){
    throw new Error('Deep Pick Underscore plug-in expects _ in global context');
  }

  function deepPick(object, json){
    object = _.pick(object, _.keys(json));
    _.each(_.keys(json), function(key){
      if(_.isObject(json[key])){
        object[key] = deepPick(object[key], json[key]);
      };
    });
    return object;
  }

  _.mixin({
    deepPick: deepPick
  });
})();
