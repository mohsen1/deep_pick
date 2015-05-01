(function(){
  if(typeof window === 'object' && typeof _ === 'undefined'){
    throw new Error('Deep Pick Underscore plug-in expects _ in global context');
  }
  
  function deepPick(object, json){
    if(_.isArray(json) && _.isArray(object)){
      return _.map(object, function(item){
        if(_.isObject(item)) {
          return deepPick(item, json[0]);
        } else {
          return item;
        }
      });
    }
    object = _.pick(object, _.keys(json));
    _.each(_.keys(json), function(key){
      if(_.isObject(json[key] && object[key])){
        object[key] = deepPick(object[key], json[key]);
      };
    });
    return object;
  }

    if (typeof module !== 'undefined') {
      module.exports = deepPick;
    } else {
     _.mixin({
      deepPick: deepPick
    }); 
    }
})();
