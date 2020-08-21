import {
  checkHasId,
  removeUndefinedKeys,
  uniqueEntities
} from '../../utils/helpers';

export function fromAPI(apiProgram) {
  checkHasId(apiProgram);

  return {
    program: removeUndefinedKeys({
      id: apiProgram.id,
      name: apiProgram.name,
    }),
  };
}

export function fromAPIList(apiPrograms) {
  let result = {
    programs: [],
  };
  let allPrograms = [];

  apiPrograms.forEach(apiProgram => {
    const { program } = fromAPI(apiProgram);
    allPrograms.push(program);
  });

  result.programs = uniqueEntities(allPrograms);

  return result;
}

export default {
  fromAPI,
  fromAPIList
};
