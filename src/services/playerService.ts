import { Howl } from "howler";

class PlayerService extends Howl {}

const playerService = new PlayerService({
  src: ["assets/music/MuonRoiMaSaoCon.mp3"],
  html5: true,
  format: ["mp3"],
});

export default playerService;
