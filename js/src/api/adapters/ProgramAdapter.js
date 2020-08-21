import ProgramApi from '../apis/Program';
import {
  listProgramsApiSuccess,
  listProgramsApiFailure,
} from '../../actions/programs';
import ProgramMapper from '../mappers/ProgramMapper';
import ErrorMapper from '../mappers/ErrorMapper';
import HTTPCodeException from '../handlers/HTTPCodeException';
import { handleFailure } from '../handlers/failure';

export default class ProgramAdapter {
  constructor(getAccessToken, driver) {
    this.programApi = new ProgramApi(getAccessToken, driver);
  }

  list() {
    return new Promise((resolve) => {
      this.programApi.list()
        .then(([status, body]) => {
          switch (status) {
            case 200: {
              const { programs } = ProgramMapper.fromAPIList(body.data);
              resolve(listProgramsApiSuccess(programs));
              return;
            }
            default:
              throw new HTTPCodeException({ status, body: ErrorMapper.fromAPI(body) });
          }
        })
        .catch(handleFailure(resolve, listProgramsApiFailure));
    });
  }
}
