import { PointQuadtree } from "../src/PointQuadTree";

describe('PointQuadtree', () => {
  it('should initialize the quadtree with the correct bounds', () => {
    const bounds = { x: 0, y: 0, width: 100, height: 100 };
    const quadtree = new PointQuadtree<number>(bounds);
    expect(quadtree).toBeDefined();
    expect(quadtree.bounds).toEqual(bounds);
  });

  it('should create four child nodes when the max level is greater than 0', () => {
    const bounds = { x: 0, y: 0, width: 100, height: 100 };
    const quadtree = new PointQuadtree<number>(bounds, 10, 0, 2);
    expect(quadtree.nodes).toHaveLength(4);
    for (const node of quadtree.nodes) {
      expect(node).toBeDefined();
    }
  });

  it('should not create child nodes when the max level is 0', () => {
    const bounds = { x: 0, y: 0, width: 100, height: 100 };
    const quadtree = new PointQuadtree<number>(bounds, 10, 0, 0);
    expect(quadtree.nodes).toHaveLength(0);
  });

  it('should create a linked list for objects when the max level is 0', () => {
    const bounds = { x: 0, y: 0, width: 100, height: 100 };
    const quadtree = new PointQuadtree<number>(bounds, 10, 0, 0);
    expect(quadtree.objects).toBeDefined();
  });
});
