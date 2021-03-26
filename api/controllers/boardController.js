const mongoose = require("mongoose");
const board = mongoose.model("board");

exports.list_all_boards = (req, res) => {
  board
    .find({}, (err, boards) => {
      if (err) res.send(err);
      res.json(boards);
    })
    .sort({ _id: -1 });
};

exports.create_a_board = (req, res) => {
  const newBoard = new board(req.body);
  newBoard.save((err, board) => {
    if (err) res.send(err);
    res.json(board);
  });
};

exports.read_a_board = (req, res) => {
  board.findById(req.params.boardId, (err, board) => {
    if (err) res.send(err);
    res.json(board);
  });
};

exports.update_a_board = (req, res) => {
  board.findOneAndUpdate(
    { _id: req.params.boardId },
    req.body,
    { new: true },
    (err, board) => {
      if (err) res.send(err);
      res.json(board);
    }
  );
};

exports.delete_a_board = (req, res) => {
  board.deleteOne({ _id: req.params.boardId }, (err) => {
    if (err) res.send(err);
    res.json({
      message: "board successfully deleted",
      _id: req.params.boardId,
    });
  });
};
