export class Storage {
    constructor() {
        this.storage = new Map();
    }

    setItem(key: KeyType, value: ValueType) {
        this.storage.set(key, value);
    }

    setItemOnce(key: KeyType, value: ValueType) {
        if (!this.isKeyExist(key)) {
            this.setItem(key, value);
        }

        return this.getItem(key);
    }

    getItem(key: KeyType): ValueType {
        return this.storage.get(key);
    }

    deleteItem(key: KeyType) {
        this.storage.delete(key);
    }

    clear() {
        this.storage.clear();
    }

    isKeyExist(key: KeyType): boolean {
        return this.storage.has(key);
    }


    private storage: Map<string, any>;
}

export type KeyType = string;
export type ValueType = boolean|number|string|Function|VoidFunction;
