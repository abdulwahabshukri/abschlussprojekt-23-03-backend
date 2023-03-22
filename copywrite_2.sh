#!/bin/bash

# Pfad zur Quelldatei
source_file="/pfad/zur/datei.csv"

# Pfad zum Zielverzeichnis
target_dir="/pfad/zum/zielverzeichnis"

# Überwachen der Quelldatei auf Änderungen
while inotifywait -e -m modify "$source_file"; do
    # Kopieren der Datei ins Zielverzeichnis
    cp -f "$source_file" "$target_dir/$(date +%Y-%m-%d_%H-&M-%S)_donnees.csv"
done & disown
