import { DoublyLinkedList } from './DoublyLinkedList';
export class PointQuadtree {
    constructor(bounds, maxObjectsPerNode = 10, level = 0, maxLevels = 4) {
        this.level = level;
        this.maxLevels = maxLevels;
        this._objects = new DoublyLinkedList();
        this._nodes = [];
        this._bounds = bounds;
        this.nodes = [
            new PointQuadtree({ x: bounds.x, y: bounds.y, width: bounds.width / 2, height: bounds.height / 2 }, maxObjectsPerNode, level + 1, maxLevels),
            new PointQuadtree({ x: bounds.x + bounds.width / 2, y: bounds.y, width: bounds.width / 2, height: bounds.height / 2 }, maxObjectsPerNode, level + 1, maxLevels),
            new PointQuadtree({ x: bounds.x, y: bounds.y + bounds.height / 2, width: bounds.width / 2, height: bounds.height / 2 }, maxObjectsPerNode, level + 1, maxLevels),
            new PointQuadtree({ x: bounds.x + bounds.width / 2, y: bounds.y + bounds.height / 2, width: bounds.width / 2, height: bounds.height / 2 }, maxObjectsPerNode, level + 1, maxLevels)
        ];
    }
    get bounds() {
        return this._bounds;
    }
    get objects() {
        return this._objects;
    }
    get nodes() {
        return this._nodes;
    }
    set bounds(bounds) {
        this._bounds = bounds;
    }
    set objects(objects) {
        this._objects = objects;
    }
    set nodes(nodes) {
        this._nodes = nodes;
    }
}
let tree = new PointQuadtree({ x: 0, y: 0, width: 100, height: 100 }, 10, 0, 2);
console.log(tree);
