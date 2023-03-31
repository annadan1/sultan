const baseUrl = "http://localhost:3000";

export default {
  getGoodsPath: (): string => [baseUrl, "items"].join("/"),
};
