#!/bin/bash

# Pfad zur CSV-Datei
source_file="./donnees.csv"

# Pfad zum Backup-Verzeichnis
backup_verzeichnis="./backup_2"

# Überwachen der Quelldatei auf Änderungen
while inotifywait -e -m modify "$source_file"; 
do
    # Kopieren der Datei ins Zielverzeichnis mit Zeitstempel im Dateinamen
    cp -f "$source_file" "$backup_verzeichnis"

# Setzen des Schreibschutzes auf die kopierte Datei
    chmod 444 "$backup_verzeichnis"

done & disown
