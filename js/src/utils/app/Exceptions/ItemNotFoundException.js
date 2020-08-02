export default class ItemNotFoundException extends Error {
  constructor(entity, id) {
    const message = `${entity} with ${id} not found`;
    super(message);
    this.entity = entity;
  }
}
