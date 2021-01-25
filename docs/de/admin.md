[![Build Status](https://travis-ci.org/dkleber89/ioBroker.beckhoff.svg?branch=master)](https://travis-ci.org/dkleber89/ioBroker.beckhoff) [![Build status](https://ci.appveyor.com/api/projects/status/tpqe657lqrir3kew/branch/master?svg=true)](https://ci.appveyor.com/project/dkleber89/iobroker-beckhoff/branch/master) ![npm](https://img.shields.io/npm/dm/iobroker.beckhoff)
[![npm](https://img.shields.io/npm/v/iobroker.beckhoff.svg)](https://www.npmjs.com/package/iobroker.beckhoff) ![Number of Installations](http://iobroker.live/badges/beckhoff-stable.svg)  ![Number of Installations](http://iobroker.live/badges/beckhoff-installed.svg)

![Logo](img/beckhoff.png)

# ioBroker.beckhoff
Dieser ioBroker Adapter realisiert die Kommunikation mit eine Beckhof Steuerung (Twincat 2 oder 3) über das ADS Protokoll.
Das ADS Protocol ist in jeder Beckhoff Steuerung implementiert und kann ohne Lizenz verwendet werden.

Dieses Projekt hat keine Verbindung mit der Firma Beckhoff

## Beschreibung
### Anforderungen
* Beckhoff mit Netzwerkanschluss die in einem vom ioBroker erreichbaren Netzwerk hängt
    * Der Steuerung muss eine fixe IP-Adresse vergeben werden
    * Die Steuerung muss vom ioBroker pingbar sein
    * TwinCat 2 **ausgenommen BC Steuerungen** oder TwinCat 3

### Konfiguration der Steuerung
1. Im Projekt muss ADS aktiviert sein. Dazu im Steuerungsproject in die Taskkonfiguration gehen und die Checkbox `Symbole erzeugen` aktivieren. Dann die Konfiguration auf die Steuerung laden und diese neu starten. Ein Neustart ist nur nötig wenn TwinCat 2 verwendet wird.

    ![createSymbols](img/createSymbols.png)

2. In der Steuerung muss eine Statische Route angelegt werden. Die Route muss mit dem ioBroker zusammenpassen (IP-Adresse und AMS-Net-ID).

    Hier ein Beispiel wie das aussehen kann wenn die Route direkt auf der Steuerung hinzugefügt wird. Die Route kann auch über den Engineerien Rechner hinzugefügt werden.

    ![createSymbols](img/addRoute.png)

    Weitere Informationen über den TwinCat Router und die Steuerung allgemein kann im [Beckhoff Information System](https://infosys.beckhoff.com/ "Beckhoff Information System") nachgelesen werden.

3. Bei TwinCat 2 muss in der Steuerung noch eine Struktur angelegt werden. Die Struktur danach zu einer globalen Variablentabelle hinzufügen. Hier können dann alle benötigten Variablen angelegt werden. Der Datenaustausch wird dann von ADS und dem Adapter selbstständig ausgeführt.

    ##### Derzeit unterstützte Datentypen: BOOL, BYTE, WORD, DWORD, SINT, USINT, INT, UINT, DINT, UDINT, REAL, LREAL, STRING(80)

    OPTIONAL: Es kann eine Variable direkt in der Variablentabelle ohne Verschachtelung mit einem exakten Namen angelegt werden -> ioBrokerResync (Groß-/Kleinschreibung und Datentyp ist egal) -> Jedes mal wenn sich dieser Wert ändert wird die Variablentabelle im ioBroker neu eingelesen.

3. Bei TwinCat 3 muss in der Steuerung noch eine globale Variablentabelle angelegt werden. Hier können dann alle benötigten Variablen angelegt werden. Der Datenaustausch wird dann von ADS und dem Adapter selbstständig ausgeführt.

    ##### Derzeit unterstützte Datentypen: BOOL, BYTE, WORD, DWORD, SINT, USINT, INT, UINT, DINT, UDINT, REAL, LREAL, STRING(80)

    OPTIONAL: Es kann eine Variable direkt in der Variablentabelle ohne Verschachtelung mit einem exakten Namen angelegt werden -> ioBrokerResync (Groß-/Kleinschreibung und Datentyp ist egal) -> Jedes mal wenn sich dieser Wert ändert wird die Variablentabelle im ioBroker neu eingelesen.

### Adapter Einstellungen
#### Twincat 3 und Twincat 2
1. Runtimeversion auswählen
2. Ziel IP-Adress und AMS-Net-ID eintragen.
3. Bei TwinCat 2 den Instanznamen der Struktur aus der globale Variablentabelle eintragen.
4. Bei TwinCat 3 den korrekten Variablentabellennamen eintragen.
5. Die restlichen Punkte müssen normalerweise nicht geändert werden.

#### Twincat 2 <= v2.11.2240
Die *.tpy Datei aus dem SPS Projekt muss hochgeladen werden. -> Immer wenn am Struct der für die Kommunikation zum ioBroker zuständig ist etwas geändert wird muss diese Datei nochmals hochgeladen werden.

### Datenaustausch
- Sobald sich eine Variable in der Steuerung ändert wird dieser Wert selbstständig in den jeweiligen State im ioBroker übertragen.
- Wird ein Wert im ioBroker geändert (Wichtig: ACK muss FALSE sein!!) wird dieser selbstständig an die Steuerung übertragen. Wird der Wert von der Steuerung übernommen wird ACK auf TRUE gesetz.

### Wichtiges
1. Der TwinCAT AMS Router lässt keine mehrfachen TCP Verbindungen vom gleichen Host zu. Wenn zwei Instanzen vom selben Host zum selben TwinCat Router aufgebaut werden so wird vom Router automatisch die erste Verbindung geschlossen und nur der neusten geantwortet.
2. Der Adapter syncronisiert automatisch alle Variablen im ioBroker. Es gibt mehrere Möglichkeiten wie ein resync getriggert werden kann:
    - Wenn sich der Wert der Resyc Variable ändert (Siehe [hier](#Konfiguration-der-Steuerung))
    - Wenn die Steuerung länger nicht im RUN Modus ist als der Reconnect Interval -> Dann wird beim übergang der Steuerung in den RUN Modus die Variablentabelle resynchronisiert.
    - Wenn das Project auf die Steuerung geladen wird. Ausnahme -> OnlineChange
    - Wenn der Adapter neu gestartet wird.
3. Bei "Synchronisierung" bzw. "Einlesen" ist nicht der Werteaustausch der Variablen gemeint sondern die Synchronisierung der Variablen selbst und das anlegen bzw. löschen derselben im ioBroker
