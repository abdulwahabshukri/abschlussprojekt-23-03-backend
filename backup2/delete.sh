#!/bin/bash

# Ordnerpfad, in dem Dateien gelöscht werden sollen
folder_path=./backup_2


# Löscht alle Dateien, die älter als 1 Stunde sind

yes | find $folder_path -type f -mmin +60 -exec rm {} \;

echo "Alle Dateien, die älter als 2 Stunden sind, wurden gelöscht."
