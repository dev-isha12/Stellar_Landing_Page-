import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const arrow = "\u2192";
const star = "\u2605";
const sparkle = "\u2726";

const tickerForward = [
  "Brand Identity",
  "Motion Design",
  "3D Worlds",
  "Web Experiences",
  "Art Direction",
  "Creative Strategy",
  "Brand Identity",
  "Motion Design",
  "3D Worlds",
  "Web Experiences",
  "Art Direction",
  "Creative Strategy"
];

const tickerReverse = [
  "Typography",
  "Spatial Design",
  "Installations",
  "Campaigns",
  "Editorial",
  "Experience Design",
  "Typography",
  "Spatial Design",
  "Installations",
  "Campaigns",
  "Editorial",
  "Experience Design"
];

const workItems = [
  {
    tag: "Brand / Digital",
    number: "01 - 2024",
    name: "Aura Collective",
    type: "Brand Identity & Digital Experience",
    year: "Luxury - Lifestyle - Global",
    c1: 0xc9a84c,
    c2: 0x6b4400,
    kp: 2,
    kq: 3
  },
  {
    tag: "Architecture / 3D",
    number: "02 - 2024",
    name: "Obsidian Tower",
    type: "Architecture Visualization & Campaign",
    year: "Real Estate - Premium - Dubai",
    c1: 0x4a90d9,
    c2: 0x0a2a6b,
    kp: 3,
    kq: 4
  },
  {
    tag: "Motion / Branding",
    number: "03 - 2024",
    name: "Luminary",
    type: "Motion Identity & Brand Film",
    year: "Tech - Venture - New York",
    c1: 0xc44c8a,
    c2: 0x5a0040,
    kp: 2,
    kq: 5
  },
  {
    tag: "Product / UX",
    number: "04 - 2023",
    name: "Nova Systems",
    type: "Product Design & Design System",
    year: "SaaS - B2B - San Francisco",
    c1: 0x2aaa7a,
    c2: 0x0a3a28,
    kp: 3,
    kq: 5
  },
  {
    tag: "Fashion / Editorial",
    number: "05 - 2023",
    name: "Velvet Theory",
    type: "Fashion Identity & Editorial Direction",
    year: "Fashion - Couture - Paris",
    c1: 0xe04444,
    c2: 0x6b1010,
    kp: 4,
    kq: 3
  }
];

const philosophies = [
  {
    num: "01",
    title: "Restraint is power",
    body: "We subtract until only the essential remains. The best design is the one you don't notice - until you can't imagine it any other way.",
    icon: "\u25e6"
  },
  {
    num: "02",
    title: "Emotion before logic",
    body: "Every project begins with a feeling - a desired emotional state. Logic follows to make it real, repeatable, and scalable.",
    icon: "\u25ce"
  },
  {
    num: "03",
    title: "Time is the material",
    body: "Motion, rhythm, pacing - we treat time as a design material. The right moment transforms good into unforgettable.",
    icon: "\u25f7"
  }
];

const services = [
  ["01", "Brand Identity", "Logos, systems, visual languages that endure time and culture."],
  ["02", "Motion & Film", "Title sequences to brand films - movement that says what words cannot."],
  ["03", "Digital Experiences", "Web and interactive design that respects the visitor's intelligence."],
  ["04", "3D & Spatial", "Immersive environments for exhibitions, AR, and next-gen media."],
  ["05", "Creative Direction", "Strategic creative leadership for campaigns and brand evolutions."]
];

const processSteps = [
  ["01", "Discover", "Deep dive into your world, audience, and ambitions. We listen more than we speak."],
  ["02", "Define", "A strategic creative brief that becomes the north star for every decision made."],
  ["03", "Design", "Explorations, refinements, and the moment everything clicks into place."],
  ["04", "Deliver", "Flawless execution with handoff assets, documentation, and ongoing support."]
];

const testimonials = [
  {
    quote: (
      <>
        <span className="text-goldLight">Stellar</span> didn't build us a brand - they built us a universe. Every single touchpoint feels alive, intentional, and impossible to ignore.
      </>
    ),
    initials: "AK",
    name: "Amara Klein",
    role: "CEO, Aura Collective",
    gradient: "linear-gradient(135deg,#A8772A,#3A2A0A)"
  },
  {
    quote: (
      <>
        Working with this team was like finding artists who also understand business. That combination is <span className="text-goldLight">extraordinarily rare</span> - and invaluable.
      </>
    ),
    initials: "JM",
    name: "Jonas Meredith",
    role: "Founder, Obsidian Tower",
    gradient: "linear-gradient(135deg,#2A5A9B,#0A1A3A)"
  },
  {
    quote: (
      <>
        The motion identity they crafted has become the most recognised element of our brand globally. We receive comments about it <span className="text-goldLight">every single week</span>.
      </>
    ),
    initials: "SV",
    name: "Sofia Vega",
    role: "CMO, Luminary",
    gradient: "linear-gradient(135deg,#8A3A7A,#2A0A20)"
  },
  {
    quote: (
      <>
        They pushed us to think bigger than we dared. The result was something we <span className="text-goldLight">couldn't have imagined</span> alone - and it changed our trajectory.
      </>
    ),
    initials: "RC",
    name: "Ryo Chen",
    role: "CTO, Nova Systems",
    gradient: "linear-gradient(135deg,#2A7A4A,#0A2A18)"
  }
];

function useCursor() {
  useEffect(() => {
    const dot = document.getElementById("dot");
    const ring = document.getElementById("ring");
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (!dot || !ring || !finePointer) return undefined;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let frameId = 0;

    const onMove = (event) => {
      mx = event.clientX;
      my = event.clientY;
    };

    const onEnter = () => document.body.classList.add("hov");
    const onLeave = () => document.body.classList.remove("hov");

    document.addEventListener("mousemove", onMove);
    const interactive = document.querySelectorAll("a,button,.svc-row,.wcard-box,.testi-btn,.phil-card,.process-step");
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const tick = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      frameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("mousemove", onMove);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      document.body.classList.remove("hov");
    };
  }, []);
}

