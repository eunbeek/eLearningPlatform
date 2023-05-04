import http from "../../http-common";

class FaqsDataService {

  getAll() {
    return http.get("/faqs/all");
  }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new FaqsDataService();