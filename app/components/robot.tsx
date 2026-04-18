"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

export default function Robot() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const hitboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Body,
      Composite,
      Constraint,
      Events,
      Vector,
    } = Matter;

    const engine = Engine.create();
    const world = engine.world;
    world.gravity.y = 0;

    const render = Render.create({
      element: scene,
      engine,
      options: {
        width: scene.clientWidth,
        height: scene.clientHeight,
        wireframes: false,
        background: "transparent",
        pixelRatio: window.devicePixelRatio || 1,
      },
    });

    const runner = Runner.create();

    const robot = Bodies.circle(
      scene.clientWidth / 2,
      scene.clientHeight / 2,
      36,
      {
        restitution: 0.96,
        friction: 0,
        frictionAir: 0.003,
        frictionStatic: 0,
        density: 0.0012,
        render: {
          fillStyle: "rgba(0,0,0,0)",
          strokeStyle: "rgba(0,0,0,0)",
          lineWidth: 0,
        },
      },
    );

    Body.setVelocity(robot, { x: 3.8, y: -2.6 });
    Body.setAngularVelocity(robot, 0.02);

    const wallThickness = 80;
    let walls: any[] = [];

    const createWalls = (width: number, height: number) => {
      if (walls.length) {
        Composite.remove(world, walls);
      }

      walls = [
        Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, {
          isStatic: true,
          restitution: 0.9,
          render: { visible: false },
        }),
        Bodies.rectangle(
          width / 2,
          height + wallThickness / 2,
          width,
          wallThickness,
          {
            isStatic: true,
            restitution: 0.9,
            render: { visible: false },
          },
        ),
        Bodies.rectangle(
          -wallThickness / 2,
          height / 2,
          wallThickness,
          height,
          {
            isStatic: true,
            restitution: 0.9,
            render: { visible: false },
          },
        ),
        Bodies.rectangle(
          width + wallThickness / 2,
          height / 2,
          wallThickness,
          height,
          {
            isStatic: true,
            restitution: 0.9,
            render: { visible: false },
          },
        ),
      ];

      Composite.add(world, walls);
    };

    createWalls(scene.clientWidth, scene.clientHeight);
    Composite.add(world, [robot]);

    // Custom Drag implementation to bypass DOM overlapping issues
    let isDragging = false;
    let dragOffset = { x: 0, y: 0 };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      // Calculate offset so dragging doesn't teleport the center to the cursor instantly
      dragOffset = {
        x: robot.position.x - e.clientX,
        y: robot.position.y - e.clientY,
      };

      // Reset velocity instantly for better control
      Body.setVelocity(robot, { x: 0, y: 0 });
      Body.setAngularVelocity(robot, 0);

      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);

      if (hitboxRef.current) {
        hitboxRef.current.setPointerCapture(e.pointerId);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (isDragging) {
        const targetX = e.clientX + dragOffset.x;
        const targetY = e.clientY + dragOffset.y;

        // Apply a gentle velocity to follow cursor smoothly, avoiding breaking colliders
        const velX = (targetX - robot.position.x) * 0.15;
        const velY = (targetY - robot.position.y) * 0.15;

        Body.setVelocity(robot, { x: velX, y: velY });
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      isDragging = false;
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);

      if (hitboxRef.current) {
        hitboxRef.current.releasePointerCapture(e.pointerId);
      }
    };

    const currentHitbox = hitboxRef.current;
    if (currentHitbox) {
      currentHitbox.addEventListener("pointerdown", onPointerDown);
    }

    let bobPhase = 0;
    const bobHandler = () => {
      bobPhase += 0.03;
      const bobForce = Math.sin(bobPhase) * 0.00008;
      Body.applyForce(robot, robot.position, Vector.create(0, bobForce));
    };

    const drawRobot = () => {
      const ctx = render.context;
      const x = robot.position.x;
      const y = robot.position.y;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(robot.angle);

      const px = 4;

      const drawPixel = (dx: number, dy: number, color: string) => {
        ctx.fillStyle = color;
        ctx.fillRect(dx * px, dy * px, px, px);
      };

      // Head
      for (let ix = -4; ix <= 3; ix += 1) {
        for (let iy = -9; iy <= -3; iy += 1) {
          drawPixel(ix, iy, "#ff00ff");
        }
      }

      // Eyes
      drawPixel(-2, -7, "#000");
      drawPixel(1, -7, "#000");
      drawPixel(-2, -6, "#000");
      drawPixel(1, -6, "#000");

      // Body
      for (let ix = -5; ix <= 4; ix += 1) {
        for (let iy = -2; iy <= 4; iy += 1) {
          drawPixel(ix, iy, "#00ffff");
        }
      }

      // Arms
      for (let ix = -10; ix <= -6; ix += 1) {
        for (let iy = -1; iy <= 1; iy += 1) {
          drawPixel(ix, iy, "#ff00ff");
        }
      }
      for (let ix = 5; ix <= 9; ix += 1) {
        for (let iy = -1; iy <= 1; iy += 1) {
          drawPixel(ix, iy, "#ff00ff");
        }
      }

      // Legs
      for (let ix = -3; ix <= -1; ix += 1) {
        for (let iy = 5; iy <= 10; iy += 1) {
          drawPixel(ix, iy, "#00ffff");
        }
      }
      for (let ix = 1; ix <= 3; ix += 1) {
        for (let iy = 5; iy <= 10; iy += 1) {
          drawPixel(ix, iy, "#00ffff");
        }
      }

      // Soft glow
      ctx.shadowBlur = 20;
      ctx.shadowColor = "rgba(255, 0, 255, 0.35)";
      ctx.restore();
    };

    const afterRenderHandler = () => {
      drawRobot();
      if (hitboxRef.current) {
        hitboxRef.current.style.transform = `translate(${robot.position.x}px, ${robot.position.y}px)`;
      }
    };

    const resizeHandler = () => {
      const width = scene.clientWidth;
      const height = scene.clientHeight;

      render.canvas.width = width;
      render.canvas.height = height;
      render.options.width = width;
      render.options.height = height;

      createWalls(width, height);

      Body.setPosition(robot, {
        x: Math.min(Math.max(robot.position.x, 72), width - 72),
        y: Math.min(Math.max(robot.position.y, 72), height - 72),
      });
    };

    Events.on(engine, "beforeUpdate", bobHandler);
    Events.on(render, "afterRender", afterRenderHandler);

    Render.run(render);
    Runner.run(runner, engine);

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      if (currentHitbox) {
        currentHitbox.removeEventListener("pointerdown", onPointerDown);
      }
      Events.off(engine, "beforeUpdate", bobHandler);
      Events.off(render, "afterRender", afterRenderHandler);
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(world, false);
      Engine.clear(engine);
      if (render.canvas && render.canvas.parentNode) {
        render.canvas.parentNode.removeChild(render.canvas);
      }
    };
  }, []);

  return (
    <div className="sticky top-0 hidden h-screen w-full lg:block pointer-events-none">
      <div
        ref={sceneRef}
        className="absolute inset-0 h-full w-full bg-transparent"
      />
      <div
        ref={hitboxRef}
        className="absolute pointer-events-auto touch-none cursor-grab active:cursor-grabbing"
        style={{
          width: 72,
          height: 72,
          marginLeft: -36,
          marginTop: -36,
          top: 0,
          left: 0,
        }}
        title="Drag the pixel robot!"
      />
    </div>
  );
}
