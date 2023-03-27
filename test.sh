#!/bin/bash

backup_dir="backup"
mkdir -p "$backup_dir"

while true
do
    inotifywait -e modify donnees.csv
    now=$(date +"%Y-%m-%d_%H-%M-%S")
    cp donnees.csv "$backup_dir/data_backup_$now.csv"
    chmod -w "$backup_dir/data_backup_$now.csv"
done