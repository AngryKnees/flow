precision highp float;
uniform vec2 resolution;
uniform float time;

void main() {
    vec2 pos = gl_FragCoord.xy/resolution.xy;
    gl_FragColor=vec4(sin(pos.xyy + vec3(1.0, -.3, .6) * time) * 0.5 + 0.5, 1.0);
}