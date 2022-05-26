#!/bin/bash
cd foldername
mkdir foldername1 foldername2 foldername3
cd foldername2
touch file1.txt file2.txt file3.txt file1.json file2.json
mkdir subfoldername1 subfoldername2 subfoldername3
ls -la
mv file2.txt file3.txt ../foldername3/