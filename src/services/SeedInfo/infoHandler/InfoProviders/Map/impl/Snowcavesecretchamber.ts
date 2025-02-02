// data/scripts/biomes/snowcave_secret_chamber.lua
import Base from "../Base";
class Snowcavesecretchamber extends Base {
  chestLevel = 3;
  g_items = [
    {
      prob: 1,
      min_count: 1,
      max_count: 1,
      entity: "data/entities/items/wand_level_03.xml",
    },
    {
      prob: 1,
      min_count: 1,
      max_count: 1,
      entity: "data/entities/items/wand_unshuffle_02.xml",
    },
  ];
  g_skulls = [
    { prob: 6, min_count: 1, max_count: 1, offset_y: 0, entity: "" },
    {
      prob: 1.5,
      min_count: 1,
      max_count: 1,
      offset_y: 0,
      entity: "data/entities/props/physics_skull_01.xml",
    },
    {
      prob: 1.5,
      min_count: 1,
      max_count: 1,
      offset_y: 0,
      entity: "data/entities/props/physics_skull_02.xml",
    },
    {
      prob: 1.5,
      min_count: 1,
      max_count: 1,
      offset_y: 0,
      entity: "data/entities/props/physics_skull_03.xml",
    },
    {
      prob: 0.5,
      min_count: 1,
      max_count: 1,
      offset_y: 0,
      entity: "data/entities/props/physics_bone_01.xml",
    },
    {
      prob: 0.5,
      min_count: 1,
      max_count: 1,
      offset_y: 0,
      entity: "data/entities/props/physics_bone_02.xml",
    },
    {
      prob: 0.5,
      min_count: 1,
      max_count: 1,
      offset_y: 0,
      entity: "data/entities/props/physics_bone_03.xml",
    },
    {
      prob: 0.5,
      min_count: 1,
      max_count: 1,
      offset_y: 0,
      entity: "data/entities/props/physics_bone_04.xml",
    },
    {
      prob: 0.5,
      min_count: 1,
      max_count: 1,
      offset_y: 0,
      entity: "data/entities/props/physics_bone_05.xml",
    },
    {
      prob: 0.5,
      min_count: 1,
      max_count: 1,
      offset_y: 0,
      entity: "data/entities/props/physics_bone_06.xml",
    },
  ];
  g_stones = [
    {
      prob: 2,
      min_count: 1,
      max_count: 1,
      offset_y: 0,
      entity: "data/entities/props/stonepile.xml",
    },
    {
      prob: 1.5,
      min_count: 1,
      max_count: 1,
      offset_y: 0,
      entity: "data/entities/props/physics_stone_01.xml",
    },
    {
      prob: 1.5,
      min_count: 1,
      max_count: 1,
      offset_y: 0,
      entity: "data/entities/props/physics_stone_02.xml",
    },
    {
      prob: 1.5,
      min_count: 1,
      max_count: 1,
      offset_y: 0,
      entity: "data/entities/props/physics_stone_03.xml",
    },
    {
      prob: 1.5,
      min_count: 1,
      max_count: 1,
      offset_y: 0,
      entity: "data/entities/props/physics_stone_04.xml",
    },
    { prob: 4, min_count: 1, max_count: 1, offset_y: 0, entity: "" },
  ];
  g_lamp = [
    { prob: 0.25, min_count: 1, max_count: 1, entity: "" },
    {
      prob: 1,
      min_count: 1,
      max_count: 1,
      entity: "data/entities/props/physics/temple_lantern.xml",
    },
  ];

  init(x: number, y: number) {
    this.LoadPixelScene(
      "data/biome_impl/snowcave/secret_chamber.png",
      "data/biome_impl/snowcave/secret_chamber_visual.png",
      x,
      y,
      "",
      true,
    );
  }
  spawn_lamp(x: number, y: number) {
    this.spawn(this.g_lamp, x, y, 0, 20);
  }
  spawn_skulls(x: number, y: number) {
    this.spawn(this.g_skulls, x, y, 0, 0);
  }
  spawn_teleporter(x: number, y: number) {
    this.EntityLoad("data/entities/buildings/teleport_snowcave_buried_eye_return.xml", x, y);
  }

  spawn_shopitem(x: number, y: number) {}
  spawn_small_enemies(x: number, y: number) {}
  spawn_big_enemies(x: number, y: number) {}
  spawn_items(x: number, y: number) {}
  spawn_props(x: number, y: number) {}
  load_pixel_scene(x: number, y: number) {}
  load_pixel_scene2(x: number, y: number) {}
  spawn_unique_enemy(x: number, y: number) {}
}
export default Snowcavesecretchamber;
