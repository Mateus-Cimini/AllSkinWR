export class Champion {
  constructor({ id, name, title, icon, iconUrl, skins = [], skinsCount }) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.icon = icon;
    this.iconUrl = iconUrl;
    this.skins = skins; // (se quiser, depois transforma em Skin entity)
    this.skinsCount = skinsCount ?? skins.length;
  }
}