function useScrollProgress() {
  useEffect(() => {
    const progress = document.getElementById("prog");
    if (!progress) return undefined;

    const update = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      progress.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : "0%";
    };

    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => window.removeEventListener("scroll", update);
  }, []);
}

function disposeScene(scene) {
  scene.traverse((item) => {
    if (item.geometry) item.geometry.dispose();
    if (item.material) {
      const materials = Array.isArray(item.material) ? item.material : [item.material];
      materials.forEach((material) => material.dispose());
    }
  });
}

function createWorkScene(canvas, item) {
  const rect = canvas.getBoundingClientRect();
  const width = Math.max(rect.width || 460, 1);
  const height = 380;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(width, height, false);
  renderer.setClearColor(0x08081a, 1);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
  camera.position.z = 28;

  const material = new THREE.ShaderMaterial({
    uniforms: {
      t: { value: 0 },
      c1: { value: new THREE.Color(item.c1) },
      c2: { value: new THREE.Color(item.c2) }
    },
    vertexShader: `
      varying vec3 vN;
      varying vec3 vP;
      uniform float t;
      void main(){
        vN=normalMatrix*normal;
        vP=(modelViewMatrix*vec4(position,1.)).xyz;
        gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
      }
    `,
    fragmentShader: `
      varying vec3 vN;
      varying vec3 vP;
      uniform vec3 c1;
      uniform vec3 c2;
      uniform float t;
      void main(){
        float f=dot(normalize(vN),normalize(vec3(.5,.8,1.)));
        f=clamp(f,0.,1.);
        float rim=1.-abs(dot(normalize(vN),normalize(-vP)));
        rim=pow(rim,3.);
        vec3 col=mix(c2*vec3(.2),c1,f*f)+c1*rim*.6;
        float pulse=.5+.5*sin(t+vP.x*.5);
        col+=c1*.05*pulse;
        gl_FragColor=vec4(col,1.);
      }
    `,
    side: THREE.FrontSide
  });

  const mesh = new THREE.Mesh(new THREE.TorusKnotGeometry(5, 1.8, 200, 24, item.kp, item.kq), material);
  scene.add(mesh);

  const lightA = new THREE.PointLight(item.c1, 3, 60);
  lightA.position.set(10, 10, 10);
  scene.add(lightA);

  const lightB = new THREE.PointLight(item.c2, 2, 40);
  lightB.position.set(-10, -10, 5);
  scene.add(lightB);
  scene.add(new THREE.AmbientLight(0x111120, 0.4));

  return { renderer, scene, camera, mesh, material };
}

