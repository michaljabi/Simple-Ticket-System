export default (valueName, className) => {
  throw new Error(`Property '${valueName}' is required for ${className}`) ;
}