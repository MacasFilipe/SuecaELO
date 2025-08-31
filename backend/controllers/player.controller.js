import Player from "../models/player.model.js";

export const getPlayers = async (req, res) => {
  try {
    const players = await Player.findAll({});
    res.status(200).json({ success: true, data: players });
  } catch (error) {
    console.log("Error in fetching players:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createPlayer = async (req, res) => {
  const player = req.body;

  if (!player.name) {
    return res.status(400).json({ success: false, message: "Please provide all fields" });
  }

  try {
    const newPlayer = await Player.create(player); 
    res.status(201).json({ success: true, data: newPlayer });
  } catch (error) {
    console.error("Error in Create Player:", error.message);
    res.status(500).json({success: false, message: "Server Error"});
  }
};

export const updatePlayer= async (req, res) => {
  const { id } = req.params;
  const player = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid Player Id" });
  }

  try {
    const updatedPlayer = await Player.findByIdAndUpdate(id, player, { new: true });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.log("Error in Update Product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deletePlayer = async (req, res) => {
  const { id } = req.params;
  const player = await Player.findById(id);
  console.log(player);

  if (!player) {
    return res.status(404).json({ success: false, message: "Invalid Player Id" });
  }
  
  try {
    // await Player.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Player deleted" });
  } catch (error) {
    console.log("Error in Delete Product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
