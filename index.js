function lowerCaseDrivers(drivers) {
  return drivers.map(driver.toLowerCase());
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    let name = driver.split(" ");
    return {firstName: name[0], lastName: name[1]};
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  })
}
