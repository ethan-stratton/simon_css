export const GameNotifier = {
    handlers: [],
    addHandler(handler) {
      this.handlers.push(handler);
    },
    removeHandler(handler) {
      this.handlers = this.handlers.filter(h => h !== handler);
    },
    broadcastEvent(userName, score) {
      this.handlers.forEach(handler => handler({ userName, score }));
    },
  };
  
  // Simulated score injection
  setInterval(() => {
    const score = Math.floor(Math.random() * 3000);
    const date = new Date().toLocaleDateString();
    const userName = 'Eich';
    this.broadcastEvent(userName, GameEvent.End, { name: userName, score: score, date: date });
  }, 5000);
  