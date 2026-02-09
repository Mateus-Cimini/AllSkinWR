import { Champion } from "../domain/Champion.js";

export const championsRepository = {
  async getAll() {
    const res = await fetch("/data/champions.json");
    const data = await res.json();
    return data.map((raw) => new Champion(raw));
  },

  async getById(id) {
    const res = await fetch("/data/champions.json");
    const data = await res.json();
    const raw = data.find((c) => c.id === championId);
    return raw ? new Champion(raw) : null;
  },
};
