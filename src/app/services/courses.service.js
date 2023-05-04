import http from "../../http-common";

class CoursesDataService {

  getAll() {
    return http.get("/courses/all");
  }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CoursesDataService();