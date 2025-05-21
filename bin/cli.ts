import { playVideo } from "../src/index";

const file = process.argv[2];
const fps = parseInt(process.argv[3] || "12", 10);
const width = parseInt(process.argv[4] || "80", 10);

playVideo(file, { fps, width });
