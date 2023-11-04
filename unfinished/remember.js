const DB = require('@mephisto5558/mongoose-db');
const db = new DB(process.env.MONGODB_URI, 'database');

const prefix = "+" // Hier ersetzen Sie "!" durch den tatsächlichen Präfix, den Sie verwenden

module.exports = {
  name: 'remember',
  description: 'Lasse mich dich an etwas erinnern',
  usage: 'text zeitpunkt',
    
  run: async function (message) {
    // Hier holen Sie den Text und den Zeitpunkt aus den Argumenten des Befehls
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const text = args.slice(1, -1).join(' '); // Text ist alles außer dem letzten Argument (dem Zeitpunkt)
    const timeSpecifier = args[args.length - 1]; // Das letzte Argument ist der Zeitpunkt, z.B. "10s" für Sekunden
    if(!text) return message.reply('An was und wann soll ich dich erinnern?')

    // Hier wird die Zeitdauer aus dem Zeitpunkt-Argument extrahiert
    const timeValue = parseInt(timeSpecifier); // Die Zahl aus dem Argument
    const timeUnit = timeSpecifier.slice(-1); // Die Zeiteinheit aus dem Argument (s für Sekunden)

    let durationInMilliseconds = 0;

    if (timeUnit === 's') {
      durationInMilliseconds = timeValue * 1000; // Umrechnung in Millisekunden für Sekunden
    } else {
      // Wenn die Zeiteinheit ungültig ist, können Sie hier eine Fehlermeldung ausgeben
      return message.reply('Verwende z.B. "10s".');
    }

    // Jetzt haben Sie den Text in der Variable "text" und die Dauer in Millisekunden in der Variable "durationInMilliseconds"

    const remindAt = new Date(Date.now() + durationInMilliseconds);
    const author = message.author; // Der Autor der Nachricht
    const who = db.set('Schreiber', author);
    const remember = db.set('Text', text);
    const rememberAt = db.set('Dauer', remindAt);

    const data = db.get('databases', 'Schreiber', 'Text', 'Dauer');

    if (data !== undefined) {
      data.then((nachricht) => {
        if (nachricht) {
          const { Text, Dauer } = nachricht;
          const timeRemaining = Dauer - Date.now();
    
          if (timeRemaining > 0) {
            setTimeout(() => {
              message.channel.send(`Erinnerung: ${Text}, Dauer: ${Dauer}`);
            }, timeRemaining);
          } else {
            message.channel.send('Die Dauer für die Erinnerung ist bereits abgelaufen.');
          }
        } else {
          message.channel.send('Keine Erinnerung gefunden.');
        }
      }).catch((error) => {
        console.error('Fehler beim Abrufen von Daten aus der Datenbank:', error);
      });
    } else {
      message.channel.send('Keine Daten in der Datenbank gefunden.');
    }}}