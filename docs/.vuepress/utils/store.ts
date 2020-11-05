export function setStore(key, value = {}) {
  const strValue = JSON.stringify(value);
  sessionStorage.setItem(key, strValue);
}

function hasStore(key){
	return !!sessionStorage.getItem(key);
}

export  function getStore(key) {
	if (!hasStore(key)) return false;
  const result = sessionStorage.getItem(key);
	const parseResult = JSON.parse(result);
	return parseResult
}