function useThreeScenes(bgRef, workRefs, aboutRef) {
  useEffect(() => {
    const canvas = bgRef.current;
    if (!canvas) return undefined;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    renderer.setClearColor(0x07070e, 1);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 300);
    camera.position.z = 60;

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 2800;
    const positions = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);

    for (let i = 0; i < starCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 240;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 240;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 220;
      sizes[i] = Math.random() * 2;
    }

    starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const starMaterial = new THREE.ShaderMaterial({
      uniforms: { t: { value: 0 } },
      vertexShader: `
        attribute float size;
        uniform float t;
        varying float va;
        void main(){
          va=.25+.75*abs(sin(t*.35+position.x*.07));
          gl_PointSize=size*(1.+.4*sin(t*.8+position.y*.15));
          gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
        }
      `,
      fragmentShader: `
        varying float va;
        void main(){
          float d=length(gl_PointCoord-.5);
          if(d>.5) discard;
          gl_FragColor=vec4(.94,.87,.65,(1.-d*2.)*va*.5);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    scene.add(new THREE.Points(starGeometry, starMaterial));

    const orbMaterial = new THREE.ShaderMaterial({
      uniforms: { t: { value: 0 }, m: { value: new THREE.Vector2() } },
      vertexShader: `
        uniform float t;
        varying vec3 vN;
        varying vec3 vP;
        void main(){
          vN=normal;
          vP=position;
          float n=sin(position.x*.6+t)*cos(position.y*.6+t)*.8+sin(position.z*.6+t*.7)*.4;
          vec3 p=position+normal*n;
          gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
        }
      `,
      fragmentShader: `
        uniform float t;
        uniform vec2 m;
        varying vec3 vN;
        void main(){
          vec3 g1=vec3(.66,.47,.17);
          vec3 g2=vec3(.04,.04,.12);
          vec3 g3=vec3(.85,.68,.28);
          float f=dot(vN,normalize(vec3(m.x*.8,m.y*.8,1.)));
          f=clamp(f,0.,1.);
          float rim=1.-abs(dot(vN,vec3(0,0,1)));
          rim=pow(rim,2.2);
          float pulse=.5+.5*sin(t*.7);
          vec3 col=mix(g2,mix(g1,g3,f),f*.5+rim*.7+pulse*.05);
          gl_FragColor=vec4(col,.15+rim*.7+pulse*.05);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      depthWrite: false
    });

    const orb = new THREE.Mesh(new THREE.SphereGeometry(12, 80, 80), orbMaterial);
    orb.position.set(18, -4, 0);
    scene.add(orb);

    const orb2Material = orbMaterial.clone();
    orb2Material.uniforms = { t: { value: 0 }, m: { value: new THREE.Vector2() } };
    const orb2 = new THREE.Mesh(new THREE.SphereGeometry(5, 48, 48), orb2Material);
    orb2.position.set(-22, 10, -20);
    scene.add(orb2);

    for (let i = 0; i < 3; i += 1) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(15 + i * 8, 0.015, 2, 120),
        new THREE.MeshBasicMaterial({ color: 0xa8772a, transparent: true, opacity: 0.06 - i * 0.015 })
      );
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      ring.userData.ax = Math.random() * 0.003;
      ring.userData.ay = Math.random() * 0.002;
      scene.add(ring);
    }

    const dustGeometry = new THREE.BufferGeometry();
    const dustCount = 500;
    const dustPositions = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount; i += 1) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 120;
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 50 - 10;
    }

    dustGeometry.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));
    scene.add(
      new THREE.Points(
        dustGeometry,
        new THREE.PointsMaterial({
          color: 0xa8772a,
          size: 0.15,
          transparent: true,
          opacity: 0.22,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        })
      )
    );

    const workScenes = workItems
      .map((item, index) => {
        const workCanvas = workRefs.current[index];
        return workCanvas ? createWorkScene(workCanvas, item) : null;
      })
      .filter(Boolean);

    let aboutRenderer;
    let aboutScene;
    let aboutCamera;
    let aboutGroup;
    let aboutParticleMaterial;
    const aboutCanvas = aboutRef.current;

    if (aboutCanvas) {
      const rect = aboutCanvas.getBoundingClientRect();
      const width = Math.max(rect.width || 600, 1);
      const height = Math.max(rect.height || 600, 1);

      aboutRenderer = new THREE.WebGLRenderer({ canvas: aboutCanvas, antialias: true, alpha: true });
      aboutRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      aboutRenderer.setSize(width, height, false);
      aboutRenderer.setClearColor(0x000000, 0);

      aboutScene = new THREE.Scene();
      aboutCamera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
      aboutCamera.position.z = width < 600 ? 32 : 25;
      aboutGroup = new THREE.Group();

      const geometry = new THREE.BufferGeometry();
      const count = 1450;
      const points = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const sizes = new Float32Array(count);
      const arms = 5;
      const maxRadius = 12.5;

      for (let i = 0; i < count; i += 1) {
        const branch = (i % arms) * ((Math.PI * 2) / arms);
        const radius = Math.pow(Math.random(), 0.58) * maxRadius;
        const spin = radius * 0.8;
        const scatter = Math.pow(Math.random(), 2.1) * (0.18 + radius * 0.08);
        const angle = branch + spin + (Math.random() - 0.5) * 0.62;
        const center = Math.max(0, 1 - radius / maxRadius);
        const outer = 1 - center;
        const dust = Math.random();

        points[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * scatter;
        points[i * 3 + 1] = Math.sin(angle) * radius + (Math.random() - 0.5) * scatter;
        points[i * 3 + 2] = (Math.random() - 0.5) * (4 + outer * 5);

        colors[i * 3] = 0.86 + center * 0.12 + dust * 0.05;
        colors[i * 3 + 1] = 0.45 + center * 0.35 + dust * 0.08;
        colors[i * 3 + 2] = 0.58 + outer * 0.25 - center * 0.28;
        sizes[i] = 1.35 + Math.random() * 2.6 + outer * 0.9;
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(points, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

      aboutParticleMaterial = new THREE.ShaderMaterial({
        uniforms: { t: { value: 0 } },
        vertexShader: `
          attribute float size;
          attribute vec3 color;
          varying vec3 vColor;
          uniform float t;

          void main(){
            vColor=color;
            vec3 p=position;
            float pulse=.7+.3*sin(t*1.6+position.x*.8+position.y*.5);
            vec4 mvPosition=modelViewMatrix*vec4(p,1.);
            gl_PointSize=size*(56.0/-mvPosition.z)*pulse;
            gl_Position=projectionMatrix*mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;

          void main(){
            vec2 edge=min(gl_PointCoord,1.0-gl_PointCoord);
            float frame=smoothstep(0.02,0.08,min(edge.x,edge.y));
            gl_FragColor=vec4(vColor,0.86*frame);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });

      aboutGroup.add(
        new THREE.Points(
          geometry,
          aboutParticleMaterial
        )
      );

      const coreGeometry = new THREE.BufferGeometry();
      const coreCount = 460;
      const corePoints = new Float32Array(coreCount * 3);
      const coreColors = new Float32Array(coreCount * 3);
      const coreSizes = new Float32Array(coreCount);

      for (let i = 0; i < coreCount; i += 1) {
        const p = i / coreCount;
        const radius = Math.pow(p, 0.86) * 2.35;
        const angle = p * Math.PI * 16.5;
        const jitter = (1 - p) * 0.025 + p * 0.11;

        corePoints[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * jitter;
        corePoints[i * 3 + 1] = Math.sin(angle) * radius + (Math.random() - 0.5) * jitter;
        corePoints[i * 3 + 2] = 1.1 + (Math.random() - 0.5) * 0.32;

        coreColors[i * 3] = 1;
        coreColors[i * 3 + 1] = 0.78 + Math.random() * 0.18;
        coreColors[i * 3 + 2] = 0.32 + Math.random() * 0.22;
        coreSizes[i] = 1.45 + Math.random() * 1.75 + (1 - p) * 1.4;
      }

      coreGeometry.setAttribute("position", new THREE.BufferAttribute(corePoints, 3));
      coreGeometry.setAttribute("color", new THREE.BufferAttribute(coreColors, 3));
      coreGeometry.setAttribute("size", new THREE.BufferAttribute(coreSizes, 1));
      aboutGroup.add(new THREE.Points(coreGeometry, aboutParticleMaterial));

      const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xd4a94e, transparent: true, opacity: 0.45, blending: THREE.AdditiveBlending });
      const diskMaterial = new THREE.MeshBasicMaterial({ color: 0xd4a94e, transparent: true, opacity: 0.08, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
      const rings = [
        new THREE.Mesh(new THREE.TorusGeometry(2.15, 0.035, 8, 160), ringMaterial),
        new THREE.Mesh(new THREE.TorusGeometry(1.22, 0.025, 8, 120), ringMaterial.clone()),
        new THREE.Mesh(new THREE.RingGeometry(1.55, 2.25, 128), diskMaterial)
      ];
      rings[1].material.opacity = 0.32;
      rings.forEach((ring) => aboutGroup.add(ring));

      aboutScene.add(aboutGroup);
    }

    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let time = 0;
    let frameId = 0;

    const onMove = (event) => {
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = -(event.clientY / window.innerHeight - 0.5) * 2;
    };

    const resizeWork = (workScene, index) => {
      const workCanvas = workRefs.current[index];
      if (!workCanvas) return;
      const rect = workCanvas.getBoundingClientRect();
      const width = Math.max(rect.width || 460, 1);
      const height = 380;
      workScene.camera.aspect = width / height;
      workScene.camera.updateProjectionMatrix();
      workScene.renderer.setSize(width, height, false);
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight, false);

      workScenes.forEach((workScene, index) => resizeWork(workScene, index));

      if (aboutRenderer && aboutCamera && aboutCanvas) {
        const rect = aboutCanvas.getBoundingClientRect();
        const width = Math.max(rect.width || 600, 1);
        const height = Math.max(rect.height || 600, 1);
        aboutCamera.aspect = width / height;
        aboutCamera.position.z = width < 600 ? 32 : 25;
        aboutCamera.updateProjectionMatrix();
        aboutRenderer.setSize(width, height, false);
      }

      ScrollTrigger.refresh();
    };

    const loop = () => {
      frameId = requestAnimationFrame(loop);
      time += 0.007;
      currentMouseX += (targetMouseX - currentMouseX) * 0.045;
      currentMouseY += (targetMouseY - currentMouseY) * 0.045;

      starMaterial.uniforms.t.value = time;
      orbMaterial.uniforms.t.value = time;
      orbMaterial.uniforms.m.value.set(currentMouseX, currentMouseY);
      orb.rotation.y = time * 0.12;
      orb.rotation.x = time * 0.06;
      orb.position.x = 18 + currentMouseX * 7;
      orb.position.y = -4 + currentMouseY * 7;
      orb2.rotation.y = -time * 0.08;
      orb2.rotation.x = time * 0.04;
      orb2Material.uniforms.t.value = time + 2;
      orb2Material.uniforms.m.value.set(-currentMouseX * 0.6, -currentMouseY * 0.6);

      scene.children.forEach((child) => {
        if (child.userData.ax) {
          child.rotation.x += child.userData.ax;
          child.rotation.y += child.userData.ay;
        }
      });

      camera.position.x += (currentMouseX * 10 - camera.position.x) * 0.022;
      camera.position.y += (currentMouseY * 10 - camera.position.y) * 0.022;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);

      workScenes.forEach((workScene, index) => {
        workScene.mesh.rotation.x = time * (0.17 + index * 0.055);
        workScene.mesh.rotation.y = time * (0.23 + index * 0.04);
        workScene.material.uniforms.t.value = time;
        workScene.renderer.render(workScene.scene, workScene.camera);
      });

      if (aboutGroup && aboutRenderer && aboutScene && aboutCamera) {
        if (aboutParticleMaterial) aboutParticleMaterial.uniforms.t.value = time;
        aboutGroup.rotation.z = time * 0.045;
        aboutGroup.rotation.x = Math.sin(time * 0.18) * 0.04;
        aboutRenderer.render(aboutScene, aboutCamera);
      }
    };

    document.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize, { passive: true });
    onResize();
    loop();

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      disposeScene(scene);
      workScenes.forEach((workScene) => {
        workScene.renderer.dispose();
        disposeScene(workScene.scene);
      });
      if (aboutRenderer) aboutRenderer.dispose();
      if (aboutScene) disposeScene(aboutScene);
    };
  }, [aboutRef, bgRef, workRefs]);
}

function usePageAnimations(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    let testimonialIndex = 0;
    let testimonialAuto;
    const cleanups = [];
    const context = gsap.context(() => {
      const loader = document.getElementById("ldr");
      const pct = document.getElementById("ldr-pct");
      const line = document.getElementById("ldr-line");
      const counter = { value: 0 };

      function initHorizontalScroll() {
        const outer = document.querySelector(".hs-outer");
        const pin = document.getElementById("hs-pin");
        const track = document.getElementById("hs-track");
        const current = document.getElementById("hs-cur");
        if (!outer || !pin || !track) return;

        pin.style.height = "100vh";

        const totalWidth = () => {
          const total = Math.max(track.scrollWidth - window.innerWidth, 0);
          outer.style.minHeight = `${100 + (total / window.innerHeight) * 100}vh`;
          return total;
        };

        const cards = track.querySelectorAll(".wcard");
        totalWidth();

        gsap.to(track, {
          x: () => -totalWidth(),
          ease: "none",
          scrollTrigger: {
            trigger: outer,
            start: "top top",
            end: () => `+=${totalWidth()}`,
            pin,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate(self) {
              const index = Math.min(Math.floor(self.progress * (cards.length + 0.5)), cards.length - 1);
              if (current) current.textContent = String(index + 1).padStart(2, "0");
            }
          }
        });
      }

      function initReveals() {
        document.querySelectorAll(".rv").forEach((element) => {
          ScrollTrigger.create({
            trigger: element,
            start: "top 88%",
            onEnter: () => element.classList.add("on")
          });
        });
      }

      function initCounters() {
        document.querySelectorAll(".stat-n[data-t]").forEach((element) => {
          const target = Number(element.dataset.t);
          ScrollTrigger.create({
            trigger: element,
            start: "top 85%",
            once: true,
            onEnter() {
              const value = { current: 0 };
              gsap.to(value, {
                current: target,
                duration: 2.4,
                ease: "power2.out",
                onUpdate: () => {
                  element.textContent = Math.round(value.current);
                }
              });
            }
          });
        });
      }

      function initClipText() {
        gsap.to("#clip-txt", {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.4,
          ease: "power3.inOut",
          scrollTrigger: { trigger: ".clip-block", start: "top 70%" }
        });
      }

      function initBigQuote() {
        gsap.to("#bq", {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".bigquote", start: "top 75%" }
        });

        gsap.to("#bqs", {
          opacity: 1,
          duration: 0.8,
          delay: 0.4,
          scrollTrigger: { trigger: ".bigquote", start: "top 75%" }
        });
      }

      function initParallax() {
        gsap.to(".hero-h1", {
          y: -160,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.2 }
        });

        gsap.to(".hero-desc", {
          y: -70,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.6 }
        });
      }

      function goTestimonial(index) {
        const track = document.getElementById("tc-track");
        const fill = document.getElementById("tc-fill");
        if (!track || !fill) return;

        const cards = [...track.querySelectorAll(".tc")];
        if (!cards.length) return;

        testimonialIndex = ((index % cards.length) + cards.length) % cards.length;
        const offset = cards[testimonialIndex].offsetLeft;

        gsap.to(track, { x: -offset, duration: 0.75, ease: "power3.inOut" });
        gsap.to(fill, { width: `${((testimonialIndex + 1) / cards.length) * 100}%`, duration: 0.75, ease: "power3.inOut" });
      }

      function initTestimonials() {
        const prev = document.getElementById("tc-prev");
        const next = document.getElementById("tc-next");

        const onPrev = () => {
          window.clearInterval(testimonialAuto);
          goTestimonial(testimonialIndex - 1);
        };
        const onNext = () => {
          window.clearInterval(testimonialAuto);
          goTestimonial(testimonialIndex + 1);
        };

        prev?.addEventListener("click", onPrev);
        next?.addEventListener("click", onNext);
        cleanups.push(() => {
          prev?.removeEventListener("click", onPrev);
          next?.removeEventListener("click", onNext);
        });

        goTestimonial(0);
      }

      function initMagneticLinks() {
        document.querySelectorAll(".magnetic-link").forEach((button) => {
          const onMove = (event) => {
            const rect = button.getBoundingClientRect();
            const x = (event.clientX - rect.left - rect.width / 2) * 0.3;
            const y = (event.clientY - rect.top - rect.height / 2) * 0.4;
            gsap.to(button, { x, y, duration: 0.4, ease: "power2.out" });
          };
          const onLeave = () => gsap.to(button, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,.4)" });

          button.addEventListener("mousemove", onMove);
          button.addEventListener("mouseleave", onLeave);
          cleanups.push(() => {
            button.removeEventListener("mousemove", onMove);
            button.removeEventListener("mouseleave", onLeave);
          });
        });
      }

      function initAnchorLinks() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          const onClick = (event) => {
            const href = anchor.getAttribute("href");
            const target = href ? document.querySelector(href) : null;
            if (!target) return;
            event.preventDefault();
            gsap.to(window, { scrollTo: { y: target, offsetY: 70 }, duration: 1.4, ease: "power3.inOut" });
          };

          anchor.addEventListener("click", onClick);
          cleanups.push(() => anchor.removeEventListener("click", onClick));
        });
      }

      function boot() {
        const timeline = gsap.timeline();
        timeline.to(".hero-sup-txt", { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 0.1);
        timeline.to(".hero-word", { y: 0, duration: 1.1, ease: "power3.out", stagger: 0.13 }, 0.25);
        timeline.to(".hero-desc", { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, 0.6);
        timeline.to(".hero-scroll", { opacity: 1, duration: 0.7 }, 0.9);

        initHorizontalScroll();
        initReveals();
        initCounters();
        initClipText();
        initBigQuote();
        initParallax();
        initTestimonials();
        initMagneticLinks();
        initAnchorLinks();
        testimonialAuto = window.setInterval(() => goTestimonial(testimonialIndex + 1), 4800);
        ScrollTrigger.refresh();
      }

      gsap.to(line, { height: "60vh", duration: 2, ease: "power2.inOut" });
      gsap.to(counter, {
        value: 100,
        duration: 2.2,
        ease: "power2.inOut",
        onUpdate: () => {
          if (pct) pct.textContent = Math.round(counter.value);
        },
        onComplete: () => {
          gsap.to(loader, {
            clipPath: "inset(0 0 100% 0)",
            duration: 0.8,
            ease: "power2.inOut",
            delay: 0.2,
            onComplete: () => {
              if (loader) loader.style.display = "none";
              boot();
            }
          });
        }
      });
    }, root);

    return () => {
      window.clearInterval(testimonialAuto);
      cleanups.forEach((cleanup) => cleanup());
      context.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [rootRef]);
}

function SectionHeading({ kicker, children, className = "", center = false }) {
  return (
    <div className={`rv ${className}`}>
      <p className={`section-tag ${center ? "center" : ""}`}>{kicker}</p>
      <h2 className="display-heading">{children}</h2>
    </div>
  );
}

function TickerRow({ items, reverse = false }) {
  return (
    <div className={`flex shrink-0 gap-12 whitespace-nowrap py-[.85rem] ${reverse ? "animate-ticker-reverse" : "animate-ticker-forward"}`}>
      {items.map((item, index) => (
        <div key={`${item}-${index}`} className="flex shrink-0 items-center gap-12 font-serif text-[1.1rem] italic text-cream/15 after:text-[.6rem] after:not-italic after:text-gold/50 after:content-['\2726']">
          {item}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const appRef = useRef(null);
  const bgRef = useRef(null);
  const aboutRef = useRef(null);
  const workRefs = useRef([]);

  useCursor();
  useScrollProgress();
  useThreeScenes(bgRef, workRefs, aboutRef);
  usePageAnimations(appRef);

  return (
    <div ref={appRef} className="relative min-h-screen overflow-x-hidden bg-ink text-cream">
      <div id="prog" className="pointer-events-none fixed left-0 top-0 z-[9500] h-[3px] w-0 origin-left bg-gradient-to-r from-gold to-goldSoft transition-[width] duration-[50ms]" />
      <div id="dot" className="cursor-dot" />
      <div id="ring" className="cursor-ring" />

      <div id="ldr" className="fixed inset-0 z-[9990] flex items-center justify-center overflow-hidden bg-ink">
        <div className="relative text-center">
          <div id="ldr-line" className="absolute left-1/2 top-0 h-0 w-px -translate-x-1/2 bg-gold" />
          <div id="ldr-pct" className="relative z-[1] font-serif text-[clamp(6rem,18vw,16rem)] font-normal leading-none tracking-[-.03em] text-cream">
            0
          </div>
          <div className="mt-6 text-[.65rem] uppercase tracking-[.5em] text-cream/25">Loading Studio</div>
        </div>
      </div>

      <canvas ref={bgRef} id="bg" className="fixed inset-0 z-0 h-full w-full" />

      <nav className="absolute inset-x-0 top-0 z-[200] flex items-center justify-between px-[5vw] py-8 max-md:py-6">
        <a href="#top" className="font-serif text-[1.2rem] italic tracking-[.5em] text-cream no-underline">
          Stellar
        </a>
        <div className="flex items-center gap-12">
          <ul className="flex list-none gap-10 max-md:hidden">
            {["Work", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-[.65rem] uppercase tracking-[.3em] text-cream/40 no-underline transition-colors duration-300 hover:text-goldLight">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="bg-goldLight rounded-md px-6 py-[.6rem] text-[.65rem] font-normal uppercase tracking-[.25em] text-ink no-underline transition-colors duration-300 hover:bg-goldSoft">
            Hire Us
          </a>
        </div>
      </nav>

      <section id="top" className="hero relative z-[1] flex h-screen items-end overflow-hidden px-[5vw] pb-[6vw] pt-28 max-md:pb-10 max-md:pt-24">
        <div className="pointer-events-none absolute bottom-[-2vw] right-[4vw] font-serif text-[22vw] font-bold italic leading-none tracking-[-.05em] text-gold/5">
          {star}
        </div>
        <div className="w-full">
          <div className="mb-10 flex items-center gap-6 overflow-hidden">
            <div className="h-px w-10 shrink-0 bg-gold" />
            <span className="hero-sup-txt translate-x-[-30px] text-[.65rem] uppercase tracking-[.4em] text-gold opacity-0">
              Design & Creative Direction - Est. 2019
            </span>
          </div>

          <h1 className="hero-h1 font-sans text-[clamp(4rem,10.2vw,11.5rem)] font-normal leading-[.9] tracking-[-.02em] max-md:text-[clamp(3.5rem,19vw,6.5rem)]">
            <span className="block overflow-hidden">
              <span className="hero-word inline-block translate-y-[115%]">We</span>
            </span>
            <span className="block overflow-hidden">
              <em className="hero-word inline-block translate-y-[115%] text-goldLight">craft</em>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-word inline-block translate-y-[115%]">worlds</span>
            </span>
          </h1>

          <div className="mt-16 flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-8">
            <p className="hero-desc max-w-80 translate-y-4 text-[.9rem] leading-[1.9] text-cream/45 opacity-0">
              A boutique creative studio blending spatial design, motion, and technology into experiences that transcend the ordinary.
            </p>
            <div className="hero-scroll flex flex-col items-center gap-3 opacity-0">
              <div className="h-[70px] w-px origin-center animate-scroll-pulse bg-gradient-to-b from-gold to-transparent" />
              <span className="text-[.6rem] uppercase tracking-[.35em] text-cream/30 [writing-mode:vertical-rl]">Scroll</span>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-[1] overflow-hidden border-y border-gold/10">
        <div className="flex">
          <TickerRow items={tickerForward} />
          <TickerRow items={tickerReverse} reverse />
        </div>
      </div>

      <div className="clip-block relative z-[1] flex h-[50vh] items-center justify-center overflow-hidden">
        <p id="clip-txt" className="px-[5vw] text-center font-serif text-[clamp(2rem,5vw,5.5rem)] font-normal italic leading-[1.2] text-cream [clip-path:inset(0_100%_0_0)]">
          We believe great design is felt before it is understood - it arrives like a shift in atmosphere.
        </p>
      </div>

      <div id="work" className="hs-outer relative z-[1]">
        <div id="hs-pin" className="overflow-hidden">
          <div id="hs-track" className="flex items-center will-change-transform">
            <div className="flex h-screen min-w-[55vw] shrink-0 flex-col justify-center px-[5vw] max-md:min-w-[90vw]">
              <p className="section-tag rv">Selected Work</p>
              <h2 className="display-heading rv rv-d1">
                Recent
                <br />
                <em>Projects</em>
              </h2>
              <p className="rv rv-d2 mt-8 max-w-80 text-[.88rem] leading-[1.95] text-cream/45">
                Hand-crafted experiences for brands that refuse to be ordinary. Each a universe unto itself.
              </p>
              <p className="rv rv-d3 mt-12 text-[.65rem] uppercase tracking-[.3em] text-cream/25">
                <span id="hs-cur" className="text-goldLight">
                  01
                </span>{" "}
                / 05
              </p>
              <a href="#contact" className="magnetic-link rv rv-d4 mt-8 w-fit">
                <span>View archive</span>
                <span className="magnetic-arrow">{arrow}</span>
              </a>
            </div>

            {workItems.map((item, index) => (
              <div key={item.name} className="wcard flex h-screen min-w-[42vw] shrink-0 items-center justify-center px-[2vw] max-md:min-w-[88vw]">
                <div className="wcard-box group relative w-full">
                  <div className="relative overflow-hidden rounded-3xl">
                    <canvas
                      ref={(element) => {
                        workRefs.current[index] = element;
                      }}
                      className="block h-[380px] w-full rounded-3xl transition-transform duration-[800ms] ease-stellar-out group-hover:scale-[1.04]"
                      height="380"
                    />
                    <div className="absolute left-5 top-5 bg-ink/60 px-3 py-[.3rem] font-sans text-[.6rem] uppercase tracking-[.3em] text-cream/60 backdrop-blur-md">
                      {item.tag}
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink via-ink/20 to-transparent p-8 opacity-0 transition-opacity duration-500 ease-stellar-out group-hover:opacity-100">
                      <div className="mb-2 font-mono text-[.6rem] tracking-[.2em] text-gold">{item.number}</div>
                      <h3 className="font-serif text-[1.9rem] font-normal italic leading-[1.1]">{item.name}</h3>
                      <p className="mt-2 text-[.72rem] tracking-[.06em] text-cream/40">{item.type}</p>
                      <div className="mt-4 font-mono text-[.62rem] tracking-[.2em] text-cream/25">{item.year}</div>
                    </div>
                    <div className="absolute bottom-8 right-8 flex h-[38px] w-[38px] items-center justify-center rounded-full border border-gold/40 text-[.9rem] text-goldLight transition-[background,transform] duration-300 group-hover:rotate-[-45deg] group-hover:bg-gold">
                      {arrow}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section id="about" className="about relative z-[1] overflow-hidden bg-ink">
        <div className="about-visual relative min-h-screen overflow-hidden bg-[#10101c]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,169,78,.08),transparent_34%),linear-gradient(180deg,rgba(7,7,14,.15),rgba(7,7,14,.78))]" />
          <div className="absolute left-[5vw] top-[4vw] font-serif text-[clamp(4rem,10vw,9rem)] font-bold italic leading-none tracking-[-.06em] text-gold/10">2019</div>
          <canvas ref={aboutRef} className="relative z-[1] block h-screen min-h-[720px] w-full max-md:min-h-[760px]" />
          <div className="absolute bottom-[5vw] right-[5vw] z-[2] font-mono text-[clamp(.56rem,1vw,.78rem)] uppercase tracking-[.55em] text-gold/55 max-md:bottom-10 max-md:left-[5vw] max-md:right-auto max-md:max-w-72 max-md:tracking-[.35em]">
            Stellar Studio - London
          </div>
        </div>
        <div className="relative z-[1] grid min-h-[75vh] grid-cols-[.85fr_1.15fr] gap-[6vw] px-[5vw] py-[10vw] max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <p className="section-tag rv">About the Studio</p>
            <h2 className="display-heading rv rv-d1 mt-6">
              Where <em>craft</em>
              <br />
              meets vision
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <div className="rv rv-d2">
              <p className="mb-6 text-[.9rem] leading-[2.05] text-cream/50">
                We are a small team of designers, developers, and storytellers who believe the <strong className="font-normal text-cream">best experiences are felt before they are understood</strong>.
              </p>
              <p className="mb-6 text-[.9rem] leading-[2.05] text-cream/50">
                Founded in 2019, we've worked across four continents - always with the same obsession: making something that matters.
              </p>
            </div>
            <div className="rv rv-d3 my-12 h-px w-10 bg-gold/40" />
            <div className="rv rv-d4 grid grid-cols-2 gap-10">
              {[
                ["87", "Projects Delivered"],
                ["14", "Countries Reached"],
                ["6", "Studio Members"],
                ["12", "Awards Won"]
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="stat-n font-serif text-[3.8rem] font-normal italic leading-none text-goldLight" data-t={value}>
                    0
                  </div>
                  <div className="mt-2 text-[.62rem] uppercase tracking-[.22em] text-cream/30">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="philosophy" className="relative z-[1] overflow-hidden px-[5vw] py-[12vw]">
        <SectionHeading kicker="Our Philosophy">
          Three <em>principles</em>
        </SectionHeading>
        <div className="rv rv-d2 mt-24 grid grid-cols-3 gap-px bg-cream/5 max-lg:grid-cols-2 max-md:grid-cols-1">
          {philosophies.map((item) => (
            <div key={item.num} className="phil-card group relative overflow-hidden bg-ink px-10 py-14 transition-colors duration-500 hover:bg-gold/5">
              <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 ease-stellar-out group-hover:scale-x-100" />
              <div className="mb-8 font-mono text-[.65rem] tracking-[.2em] text-gold/50">{item.num}</div>
              <div className="mb-5 font-serif text-[1.6rem] font-normal italic leading-[1.2]">{item.title}</div>
              <p className="text-[.82rem] leading-[1.85] text-cream/40">{item.body}</p>
              <div className="absolute bottom-8 right-8 text-3xl text-gold/10 transition-colors duration-500 group-hover:text-gold/30">{item.icon}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="relative z-[1] px-[5vw] py-[10vw]">
        <SectionHeading kicker="What We Do">
          Our <em>craft</em>
        </SectionHeading>
        <div className="rv rv-d2 mt-20 border-t border-cream/5">
          {services.map(([num, title, desc]) => (
            <div key={num} className="svc-row group relative grid cursor-pointer grid-cols-[60px_1fr_200px_40px] items-center gap-8 overflow-hidden border-b border-cream/5 py-10 transition-[padding] duration-300 ease-stellar-out hover:pl-6 max-lg:grid-cols-[48px_1fr_32px]">
              <div className="absolute inset-y-0 left-0 w-0 bg-gold/5 transition-[width] duration-500 ease-stellar-out group-hover:w-full" />
              <span className="relative font-mono text-[.7rem] italic tracking-[.1em] text-cream/20">{num}</span>
              <h3 className="relative font-serif text-[2.4rem] font-normal italic transition-colors duration-300 group-hover:text-goldLight">{title}</h3>
              <p className="relative text-[.8rem] leading-[1.7] text-cream/35 max-lg:hidden">{desc}</p>
              <span className="relative text-right text-base text-gold/60 transition-[color,transform] duration-300 group-hover:rotate-0 group-hover:text-goldLight lg:rotate-[-45deg]">{arrow}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="process rv relative z-[1] overflow-hidden px-[5vw] py-[12vw]">
        <p className="section-tag">How We Work</p>
        <h2 className="display-heading">
          The <em>process</em>
        </h2>
        <div className="rv rv-d2 relative mt-24 flex max-lg:flex-col max-lg:gap-8 before:absolute before:left-8 before:right-8 before:top-[2.2rem] before:z-0 before:h-px before:bg-gold/15 max-lg:before:hidden">
          {processSteps.map(([num, title, desc]) => (
            <div key={num} className="process-step group relative z-[1] flex-1 px-8">
              <div className="mb-10 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-ink transition-colors duration-500 group-hover:bg-gold">
                <div className="font-mono text-[.65rem] text-gold transition-colors duration-500">{num}</div>
              </div>
              <div className="mb-3 font-serif text-xl font-normal italic">{title}</div>
              <p className="text-[.78rem] leading-[1.8] text-cream/40">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="testi" className="testi rv relative z-[1] overflow-hidden px-[5vw] py-[12vw]">
        <p className="section-tag">Kind Words</p>
        <h2 className="display-heading">
          Client <em>voices</em>
        </h2>
        <div className="mt-20">
          <div id="tc-track" className="flex gap-8 transition-transform duration-700 ease-stellar-in-out">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="tc relative min-w-[calc(50%-1rem)] shrink-0 overflow-hidden rounded-3xl border border-cream/5 bg-cream/[.025] p-14 transition-colors duration-500 hover:border-gold/30 max-lg:min-w-[calc(100%-1rem)]">
                <div className="pointer-events-none absolute left-6 top-[-1rem] font-serif text-9xl leading-none text-gold/5">"</div>
                <p className="relative z-[1] mb-8 font-serif text-[1.2rem] font-normal italic leading-[1.65] text-cream/75">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full text-[.65rem] font-medium text-ink" style={{ background: testimonial.gradient }}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="text-[.82rem] font-medium text-cream">{testimonial.name}</div>
                    <div className="mt-1 text-[.7rem] text-cream/30">{testimonial.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 flex items-center gap-6">
            <button id="tc-prev" type="button" aria-label="Previous testimonial" className="testi-btn flex h-11 w-11 select-none items-center justify-center rounded-full border border-gold/30 text-[.9rem] text-gold/70 transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-ink">
              {"\u2190"}
            </button>
            <div className="relative h-px flex-1 overflow-hidden bg-cream/10">
              <div id="tc-fill" className="h-full w-0 bg-gold transition-[width] duration-700 ease-stellar-in-out" />
            </div>
            <button id="tc-next" type="button" aria-label="Next testimonial" className="testi-btn flex h-11 w-11 select-none items-center justify-center rounded-full border border-gold/30 text-[.9rem] text-gold/70 transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-ink">
              {arrow}
            </button>
          </div>
        </div>
      </section>

      <div className="bigquote relative z-[1] overflow-hidden border-t border-gold/10 px-[5vw] py-[10vw] text-center">
        <p id="bq" className="mx-auto max-w-[900px] translate-y-[30px] font-serif text-[clamp(2rem,4.5vw,5rem)] font-normal italic leading-[1.3] text-cream opacity-0">
          "The details are not the details - they make the design."
        </p>
        <p id="bqs" className="mt-8 text-[.7rem] uppercase tracking-[.3em] text-gold/50 opacity-0">- Charles Eames</p>
      </div>

      <div className="relative z-[1] overflow-hidden border-y border-gold/10 py-16">
        <div className="flex animate-ticker-giant gap-6 whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, index) => (
            <span key={index} className="shrink-0">
              <span className="font-serif text-[clamp(4rem,7vw,8rem)] font-normal italic tracking-[-.02em] text-cream/[.04] max-md:text-[clamp(3rem,10vw,5rem)]">We craft worlds&nbsp;</span>
              <span className="font-serif text-[clamp(4rem,7vw,8rem)] font-normal italic tracking-[-.02em] text-gold/35 max-md:text-[clamp(3rem,10vw,5rem)]">{sparkle}&nbsp;</span>
            </span>
          ))}
        </div>
      </div>

      <section id="contact" className="relative z-[1] flex min-h-screen items-center justify-center overflow-hidden px-[5vw] py-[12vw] text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vw] max-h-[700px] w-[60vw] max-w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(168,119,42,.06)_0%,transparent_70%)]" />
        <div className="rv relative z-[1]">
          <p className="section-tag center">Get in Touch</p>
          <h2 className="my-6 font-serif text-[clamp(4rem,9vw,11rem)] font-normal leading-[.9] tracking-[-.03em] text-cream max-md:text-[clamp(3rem,12vw,7rem)]">
            Let's build
            <br />
            <em className="block text-goldLight">something rare</em>
          </h2>
          <p className="mx-auto mb-16 max-w-[420px] text-[.9rem] leading-[1.85] text-cream/40">
            We take on a limited number of projects each year. If you have a vision worth realising, let's talk.
          </p>
          <a href="mailto:hello@stellar.studio" className="border-b border-gold/40 pb-1 font-serif text-[clamp(1.3rem,2.5vw,2.3rem)] italic text-cream no-underline transition-colors duration-300 hover:border-goldLight hover:text-goldLight">
            hello@stellar.studio
          </a>
          <ul className="mt-20 flex list-none justify-center gap-10 max-md:flex-wrap">
            {["Instagram", "Twitter / X", "LinkedIn", "Dribbble"].map((item) => (
              <li key={item}>
                <a href="#top" className="text-[.62rem] uppercase tracking-[.3em] text-cream/25 no-underline transition-colors duration-300 hover:text-gold">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="relative z-[1] flex items-center justify-between border-t border-cream/5 px-[5vw] py-8 max-md:flex-col max-md:gap-4 max-md:text-center">
        <p className="text-[.62rem] tracking-[.15em] text-cream/20">(c) 2025 Stellar Studio. All rights reserved.</p>
        <ul className="flex list-none gap-8">
          {["Privacy", "Terms", "Colophon"].map((item) => (
            <li key={item}>
              <a href="#top" className="text-[.62rem] tracking-[.12em] text-cream/20 no-underline transition-colors duration-300 hover:text-gold">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
