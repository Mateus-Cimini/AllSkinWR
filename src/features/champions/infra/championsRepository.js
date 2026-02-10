import { Champion } from "../domain/Champion.js";

export const championsRepository = {
  async getAll() {
    try {
      const res = await fetch("/data/champions.json");
      if (!res.ok) return [];
      const data = await res.json();
      return data.map((raw) => new Champion(raw));
    } catch {
      return [];
    }
  },

  async getById(id) {
    try {
      const res = await fetch("/data/champions.json");
      if (!res.ok) return null;
      const data = await res.json();
      const raw = data.find((c) => c.id === id);
      return raw ? new Champion(raw) : null;
    } catch {
      return null;
    }
  },
};
