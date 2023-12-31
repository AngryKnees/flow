import * as twgl from "twgl.js/dist/5.x/twgl-full.module";
import baseVert from "./shaders/base.vert";
import computeFrag from "./shaders/compute.frag";
import drawFrag from "./shaders/draw.frag";

const gl = document.querySelector("canvas").getContext("webgl");
const programInfo = twgl.createProgramInfo(gl, [
  baseVert,
  drawFrag
]);

const arrays = {
  position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
};

const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

function render(time) {
  twgl.resizeCanvasToDisplaySize(gl.canvas, window.devicePixelRatio);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  const uniforms = {
    time: time * 0.001,
    resolution: [gl.canvas.width, gl.canvas.height],
  };

  gl.useProgram(programInfo.program);
  twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
  twgl.setUniforms(programInfo, uniforms);
  twgl.drawBufferInfo(gl, bufferInfo);

  requestAnimationFrame(render);
}
requestAnimationFrame(render);
