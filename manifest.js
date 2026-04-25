const normalizeUnits = (manifest) => {
  const newManifest = {...manifest}
  if (newManifest.unit === "lb") {
    newManifest.weight *= 0.45
    newManifest.unit = "kg"
  }
  return new Object(newManifest)
}

const validateManifest = (manifest) => {
  const result = {};

  /* const lol = {
   weight: NaN
  } */

  if (manifest.containerId === undefined) {
  result.containerId = "Missing";
  } else if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0 || manifest.containerId === null) {
  result.containerId = "Invalid";
  }

  if (manifest.destination === undefined) {
  result.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim().length === 0 ) {
  result.destination = "Invalid"
  }

  if (manifest.weight === undefined) {
  result.weight = "Missing"
  } else if (typeof manifest.weight !== "number" || manifest.weight <= 0 || Number.isNaN(manifest.weight)) {
  result.weight = "Invalid"
  }

  if (manifest.unit === undefined) {
  result.unit = "Missing"
  } else if (manifest.unit !== "lb" && manifest.unit !== "kg") {
  result.unit = "Invalid"
  }

  if (manifest.hazmat === undefined) {
  result.hazmat = "Missing"
  } else if (typeof manifest.hazmat !== "boolean") {
  result.hazmat = "Invalid"
  }

  return result;

}

console.log(validateManifest({ containerId: -2 }));

/* 

const validateManifest = (manifest) => {
  let manifest = {...manifest}
  if (manifest.containerId === undefined) {
    manifest.containerId = "Missing"
  }
  if (manifest.destination === undefined) {
    manifest.destination = "Missing"
  }
  if (manifest.weight === undefined) {
    manifest.weight = "Missing"
  } 
  if (manifest.unit === undefined) {
    manifest.unit = "Missing"
  }
  if (manifest.hazmat === undefined) {
    manifest.hazmat = "Missing"
  }
  return new Object(manifest)
}

  const templateMissing = {
    containerId: "Missing",
    destination: "Missing",
    weight: "Missing",
    unit: "Missing",
    hazmat: "Missing"
  }
  const missing = {...templateMissing, ...manifest}

*/

