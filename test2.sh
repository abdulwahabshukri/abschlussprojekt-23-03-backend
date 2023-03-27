#!/bin/bash

backup_dir="backup1"

while true
do
    inotifywait -e modify donnees.csv
    cp -f donnees.csv "$backup_dir"
    chmod -w "$backup_dir/donnees.csv"
done
