var recipes = {
  'milk': '2 cups',
  'eggs': '3'
};

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function updateObjectsWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {key: value});
}