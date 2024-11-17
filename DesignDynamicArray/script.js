class DynamicArray {
  /**
   * @constructor
   * @param {number} capacity
   */
  constructor(capacity) {
    this.array = new Array(capacity); // Array fixo inicial
    this.capacity = capacity;         // Capacidade inicial do array
    this.size = 0;                    // Tamanho atual (número de elementos)
  }

  /**
   * @param {number} i
   * @returns {number}
   */
  get(i) {
    if (i < 0 || i >= this.size) {
      throw new Error("Index out of bounds");
    }
    return this.array[i];
  }

  /**
   * @param {number} i
   * @param {number} n
   * @returns {void}
   */
  set(i, n) {
    if (i < 0 || i >= this.size) {
      throw new Error("Index out of bounds");
    }
    this.array[i] = n;
  }

  /**
   * @param {number} n
   * @returns {void}
   */
  pushback(n) {
    if (this.size === this.capacity) {
      this.resize();
    }
    this.array[this.size] = n;
    this.size++;
  }

  /**
   * @returns {number}
   */
  popback() {
    if (this.size === 0) {
      throw new Error("Array is empty");
    }
    const lastElement = this.array[this.size - 1];
    this.size--;
    return lastElement;
  }

  /**
   * @returns {void}
   */
  resize() {
    const newCapacity = this.capacity * 2; // Dobra a capacidade
    const newArray = new Array(newCapacity);

    for (let i = 0; i < this.size; i++) {
      newArray[i] = this.array[i];
    }

    this.array = newArray; // Substitui o array antigo
    this.capacity = newCapacity; // Atualiza a capacidade
  }

  /**
   * @returns {number}
   */
  getSize() {
    return this.size;
  }

  /**
   * @returns {number}
   */
  getCapacity() {
    return this.capacity;
  }
}


// Criação do array dinâmico com capacidade inicial de 2
const dynamicArray = new DynamicArray(2);

// Testando o método pushback
console.log("Adicionando elementos...");
dynamicArray.pushback(10); // Adiciona 10
dynamicArray.pushback(20); // Adiciona 20
console.log(`Tamanho: ${dynamicArray.getSize()}`); // Deve ser 2
console.log(`Capacidade: ${dynamicArray.getCapacity()}`); // Deve ser 2

dynamicArray.pushback(30); // Adiciona 30 e deve redimensionar
console.log(`Tamanho após redimensionar: ${dynamicArray.getSize()}`); // Deve ser 3
console.log(`Capacidade após redimensionar: ${dynamicArray.getCapacity()}`); // Deve ser 4

// Testando o método get
console.log(`Elemento no índice 0: ${dynamicArray.get(0)}`); // Deve ser 10
console.log(`Elemento no índice 2: ${dynamicArray.get(2)}`); // Deve ser 30

// Testando o método set
dynamicArray.set(1, 50); // Atualiza o índice 1 para 50
console.log(`Novo valor no índice 1: ${dynamicArray.get(1)}`); // Deve ser 50

// Testando o método popback
console.log(`Removendo o último elemento: ${dynamicArray.popback()}`); // Deve ser 30
console.log(`Tamanho após remoção: ${dynamicArray.getSize()}`); // Deve ser 2

// Tentativa de acessar índice inválido
try {
  console.log(dynamicArray.get(5)); // Deve lançar um erro
} catch (error) {
  console.log(`Erro esperado: ${error.message}`);
}

// Tentativa de remover de um array vazio
try {
  dynamicArray.popback();
  dynamicArray.popback();
  dynamicArray.popback(); // Deve lançar um erro
} catch (error) {
  console.log(`Erro esperado: ${error.message}`);
}
