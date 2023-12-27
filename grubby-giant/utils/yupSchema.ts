import * as yup from 'yup';

export function createYupSchema(schema:any, config:any) {
  if (!schema || !config) return;
  const { name, validationType, validations = [] } = config;
  if (!yup[validationType]) {
    return schema;
  }
  let validator = yup[validationType]();
  validations?.forEach((validation) => {
    const { params, type } = validation;
    if (!validator[type]) {
      return;
    }
    validator = validator[type](...params);
  });
  schema[name] = validator;
  return schema;
}


interface Validation {
  params: any[];
  type: string;
}

interface Config {
  name: string;
  validationType: string;
  validations?: Validation[];
}

export const mobileField = yup
  .number()
  .min(10, 'Please Enter valid Phone no.')
  .max(10, 'Please Enter valid Phone no.');
