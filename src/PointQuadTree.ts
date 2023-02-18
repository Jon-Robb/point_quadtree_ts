import {DoublyLinkedList} from './DoublyLinkedList'

export class PointQuadtree<T> {

    private maxObjectsPerNode
    private level : number
    private maxLevels : number
    private _objects : DoublyLinkedList<T>
    private _nodes : PointQuadtree<T>[]
    private _bounds : {x: number, y: number, width: number, height: number}

    constructor(bounds : {x: number, y: number, width: number, height: number}, maxObjectsPerNode: number = 10, level: number = 0, maxLevels: number = 4) {


        this.level = level
        this.maxLevels = maxLevels
        this._objects = new DoublyLinkedList<T>()
        this._nodes = []
        this._bounds = bounds

        
        this.nodes = [
            new PointQuadtree<T>({x: bounds.x, y: bounds.y, width: bounds.width / 2, height: bounds.height / 2}, maxObjectsPerNode, level + 1, maxLevels),
            new PointQuadtree<T>({x: bounds.x + bounds.width / 2, y: bounds.y, width: bounds.width / 2, height: bounds.height / 2}, maxObjectsPerNode, level + 1, maxLevels),
            new PointQuadtree<T>({x: bounds.x, y: bounds.y + bounds.height / 2, width: bounds.width / 2, height: bounds.height / 2}, maxObjectsPerNode, level + 1, maxLevels),
            new PointQuadtree<T>({x: bounds.x + bounds.width / 2, y: bounds.y + bounds.height / 2, width: bounds.width / 2, height: bounds.height / 2}, maxObjectsPerNode, level + 1, maxLevels)

        ]

    }

    public get bounds() {
        return this._bounds
    }

    public get objects() {
        return this._objects
    }

    public get nodes() {
        return this._nodes
    }

    public set bounds(bounds : {x: number, y: number, width: number, height: number}) {
        this._bounds = bounds
    }

    public set objects(objects : DoublyLinkedList<T>) {
        this._objects = objects
    }

    public set nodes(nodes : PointQuadtree<T>[]) {
        this._nodes = nodes
    }
}

let tree = new PointQuadtree<number>({x: 0, y: 0, width: 100, height: 100}, 10, 0, 2)
console.log (tree)