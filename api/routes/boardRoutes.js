const boardBuilder = require("../controllers/boardController");

module.exports = (app) => {
  app
    .route("/dbboard")
    .get(boardBuilder.list_all_boards)
    .post(boardBuilder.create_a_board);

  app
    .route("/dbboard/write/:boardId")
    .get(boardBuilder.read_a_board)
    .put(boardBuilder.update_a_board)
    .delete(boardBuilder.delete_a_board);
};
